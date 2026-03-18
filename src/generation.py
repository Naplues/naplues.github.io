# generation.py

from md2pdf import convert_markdown_to_pdf_html
import time
import os


def gen():
    # 获取脚本所在目录的上级目录（项目根目录）
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../"))
    formatted_time = time.strftime('(%Y-%m-%d)', time.localtime())

    # 读取Markdown文件
    with open(os.path.join(project_root, "cv.md"), "r", encoding="utf-8") as f:
        markdown_content = f.read()

    # 替换图片相对路径为绝对路径
    photo_rel_path = "photos/2022.jpg"
    photo_abs_path = os.path.join(project_root, photo_rel_path)
    markdown_content = markdown_content.replace(
        f'src="{photo_rel_path}"',
        f'src="{photo_abs_path}"'
    )

    # 执行转换（输出路径也用绝对路径避免问题）
    output_pdf = os.path.join(project_root, f"assets/{formatted_time} 郭肇强个人简历.pdf")
    result = convert_markdown_to_pdf_html(
        markdown_text=markdown_content,
        output_path=output_pdf,
        title=f"{formatted_time} 郭肇强个人简历",
        page_size="A4",
        enable_mermaid=True
    )
    if result.get("success"):
        print(f"✅ 简历PDF生成成功！输出路径：{output_pdf}")
    else:
        print(f"❌ 简历PDF生成失败！错误信息：{result.get('error')}")


if __name__ == '__main__':
    gen()
