---
title: "论文实验 TODO"
description: "记录知识追踪论文实验设计、超参数选择和修复任务"
pubDate: 2026-03-26
tags: ["论文", "实验", "知识追踪"]
category: "论文笔记"
draft: false
visibility: "private"
---

## TODO

1. 超参数选取，主要包括：向量召回的相似度阈值与候选规模（Top-K）、LLM 语义重排后保留的相似题数量（Top-N）、以及预测 LLM 的温度参数（temperature）。调参以 Level-U 场景为主，兼顾总体 AUC/ACC 以评估最优的适合冷启动的参数。
2. 设计实验为更精确刻画模型在冷启动条件下的关键能力，我们分别从 新题目泛化能力（用Level-Q / Question Cold Start） 与 新学生适应速度（用Level-U / User Cold Start） 两个维度进行评估适应速度以及泛化能力。
3. 最终在系统冷启动 Level-S / System Cold Start下 绘制与各个模型在各个数据集对比的AUC曲线变化图，然后一个总表对比5轮随机种子划分的数据集的ACC与F1
4. 最后设计消融实验证明各部分的作用
5. 重绘架构图像
6. 验证参考文献

## 先验数据包括：

1. 当前题目统计信息（新题目时不存在）
2. 当前题目难度估计
3. 当前用户画像
4. 相似题目统计信息（语义相似和知识点相似）
5. 相似用户平均正确率（相似学习路径筛选相似用户）
6. 相似用户当前题目作答情况
7. 相似用户相似题目作答情况（相似题目中是否有相似用户做过的）

## 超参数实验设计：

数据集统一7:1.5:1.5划分

在level-U 用户冷启动下，使用XES3G5M数据集进行 
因为一开始数据集按照用户划分 所以这个级别冷启动很好做实验

向量数据库中存入的是7份的训练集，然后使用1.5份的验证集做实验

需要调参3个参数：

- 向量召回的相似度阈值
- LLM 语义重排后保留的相似题数量（Top-N）
- 预测 LLM 的温度参数

三个参数测试时的固定值为：阈值0.6，top-N为10道，温度0.2，测评一个参数时固定另外两个 

- 相似度阈值可选0.5  0.55 0.6 0.65 0.7 0.75 0.8 0.85 0.9（此时相似题目固定为10道，温度固定为0.2）
- TOP-N为4 6 8 10 12 14 16 18 20
- 温度为 0 0.1 0.2 0.3 0.4 0.5

筛选验证集中交互序列大于20的学生，然后使用学生前20道题目，预测第21道题目正确率



## 修复情况

# TODO List for Paper Revision

- [x] **概率与置信度术语统一**：检查全文关于"probability"、"prediction"与"confidence"的用法，确认是否需要区分或统一为"probability"表示模型输出的预测概率，用"confidence"表示对预测的置信程度（如温度参数影响）

- [x] **Agent职责链优化**：
   - Agent2：仅负责基于mask进行冷启动等级判断，输出cold_start_indicators
   - Agent3：基于Agent2输出的indicators选择对应的动态提示词模板
   - 修改各处涉及Agent2/Agent3职责描述，确保一致性

- [x] **冷启动定义精简**：删除多处重复解释题目冷启动定义的段落，仅在首次提及时简要说明即可

- [x] **知识点信息表述澄清**：重写关于"检索向量由题目文本+知识点路径联合构建"的表述，明确知识点信息作为输入协议中的必要字段，说明其作为语义索引的一级目录作用

- [x] **缺失知识点处理逻辑完善**：
   - 明确当数据集缺少显式知识点描述时的降级策略（技能标签→练习名称→其他语义代理）
   - 澄清题目侧统计与question content的关系，说明平滑估计的具体实现方式

- [x] **图1描述更新**：确保图示描述与系统架构更改后的叙述完全一致

- [x] **公式换行处理**：将长公式
   `m_u = \mathbb{1}[n_u^{(t-1)} > 0],\quad m_q = \mathbb{1}[n_q^{(t-1)} > \tau_q],\quad m_p = \mathbb{1}[n_{peer}^{(t-1)} > \tau_p]`
   拆分为多行以适应双栏排版

- [x] **提示模板职责修正**：明确提示模板选择是Agent3的职责，修改段落末尾对Agent2职责的描述

- [x] **数据结构重构**：
   - question_data：仅包含当前题目信息
   - statistics：细分相似题目信息及对应统计、相似用户信息及对应统计
   - 将相似题目及其统计信息整合为整体结构

- [x] **信息追溯描述调整**：删除或重写"将每段信息的来源与样本量同时暴露给下游以便追溯与误差分析"这一难以实现的表述，或给出具体可行的追溯方案

- [x] **提示构建与输出规范**：
  - 简化公式表述，考虑是否需要用公式
  - 明确描述根据indicator选择动态提示词模板的流程
  - 在附录中提供各冷启动等级对应的简洁提示词模板
  - 强制要求输出为JSON格式，添加输出校验和重试机制

- [x] **数据集描述修正**：删除XES3G5M等数据集中关于"包含嵌入"的表述，因为嵌入由系统自行构建；修正其他数据集描述中的冗余和不准确之处

- [x] **LLM语义对齐职责明确**：各处明确LLM筛选TOP-N语义对齐功能在Agent2中实现，Agent1仅作为数据底座提供原始数据

- [x] **历史数据时效性问题**：
  - 分析当前统计数据构建方式（直接使用全量数据）可能带来的未来信息泄露问题
  - 提出可行的解决方案：采用前缀构建方式，确保t时刻的统计仅使用t-1之前的数据
  - 实验描述中明确采用与基线模型一致的训练方式（全量训练）或更严格的前缀验证方式，并说明选择的合理性

- [x] **预测任务定义澄清**：
  - 明确预测任务是固定时刻t预测下一题，还是固定交互序列长度n预测第n+1题
  - 说明短序列用户的处理策略
  - 明确统计数据构建的时间点约束（如采用前缀构建，确保无未来信息泄露）

- [x] **冷启动场景数据利用表**：在三级冷启动场景设计评测协议后，添加表格说明各场景下重点利用的数据类型（用户自身历史、相似用户、相似题目、知识点等）

- [x] **在线前缀协议表述优化**：将"在线前缀协议"这一令人费解的叙述改写为更易懂的描述

- [x] **超参数实验设计**：
  - 明确实验设置：用户冷启动场景下，使用XES3G5M数据集，7份训练集构建向量数据库，1.5份验证集进行实验
  - 筛选验证集中交互序列＞20的学生，使用前20题预测第21题
  - 明确三个待调参数：相似度阈值、LLM语义重排保留相似题数量（Top-N）、预测LLM温度
  - 说明调参方法：固定其他两个参数测试一个参数（阈值0.6、Top-N=10、温度0.2作为基准）
  - 参数范围在图表中展示，正文只需说明设计思路

- [x] **问题级留出表述修正**：将"我们使用问题级留出集合 Qcold 构造 unseen questions 子集"改写为更清晰的表述

- [x] **章节冗余处理**：
  - 检查4.3、5.2、5.3章节是否存在内容重复
  - 若为递进关系，确保5.x章节比4.3更详细深入
  - 删除重复内容，保持逻辑递进

- [x] **5.3截断描述更新**：根据之前的变动修改5.3中关于20题目截断的相关叙述

- [x] **实验结果趋势分析**：基于真实实验数据或领域知识，准确描述图像中的实验结果趋势，确保分析符合实际情况

- [x] **消融实验重新设计**：根据实验部分的变更，设计更合理的消融实验方案，验证各模块的有效性

------

- /home/lzh/anaconda3/envs/KT/bin/python wandb_predict.py --save_dir=/mnt/data/lzh/marchen/KT/pykt_carc_experiments/results/checkpoints/carc_junyi2015_level_s_b32_s42__rekt/carc_junyi2015_level_s_b32_s42_rekt_qid_0.4_128_42_0_0.002_None_None_0_0 --use_wandb=0 --bz=256 --fusion_type=early_fusion,late_fusion
- /home/lzh/anaconda3/envs/KT/bin/python wandb_predict.py --save_dir=/mnt/data/lzh/marchen/KT/pykt_carc_experiments/results/checkpoints/carc_junyi2015_level_s_b64_s42__sakt/carc_junyi2015_level_s_b64_s42_sakt_qid_42_0_0.2_256_0.001_8_1_None_None_0_0 --use_wandb=0 --bz=256 --fusion_type=early_fusion,late_fusion
- /home/lzh/anaconda3/envs/KT/bin/python wandb_dimkt_train.py --dataset_name=carc_junyi2015_level_u_s42 --save_dir=/mnt/data/lzh/marchen/KT/pykt_carc_experiments/results/checkpoints/carc_junyi2015_level_u_s42__dimkt --seed=42 --fold=0 --use_wandb=0 --add_uuid=0
- /home/lzh/anaconda3/envs/KT/bin/python wandb_dimkt_train.py --dataset_name=carc_junyi2015_level_u_s42 --save_dir=/mnt/data/lzh/marchen/KT/pykt_carc_experiments/results/checkpoints/carc_junyi2015_level_u_s42__dimkt --seed=42 --fold=0 --use_wandb=0 --add_uuid=0
- /home/lzh/anaconda3/envs/KT/bin/python wandb_dimkt_train.py --dataset_name=carc_junyi2015_level_u_s42 --save_dir=/mnt/data/lzh/marchen/KT/pykt_carc_experiments/results/checkpoints/carc_junyi2015_level_u_s42__dimkt --seed=42 --fold=0 --use_wandb=0 --add_uuid=0
- /home/lzh/anaconda3/envs/KT/bin/python wandb_dimkt_train.py --dataset_name=carc_junyi2015_level_u_s42 --save_dir=/mnt/data/lzh/marchen/KT/pykt_carc_experiments/results/checkpoints/carc_junyi2015_level_u_s42__dimkt --seed=42 --fold=0 --use_wandb=0 --add_uuid=0

