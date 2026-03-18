# 郭肇强个人简历

- **应聘岗位：** 浙江大学 平台“百人计划”研究员
- **最高学位：** 南京大学计算机科学与技术专业博士
- **核心优势：** 5年软工技术研究和3年公司工程开发经验，累计发表论文20篇，具备从算法创新到系统实现的全栈能力。

---

## 👤 基础信息

<table>
  <tr>
    <th>项目</th>
    <th>信息</th>
    <th>照片</th>
  </tr>
  <tr>
    <td><strong>👤 姓名</strong></td>
    <td>郭肇强</td>
    <td rowspan="5" style="vertical-align: top;">
      <img src="photos/2022.jpg" alt="个人照片" width="150">
    </td>
  </tr>
  <tr>
    <td><strong>🎂 生日</strong></td>
    <td>1994年12月</td>
  </tr>
  <tr>
    <td><strong>✉️ 邮箱</strong></td>
    <td>gzq@smail.nju.edu.cn</td>
  </tr>
  <tr>
    <td><strong>📞 电话</strong></td>
    <td>(+86) 176-2602-5569</td>
  </tr>
  <tr>
    <td><strong>🌐 主页</strong></td>
    <td><a href="https://naplues.github.io">https://naplues.github.io/</a></td>
  </tr>

</table>

---

## 💼 工作经历

### 📅 2022-10 ~ 2026-03

- **高级工程师 | 2012/软件工程应用技术实验室 | 华为杭州研究所**
- **工作职责：** 
  - 智能化软件工程应用技术的孵化与落地，专注于AI辅助测试生成。
  - 高校技术合作项目经理，负责推动高校研究技术在企业内部落地。
- **工作成果：**
  - **UTGen-1.0**（面向单函数覆盖率提升，结合代码分支分析和prompt工程）；
  - **UTGen-2.0**（面向多函数领域适配，结合依赖分析、知识库构建和prompt工程）；
  - **灵犀-DT**（面向智能开发，结合agent调度和prompt工程）。

## 🎓 教育背景

### 📅 2017-09 ~ 2022-08

- **工学博士，计算机科学与技术专业 | 计算机科学与技术系 | 南京大学**
- **研究方向：** 软件质量保证（缺陷定位；缺陷预测；技术债的识别；静态分析工具的提升）
- **实验室：** 南京大学软件质量研究所 [徐宝文教授]
- **导师：** [周毓明，教授/博导]
- **毕业论文：** 《数据驱动的代码质量保证关键技术研究》
- **研究成果：** 通过大量实证研究揭示出：相比采用复杂的深度学习系列架构和方案，可以通过设计简洁高效的启发式方案实现SOTA的软件质量保证性能，验证了“奥卡姆剃刀”原理在软工领域的适用性。

### 📅 2013-09 ~ 2017-06

- **工学学士，软件工程方向 | 计算机科学与工程学院 | 南京理工大学**
- **GPA：** 3.28/4.0 (专业前10%)
- **主修课程：** JAVA程序设计、数据结构、操作系统、计算机网络、离散数学、数据库等。

---

## 📝 科研成果

### 科研经历概述

共发表学术论文 **20** 篇，其中以第一/通讯作者发表 **8** 篇（4篇 CCF-A，1篇 CCF-B，3篇CCF中文A类）。

- 在南京大学攻读博士学位期间主要研究方向为软件质量保证关键技术，涉及缺陷预测、技术债识别、缺陷定位等工作；
- 在华为公司工作期间主要工作内容为应用AI技术提升软件开发效能，涉及Prompt Engineering，RAG，AI Agent等AI技术的研究和应用。

### 📚 代表性论文

1. **Test Intention Guided LLM-based Unit Test Generation.**
    * 细分领域：单元测试用例生成
    * *ICSE 2025* (CCF-A类 软工顶会)
    * 结合提示词工程和程序分析技术，设计出一套基于AI的单元测试用例生成方案，在公司内部真实代码仓中取得SOTA的编译通过率和覆盖率。
    * [论文链接](https://ieeexplore.ieee.org/document/11029762/)

2. **Code-line-level bugginess identification: How far have we come, and how far have we yet to go?**
    * 细分领域：代码行级缺陷预测
    * *TOSEM 2022* (CCF-A类 软工顶刊)
    * 设计一个两阶段方法（文件阶段和行阶段），前一阶段预测buggy代码文件，后一阶段提取代码行级别的度量信息进一步预测出每个buggy代码文件中的buggy代码行。提高代码行级别的缺陷预测准确性，帮助开发者节省代码审查的工作量。
    * [论文链接](https://dl.acm.org/doi/10.1145/3582572) | [代码仓库](https://github.com/Naplues/CLBI)

3. **How far have we progressed in identifying self-admitted technical debts? A comprehensive empirical study.**
    * 细分领域：自承认技术债的识别
    * *TOSEM 2021* (CCF-A类 软工顶刊)
    *
   挖掘出与技术债强相关的任务注释标签作为指示器进行技术债识别，其效果优于当前复杂模型或相当。识别软件中蕴含的以代码注释形式存在的自承认技术债(
   SATD)，报告给维护人员对其进行修复和移除。
    * [论文链接](https://dl.acm.org/doi/10.1145/3447247) | [代码仓库](https://github.com/Naplues/MAT)

4. **Boosting crash-inducing change localization with rank-performance-based feature subset selection.**
    * 细分领域：崩溃引入变更的定位
    * *EMSE 2020* (CCF-B类 软工重要期刊)
    * 从软件历史数据中抽取变更级别的特征来建模，设计一种基于排序性能的特征选择方法优化预测模型。定位可能给软件系统引入崩溃错误的代码变更，帮助开发人员在代码提交阶段及时进行代码审查。
    * [论文链接](https://doi.org/10.1007/s10664-020-09802-1) | [代码仓库](https://github.com/Naplues/Selector)

### 📚 一作论文列表(包含共一/通讯)

- **`CCF-A Journal`** Zezhou Yang, Cuiyun Gao, **Zhaoqiang Guo**\*, Zhenhao Li, Kui Liu, Xin Xia, Yuming Zhou. [**A roadmap for modern code review: Challenges and opportunities.**](https://dl.acm.org/doi/10.1145/3800963) ***ACM Transactions on Software Engineering and Methodology***, 2026-02-26, Accepted.

- **`CCF-A Journal`**  **Zhaoqiang Guo**, Tingting Tan, Shiran Liu, Xutong Liu, Wei Lai, Yanhui Li, Lin Chen, Wei Dong, Yuming Zhou\*. [**Mitigating false positive static analysis warnings: Progress, Challenges, and Opportunities.**](https://ieeexplore.ieee.org/document/10305541/) ***IEEE Transactions on Software Engineering***. 2023, 49(12), 5154-5188.

- **`CCF-A Journal`**  **Zhaoqiang Guo**, Shiran Liu, Xutong Liu, Wei Lai, Mingliang Ma, Xu Zhang, Chao Ni, Yibiao Yang, Yanhui Li, Lin Chen, Guoqiang Zhou, Yuming Zhou\*. [**Code-line-level bugginess identification: How far have we come, and how far have we yet to go?**](https://dl.acm.org/doi/10.1145/3582572) ***ACM Transactions on Software Engineering and Methodology***, 2022, 32(4), 102:1-102:55.

- **`CCF-A Journal`**  **Zhaoqiang Guo**, Shiran Liu, Jinping Liu, Yanhui Li, Lin Chen, Hongmin Lu, Yuming Zhou\*. [**How far have we progressed in identifying self-admitted technical debts? A comprehensive empirical study.**](https://dl.acm.org/doi/10.1145/3447247) ***ACM Transactions on Software Engineering and Methodology***, 2021, 30(4), 45:1-45:56.

- **`CCF-B Journal`** **Zhaoqiang Guo**, Yanhui Li, Wanwangying Ma, Yuming Zhou\*, Hongmin Lu, Lin Chen, Baowen Xu. [**Boosting crash-inducing change localization with rank-performance-based feature subset selection.**](https://doi.org/10.1007/s10664-020-09802-1) ***Empirical Software Engineering***, 2020, 25(3), 1905-1950.

- **`CCF 中文A类期刊`** 周慧聪, **郭肇强(共一)**, 梅元清, 李言辉\*, 陈林, 周毓明\*. [**版本失配和数据泄露对基于缺陷报告的缺陷定位模型的影响.**](https://www.jos.org.cn/jos/article/abstract/6401) ***软件学报***, 2023, 34(5), 2196–2217.

- **`CCF 中文A类期刊`** **郭肇强**, 刘释然, 谭婷婷, 李言辉\*, 陈林, 周毓明\*, 徐宝文. [**自承认技术债的研究: 问题、进展与挑战.**](https://www.jos.org.cn/jos/article/abstract/6292) ***软件学报***, 2022, 33(1), 26-54.

- **`CCF 中文A类期刊`** **郭肇强**, 周慧聪, 刘释然, 李言辉\*, 陈林, 周毓明\*, 徐宝文. [**基于信息检索的缺陷定位: 问题、进展与挑战.**](https://www.jos.org.cn/jos/article/abstract/6087) ***软件学报***, 2020, 31(9), 2826−2854.

### 📚 合作论文列表

- **`arXiv`** Bei Chu, Yang Feng\*, Kui Liu, **Zhaoqiang Guo**, Yichi Zhang, Hange Shi, Zifan Nan, Baowen Xu. [**Large Language Models for Unit Test Generation: Achievements, Challenges, and Opportunities.**](https://arxiv.org/abs/2511.21382) 2025.

- **`CCF-A Conference`** Bei Chu, Yang Feng\*, Kui Liu, Hange Shi, Zifan Nan, **Zhaoqiang Guo**, Baowen Xu. [**PALM: Synergizing Program Analysis and LLMs to Enhance Rust Unit Test Coverage.**](https://ieeexplore.ieee.org/document/11334728/) ***ASE2025*** 2720-2732.

- **`CCF-A Conference`** Zifan Nan, **Zhaoqiang Guo**, Kui Liu, Xin Xia\*. [**Test Intention Guided LLM-based Unit Test Generation.**](https://ieeexplore.ieee.org/document/11029762/) ***ICSE 2025*** 1026-1038.

- **`CCF-A Conference`** Di Wu, Lin Shi\*, **Zhaoqiang Guo**, Kui Liu, Weiguang Zhuang,Yuqi Zhong, Li Zhang. [**iSMELL: Assembling LLMs with Expert Toolsets for Code Smell Detection and Refactoring.**](https://dl.acm.org/doi/pdf/10.1145/3691620.3695508) ***ASE-2024***. 1345-1357.

- **`CCF-A Journal`**  Shiran Liu, **Zhaoqiang Guo**, Yanhui Li, Chuanqi Wang, Lin Chen, Zhongbin Sun, Yuming Zhou\*, Baowen Xu. [**Inconsistent defect labels: Essential, causes, and influence.**](https://ieeexplore.ieee.org/document/9729569) ***(TSE-2023)***. 49(2), 586-610.

- **`CCF-B Journal`** Shiran Liu, **Zhaoqiang Guo**, Yanhui Li, Hongmin Lu, Lin Chen, Lei Xu, Yuming Zhou\*, Baowen Xu. [**Prioritizing documentation effort: Can we do it simpler but better?**](https://www.sciencedirect.com/science/article/pii/S0950584921001440) ***(IST-2021)***, 140.

- **`CCF-B Journal`** Yufei Zhou, Xutong Liu, **Zhaoqiang Guo**, Yuming Zhou\*, Corey Zhang, Junyan Qian. [**Deep learning or classical machine learning? An empirical study on line-level software defect prediction.**](https://onlinelibrary.wiley.com/doi/10.1002/smr.2696)  ***Journal of Software: Evolution and Process***, 2024, 36(10), .

- **`CCF-B Journal`** Xutong Liu, Shiran Liu, **Zhaoqiang Guo**, Peng Zhang, Yibiao Yang, Huihui Liu, Hongmin Lu, Yanhui Li, Lin Chen, Yuming Zhou\*. [**Towards a framework for reliable performance evaluation in defect prediction.**](https://www.sciencedirect.com/science/article/pii/S016764232400087X?via%3Dihub)  ***Science of Computer Programming***, 2024, 238:103164.

- **`CCF-C Journal`** Yuanqing Mei, Yi Rong, Shiran Liu, **Zhaoqiang Guo**, Yibiao Yang, Hongmin Lu, Yutian Tang, Yuming Zhou\*. [**Deriving thresholds of object-oriented metrics to predict defect-proneness of classes: A large-scale meta-analysis.**](https://www.worldscientific.com/doi/10.1142/S0218194023500110) ***International Journal of Software Engineering and Knowledge Engineering***, 2023, 33(5), 651-695.

- **`CCF 中文A类期刊`** 唐家昕, 王璇, 赖伟, 路则雨, **郭肇强**, 杨已彪, 周毓明\*. [**深度学习驱动的软件漏洞预测: 问题、进展与挑战.**](https://www.jos.org.cn/jos/article/abstract/7376) ***软件学报***, 2025, 36(11), 4906–4952.

- **`CCF 中文A类期刊`** 路则雨, 张鹏, 王洋, **郭肇强**, 杨已彪, 周毓明\*. [**测试集有效性评价：问题、进展与挑战.**](https://www.jos.org.cn/jos/article/abstract/6953) ***软件学报***, 2024, 35(2), 532–580.

- **`CCF 中文A类期刊`** 刘旭同, **郭肇强**, 刘释然, 张鹏, 卢红敏, 周毓明\*. [**软件缺陷预测模型间的比较实验：问题、进展与挑战.**](https://www.jos.org.cn/jos/article/abstract/6714) ***软件学报***, 2023, 34(2), 582–624.

- **`CCF 中文A类期刊`** 梅元清, **郭肇强**, 周慧聪, 李言辉, 陈林, 卢红敏, 周毓明\*. [**面向对象软件度量阈值的确定方法：问题、进展与挑战.**](https://www.jos.org.cn/jos/article/abstract/6503) ***软件学报***, 2023, 34(1), 50-102.

### 💻 学术职务

担任 *TSE*, *ASEJ* 等期刊的审稿人。

### 🏢 博士参与的科研项目

- 【国家自然科学基金面上项目】 基于混和效应移除的测试集有效性预测模型及其应用研究
- 【国家自然科学基金面上项目】 软件生态系统中的跨项目缺陷分析与理解
- 【国家自然科学基金面上项目】 基于机器学习的可解释缺陷预测模型研究

---

## 🌟 其他个人情况

### 🏆 荣誉奖项

- 【华为】2024：可信理论、技术与工程实验室总裁奖-创新领先挑战令总裁奖
- 【华为】2024：明日之星，云核心网研发竞争力构筑多元化激励-跨组织协作支撑奖
- 【硕博】2021：年度中国电科十四所国瑞奖学金，年度优秀研究生标兵；
- 【硕博】2020：年度江苏金融租赁奖学金，年度优秀研究生；
- 【本科】2017：年度卓越工程师教育培养计划。
- 【本科】2013-2017：年度获得4次优秀学奖学金；

### 🔧 领域技能

**科研技能**

- **软件数据挖掘：** 挖掘软件仓库获取原始数据，进行数据预处理、抽取与处理有用的软件特征。
- **数据驱动建模：** 利用软件历史数据构建预测模型辅助解决现实中出现的问题。
- **系统性思维：** 能够将复杂问题分解为模型可理解和执行的步骤。

**工程技能**

- **编程语言** Python、Java
- **AI Agent框架：** Microsoft Agent Framework, Langchain等。

**语言技能**

- **英语：** 具备熟练的学术写作与国际会议报告能力。

### 📈 自我评价

- 【性格爱好】性格稳重；内心阳光，不以物喜，不以己悲；有强烈的求知欲，对未来充满希望；热爱运动(马拉松)。
- 【为人处事】待人随和，乐于助人；乐于融入集体，遇到矛盾首先反思自身的不足；遇到难题会积极探索解决办法。
- 【学习工作】对待工作态度认真严谨，有较强的责任心，能够吃苦耐劳，且善于学习，能够快速适应新环境的工作。
