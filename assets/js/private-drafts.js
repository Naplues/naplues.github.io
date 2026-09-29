// Decrypts the "under submission" paper list into the #private-drafts container.
//
// The section is invisible to everyone: it activates only when the URL hash contains
// "drafts" (e.g. https://naplues.github.io/#drafts). The paper data itself is ciphertext
// in private-drafts.data.js; the passphrase is never stored anywhere — it is typed here
// and processed client-side only. A wrong passphrase fails AES-GCM authentication and
// reveals nothing.
(function () {
  'use strict';

  var DATA_URL = '/assets/js/private-drafts.data.js';
  var container = document.getElementById('private-drafts');
  var dataLoaded = false;
  var shown = false;

  function b64ToBytes(b64) {
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  function loadScript(url, onLoad, onError) {
    var s = document.createElement('script');
    s.src = url;
    s.onload = onLoad;
    s.onerror = onError;
    document.head.appendChild(s);
  }

  async function deriveKey(passphrase, salt, iters) {
    var enc = new TextEncoder();
    var baseKey = await crypto.subtle.importKey('raw', enc.encode(passphrase), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: salt, iterations: iters, hash: 'SHA-256' },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt'],
    );
  }

  async function decryptDrafts(passphrase) {
    var d = window.__PRIVATE_DRAFTS__;
    if (!d) throw new Error('no data');
    var key = await deriveKey(passphrase, b64ToBytes(d.salt), d.iters);
    var pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64ToBytes(d.iv) }, key, b64ToBytes(d.ct));
    return new TextDecoder().decode(new Uint8Array(pt));
  }

  function setStatus(msg, isError) {
    var s = document.getElementById('private-drafts-status');
    if (!s) return;
    s.textContent = msg || '';
    s.hidden = !msg;
    s.classList.toggle('private-drafts-error', !!isError);
  }

  function renderCard() {
    container.innerHTML =
      '<div class="private-drafts-card">' +
        '<h3>🔒 Under Submission (Private)</h3>' +
        '<p class="private-drafts-hint">Enter the passphrase to view papers under submission.</p>' +
        '<div class="private-drafts-row">' +
          '<input type="password" id="private-drafts-pwd" placeholder="Passphrase" autocomplete="off">' +
          '<button type="button" id="private-drafts-unlock">Unlock</button>' +
        '</div>' +
        '<p id="private-drafts-status" class="private-drafts-status" hidden></p>' +
      '</div>';
    container.hidden = false;
    var pwd = document.getElementById('private-drafts-pwd');
    var btn = document.getElementById('private-drafts-unlock');
    pwd.focus();
    var submit = function () { onUnlock(pwd.value); };
    btn.addEventListener('click', submit);
    pwd.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  }

  function onUnlock(passphrase) {
    setStatus('Decrypting…', false);
    decryptDrafts(passphrase).then(function (html) {
      container.innerHTML =
        '<div class="private-drafts-toolbar"><button type="button" id="private-drafts-lock">🔒 Lock</button></div>' +
        html;
      container.hidden = false;
      document.getElementById('private-drafts-lock').addEventListener('click', renderCard);
    }).catch(function () {
      setStatus('Incorrect passphrase.', true);
    });
  }

  function show() {
    if (!container || shown) return;
    if (!/drafts/i.test(location.hash)) return;
    shown = true;
    if (dataLoaded) { renderCard(); return; }
    loadScript(DATA_URL, function () {
      dataLoaded = true;
      if (!window.__PRIVATE_DRAFTS__) {
        container.textContent = 'No private drafts configured. Run src/encrypt-drafts.mjs first.';
        container.hidden = false;
        return;
      }
      renderCard();
    }, function () {
      container.textContent = 'Failed to load private drafts data.';
      container.hidden = false;
    });
  }

  function hide() {
    if (!container) return;
    if (/drafts/i.test(location.hash)) return; // still active — leave it
    container.innerHTML = '';
    container.hidden = true;
    shown = false;
  }

  document.addEventListener('DOMContentLoaded', show);
  window.addEventListener('hashchange', function () { show(); hide(); });
})();
