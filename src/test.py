from md2pdf import convert_markdown_to_pdf_html
import os

# 获取当前脚本所在的目录
current_dir = os.path.dirname(os.path.abspath(__file__))

# --- 准备工作 ---
# 1. 准备一个测试图片，你可以放任何一张小图片到这个目录下，命名为 'test.png'
#    或者修改下面的代码，指向你已有的图片。

# 2. 构建图片的绝对路径 (这是最稳妥的方式)
#    假设你的测试图片就放在脚本同目录下，叫 'test.png'
image_path = os.path.join(current_dir, 'test.png')

# 3. 构建一个极简的Markdown内容，分别测试两种语法
markdown_content = f"""
# 图片测试

## 测试1: 标准Markdown语法
![测试图片]({image_path})

## 测试2: 使用本地文件名（假设图片在同目录）
![测试图片](test.png)

"""
# --- 执行转换 ---
output_pdf = os.path.join(current_dir, 'test_output.pdf')
print(f"正在转换，输出PDF到: {output_pdf}")

result = convert_markdown_to_pdf_html(
    markdown_content,
    output_pdf,
    title="图片测试"
)

print("转换完成！请检查PDF文件。")