# generation.py

from md2pdf import convert_markdown_to_pdf_html
import time

import os

os.chdir(r"D:/Repo/naplues.github.io")


def gen():
    formatted_time = time.strftime('(%Y-%m-%d)', time.localtime())

    # 读取你的Markdown文件
    with open("cv.md", "r", encoding="utf-8") as f:
        markdown_content = f.read()

    # 执行转换
    result = convert_markdown_to_pdf_html(
        markdown_text=markdown_content,
        output_path=f"assets/{formatted_time} 郭肇强个人简历.pdf",
        title=f"{formatted_time} 郭肇强个人简历",
        page_size="A4",
        enable_mermaid=True
    )
    if result.get("success"):
        print(f"✅ 简历PDF生成成功！")
    else:
        print(f"简历PDF生成失败！")


if __name__ == '__main__':
    gen()
