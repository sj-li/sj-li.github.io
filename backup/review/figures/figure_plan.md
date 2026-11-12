# 逐篇论文选图记录

比较依据：[参考主页](https://limanling.github.io/)的论文 teaser。优先选择能在约 180 × 112 px 下辨识的真实场景、任务示例、定性结果和简洁示意；去掉无关白边，保留比较语义与必要标签。所有图片均取自论文或作者/出版社正式公开的材料。

本轮检查 43 条记录：38 篇读取本地完整 PDF 的相关正文与候选图；WeSAM++ 读取公开全文 HTML；其余 4 篇读取可获取的官方摘要、代码/项目文档或出版社素材。未将无法获得全文的条目标成全文精读。

## 00 · Motion Subspace Canonicalization for Design-Intent Evaluation in CAD Sketches

- 核心内容：Motion-subspace canonicalization evaluates CAD constraint sets by the infinitesimal redesign motions they permit, reducing sensitivity to syntactic annotation differences. The authors release 292 sketches with three independent expert constraint annotations per sketch.
- 阅读范围：Author abstract, official implementation README, evaluation/data-release documentation and original saved dataset previews. A public paper PDF was not located.
- 选图：[official-dataset-preview](https://github.com/kakukakujirori/SketchIntent/releases/tag/v.1.0.0)
- 选择理由：用官方数据集中真实保存的 CAD 预览替代 GitHub 标题卡。比较全部保存预览后，选择轮廓清楚且约束标记没有被画面边界截断的两例；保留原约束与背景。它们是数据示例，并非模型预测或论文结果图。
- 可用素材限制：No public paper PDF located. Thumbnail shows original author-released dataset previews, not a paper screenshot.
- 候选比较：
  - {"source": "https://github.com/kakukakujirori/SketchIntent", "reason": "GitHub 预览卡只有文字，无法展示研究内容。"}
  - {"source": "Official SketchIntent-292 saved CAD previews", "reason": "实际草图与约束可直接说明 CAD 设计意图主题。"}

## 01 · PanDA: Panoptic Domain Adaptation for Multimodal Perception in Autonomous Driving

- 核心内容：PanDA adapts multimodal 3D panoptic segmentation without target annotations. It combines mean-teacher learning, asymmetric multimodal dropping to address modality imbalance, and 2D semantic plus 3D geometric pseudo-label refinement. Experiments cover time, weather, location and sensor shifts.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 1 · Fig. 1](https://arxiv.org/pdf/2604.19379)
- 选择理由：The introductory two-block concept illustration is much simpler and more colourful than the complete training architecture. RGB/LiDAR corruption and the broken-to-complete instance remain recognisable as a thumbnail.
- 候选比较：
  - {"page": 3, "figure": 2, "reason": "Complete architecture contains small text and many training-flow arrows; current thumbnail was too dense."}
  - {"page": 8, "figure": 3, "reason": "Error maps have sparse pale points and many comparison columns, so the visual subject is weak at small size."}

## 02 · Patch-as-Decodable-Token: Towards Unified Multi-Modal Vision Tasks in MLLMs

- 核心内容：PaDT introduces patch-derived Visual Reference Tokens into the language model output vocabulary and decodes their hidden states into boxes and masks. A random foreground-token training strategy supports detection, referring comprehension, segmentation and region captioning, with evaluations at 3B and 7B scales.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 23 · Fig. 10](https://arxiv.org/pdf/2510.01954)
- 选择理由：A coherent 2×2 selection of actual box/mask outputs makes direct visual prediction obvious without requiring readers to decipher a token architecture. The couch and food scenes provide clear objects and strong red-mask contrast. These are selected output panels from the same figure, not a new experiment.
- 候选比较：
  - {"page": 2, "figure": 1, "reason": "Overview mixes three textual task descriptions and very small photographs."}
  - {"page": 22, "figure": 9, "reason": "Full baseline comparison has many methods, repeated images and tiny error labels."}
  - {"page": 24, "figure": 12, "reason": "Region-captioning examples are dominated by long generated paragraphs."}

## 03 · Thinking Ahead: Foresight Intelligence in MLLMs and World Models

- 核心内容：FSU-QA evaluates semantic future understanding from historical driving video and ego trajectories, including agent relations, vulnerable-road-user risks and counterfactual outcomes. Its benchmark tests VLM foresight and semantic consistency of generated world-model futures; the paper reports persistent gaps and improvements from dataset fine-tuning.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 7 · Fig. 2](https://arxiv.org/pdf/2511.18735)
- 选择理由：Selected frames retain the original yellow historical and green future framing, plus object boxes and counterfactual paths. Two chronological sequences are easier to recognise than the overview card with benchmark statistics. Frames are nonconsecutive samples from the same two illustrated cases, with the original order preserved.
- 候选比较：
  - {"page": 3, "figure": 1, "reason": "Three infographic columns are text-heavy at homepage size."}
  - {"page": 35, "figure": 27, "reason": "Full film strips are extremely wide and would shrink to a thin line."}

## 04 · MonoSR: Open-Vocabulary Spatial Reasoning from Monocular Images

- 核心内容：MonoSR curates over one million spatial QA pairs from monocular RGB images with observability filtering, spanning indoor, outdoor and object-centric domains. It organises tasks into perception, imagination and situational reasoning; auxiliary geometric-information studies expose large metric-estimation gaps.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 11 · Fig. 5](https://arxiv.org/pdf/2511.19119)
- 选择理由：Six source photographs are arranged as three domain columns instead of a long six-example strip. The existing scene markers remain intact. Photographs occupy the thumbnail rather than fine-print QA text; these are illustrations of dataset coverage, not model predictions.
- 候选比较：
  - {"page": 2, "figure": 1, "reason": "Pastel overview is attractive but too much tiny text surrounds small scenes."}
  - {"page": 3, "figure": 2, "reason": "Curation pipeline communicates dataset processing rather than the concrete spatial tasks."}

## 05 · One Agent to Guide Them All: Empowering MLLMs for Vision-and-Language Navigation via Explicit World Representation

- 核心内容：GTA decouples metric world reconstruction from frozen-MLLM semantic planning, serialising TSDF geometry, topological history and egocentric views into a navigation interface. Counterfactual branch reasoning checks expected observations. R2R-CE/RxR-CE evaluation and demonstrations on wheeled, quadrupedal and aerial platforms support the design.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 18 · Fig. 5](https://arxiv.org/pdf/2602.15400)
- 选择理由：A crop of the real quadruped deployment gives a single clear robot and environment, replacing the dense three-module pipeline. It is explicitly a real-world demonstration panel, not an aggregate quantitative result. Only the later section of the quadruped sequence is shown.
- 候选比较：
  - {"page": 3, "figure": 2, "reason": "Architecture is wide and text-dense, with most space devoted to small labels."}
  - {"page": 5, "figure": 3, "reason": "Eight navigation steps have tiny egocentric frames below very small maps."}
  - {"page": 18, "figure": 5, "reason": "The full multi-platform figure is very tall; selected physical deployment panel works better in a landscape thumbnail."}

## 06 · Perception-Aware Multimodal Spatial Reasoning from Monocular Images

- 核心内容：The model grounds referred objects using all associated Visual Reference Tokens and deterministic token ordering, then trains with a visual/textual chain-of-thought dataset. Standard supervised fine-tuning improves six SURDS monocular driving tasks, with an overall reported score of 68.07; the paper discusses RL as future work.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 6 · Fig. 2](https://arxiv.org/pdf/2603.06985)
- 选择理由：Four intact example cards make the actual geometric questions concrete, while retaining task titles, predictions and ground-truth indicators. Cropping from six to four cards avoids compressing the already small scene images into a wide strip.
- 候选比较：
  - {"page": 1, "figure": 1, "reason": "Compact architecture still consists mostly of token and language-model boxes."}
  - {"page": 6, "figure": 2, "reason": "The complete 3×2 gallery is too wide; four coherent adjacent cards retain both single- and multi-object tasks."}

## 07 · Talk2Escape: Conversational Grounding for Vision-and-Language Navigation

- 核心内容：Talk2Escape monitors repeated or divergent robot motion, forms grounded help-seeking questions, and injects corrective feedback into an existing VLN agent. Simulated evaluations compare multiple base agents and sparse trigger choices; physical Go2 trials show recovery and expose limits of fragmented human observations.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 7 · Fig. 4](https://arxiv.org/pdf/2609.28296)
- 选择理由：The real robot, red failure mark, green recovery mark and short dialogue convey the paper’s purpose immediately. This is a more distinctive visual story than a full control-and-language pipeline and keeps both the failure and correction context intact.
- 候选比较：
  - {"page": 1, "figure": 1, "reason": "Paradigm diagram explains feedback loops but its small abstractions are less concrete."}
  - {"page": 3, "figure": 2, "reason": "Current framework image contains many miniature observation, detector and dialogue components."}
  - {"page": 6, "figure": 3, "reason": "Intervention-frequency curves cannot communicate the task without reading axes."}

## 08 · Efficient Online Robotic Reinforcement Learning with Explicit Manifold Alignment

- 核心内容：REMA calibrates binary RL rewards using the spectral distance of failed trajectories from successful demonstrations. It penalizes off-manifold failures while leaving informative near-success failures unchanged. The project evaluates simulation and human-in-the-loop robot manipulation.
- 阅读范围：Official project abstract, complete method explanation, simulation/real-world results, ablations and failure discussion; public journal abstract. Full journal PDF was unavailable.
- 选图：[project-teaser-crop](https://wkguo.github.io/REMA/assets/images/teaser.png)
- 选择理由：保留原 teaser 中最直观的真实机器人与两类失败轨迹，去掉右侧密集性能柱状图。原有 On-/Off-manifold 标记完整保留，未改变轨迹或比较含义。
- 可用素材限制：Selected from the official project teaser; not claimed to be a full-paper review.
- 候选比较：
  - {"source": "https://wkguo.github.io/REMA/assets/images/pipeline.png", "reason": "完整方法图比机器人画面更密集。"}
  - {"source": "https://wkguo.github.io/REMA/assets/images/realworld_result.png", "reason": "多项曲线更适合正文阅读。"}

## 09 · Prioritizing Faithfulness: Efficient Zero-Shot Novel View Synthesis via Homography-Guided SA-RePaint

- 核心内容：The official implementation uses homography-guided latent deformation and spatially adaptive RePaint for zero-shot camera-controlled novel-view synthesis, aiming to balance source-scene faithfulness and generative quality. The repository documents image/video inputs and evaluations on DAVIS, Tanks and Temples, MannequinChallenge and DL3DV.
- 阅读范围：Official implementation README, inference/evaluation documentation and all 25 frames of the official qualitative comparison. The public OpenReview PDF request returned 403.
- 选图：[official-demo-frame](https://raw.githubusercontent.com/kakukakujirori/SA-RePaint-NVS/main/assets/elephant_00025_zoomout_1.0.gif)
- 选择理由：从原六方法拼图中只取 Ours 的一个完整输出视图，主体清晰，适合小尺寸展示。选用镜头已经明显拉远的第 18 帧；它是单个结果示例，不用于宣称优于基线。
- 可用素材限制：No accessible full paper PDF; chosen image is the official demonstration output.
- 候选比较：
  - {"frame": 0, "reason": "初始视角尚不能体现新视图生成。"}
  - {"frame": 12, "reason": "完整六方法拼图使每个主体过小。"}
  - {"frame": 24, "reason": "运动末帧场景裁切更多，主体较小。"}

## 10 · Sam-Guided Multi-View Fusion for Weakly Supervised 3D Point Cloud Segmentation

- 核心内容：The method renders point clouds into multiple views, obtains SAM masks, and transfers them to a 3D hypergraph whose mask hyperedges propagate sparse labels. Geometric hyperedges and confidence filtering improve pseudo-label consistency; S3DIS and ScanNet evaluations study extremely sparse annotations and view-count ablations.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 4 · Fig. 4](https://alex-xun-xu.github.io/Doc/Publication/2026/QiaoEtAl_ICASSP26.pdf)
- 选择理由：The original nine-column ablation grid becomes a faithful three-column RGB / ours (1 point) / GT selection, covering three scenes. Warm-coloured room geometry and coherent masks remain visible; unrelated baseline columns are omitted and the retained column meanings are recorded.
- 候选比较：
  - {"page": 2, "figure": 1, "reason": "Full pipeline has many small masks, arrows and equations."}
  - {"page": 2, "figure": 2, "reason": "Hypergraph explanation is conceptual and text-heavy."}
  - {"page": 4, "figure": 4, "reason": "Original nine-column comparison shrinks each scene too much; retained meaningful columns only."}

## 11 · Global-Aware Monocular Semantic Scene Completion with State Space Models

- 核心内容：GA-MonoSSC learns separate 2D geometric and semantic features with a transformer encoder, then uses a frustum-reordered Mamba decoder for long-range 3D scene completion. Indoor evaluations on NYUv2 and Occ-ScanNet support the benefit of global context; NYUv2 comparisons also show class-dependent strengths rather than uniform gains.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 8 · Fig. 5](https://arxiv.org/pdf/2503.06569)
- 选择理由：Input, ground truth and the proposed coloured voxel reconstruction for two rooms show the input-to-3D task in a glance. The selected columns replace a five-column method comparison and remove a dense encoder architecture. Column order and source row identities are preserved in the record.
- 候选比较：
  - {"page": 1, "figure": 1, "reason": "Perspective-projection sketch explains a limitation, not the scene-completion result."}
  - {"page": 4, "figure": 3, "reason": "Current encoder architecture is mostly tiny boxes and labels."}
  - {"page": 5, "figure": 4, "reason": "Mamba/frustum architecture remains too technical for a small thumbnail."}

## 12 · Future-Aware Interaction Network For Motion Forecasting

- 核心内容：FINet introduces potential future trajectories during scene encoding, uses an adaptive ordering strategy for spatial Mamba interactions, and refines trajectories temporally with Mamba. Argoverse 1 and 2 comparisons and ablations assess accuracy, latency and memory; results favour future-aware encoding over separate history/future optimisation.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 1 · Fig. 1](https://arxiv.org/pdf/2503.06565)
- 选择理由：The paired intersections and vivid blue/purple trajectories make motion forecasting recognisable at small size. Both comparison panels and original labels are retained, while the network’s many tiny module diagrams are removed.
- 候选比较：
  - {"page": 4, "figure": 3, "reason": "Current method diagram is crowded with interaction tokens and internal modules."}
  - {"page": 8, "figure": 5, "reason": "Multiple detailed qualitative scenarios have thinner lane lines and weaker thumbnail contrast than the introductory illustration."}

## 13 · Seeground: See and ground for zero-shot open-vocabulary 3d visual grounding

- 核心内容：SeeGround renders query-aligned 3D views, adds object lookup and spatial descriptions, and uses a 2D VLM for zero-shot 3D grounding. Perspective adaptation and fusion alignment improve ScanRefer/Nr3D grounding; experiments and ablations identify the value of appearance and viewpoint cues.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 7 · Fig. 5](https://arxiv.org/pdf/2412.04383)
- 选择理由：Two large room renderings with visible correct/incorrect object outlines provide a cleaner grounding example than six thin columns. The original queries remain with their matching images and no method comparison is fabricated.
- 候选比较：
  - {"page": 1, "figure": 1, "reason": "Six comparison columns make each room and cue hard to recognise at thumbnail size."}
  - {"page": 4, "figure": 2, "reason": "Pipeline is diagram-heavy with many explanatory boxes."}
  - {"page": 17, "figure": 10, "reason": "Supplement is an extensive gallery; individual examples are clearer than the full grid."}

## 14 · VaLID: Variable-Length Input Diffusion for Novel View Synthesis

- 核心内容：VaLID jointly represents source appearance and pose, fuses a variable number of views through a fixed-size Multi-view Cross Former, and trains in two stages. GSO/RTMV evaluations study image quality, variable input counts and uncertainty, showing gains from additional views while retaining single-view operation.
- 阅读范围：Abstract, methods and results sections, figure captions, and visual review of candidate pages.
- 选图：[p. 7 · Fig. 7](https://arxiv.org/pdf/2312.08892)
- 选择理由：Six selected outputs from the VaLID four-input-view row show recognisable objects from different angles, rather than shrinking a full 72-image comparison. The 3×2 arrangement is explicitly a selected-output gallery, not a new comparison or claimed animation.
- 候选比较：
  - {"page": 3, "figure": 2, "reason": "Current architecture is a long string of tokens, arrows and modules."}
  - {"page": 7, "figure": 7, "reason": "The complete four-row multi-object comparison is too dense; selected only two object sequences from the proposed method."}
  - {"page": 13, "figure": 11, "reason": "Supplement contains many rows and seven method/input columns; individual objects are too small if the full figure is retained."}

## 15 · SiFH: Siamese Frequency Harmonization Self-Supervised Learning for Motion Forecasting

- 核心内容：SiFH uses self-supervised frequency information harmonization and implicit scene alignment to learn motion-forecasting representations before supervised trajectory decoding. The public publisher abstract and diagrams describe complementary time/frequency features and trajectory/lane scene tokens.
- 阅读范围：Public publisher abstract, accessible introductory/method text excerpts, and all seven publisher figures. Full closed-access paper text was unavailable.
- 选图：[Fig. 6](https://ars.els-cdn.com/content/image/1-s2.0-S0925231225022350-gr6_lrg.jpg)
- 选择理由：用实际转弯场景中的彩色轨迹替代复杂预训练框图；裁出左转、右转两列并保留方法行标，避免缩略图塞入四种场景。
- 可用素材限制：Full journal PDF unavailable; reading limited to publicly accessible text and publisher figures.
- 候选比较：
  - {"figure": 1, "reason": "交通图和频率曲线组合太分散。"}
  - {"figure": 2, "reason": "预训练框图文字密集，是旧缩略图。"}
  - {"figure": 7, "reason": "消融曲线不适合作为视觉入口。"}

## 16 · Tfnet: Exploiting temporal cues for fast and accurate lidar semantic segmentation

- 核心内容：TFNet fuses previous LiDAR features with temporal cross-attention and uses max-voting temporal post-processing to address range-image many-to-one ambiguities; evaluations on SemanticKITTI and nuScenes study accuracy and runtime.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 8 · Fig. 5](https://arxiv.org/pdf/2309.07849)
- 选择理由：从完整框图换成 Fig. 5 的 Ours / GT 两列。彩色点云、树干及原文红色圈注在缩略图中比网络模块更直观；保留两列标签，避免把真值当成输出。
- 候选比较：
  - {"page": 4, "figure": 2, "reason": "完整网络结构标签密集，缩小后不易读。"}
  - {"page": 1, "figure": 1, "reason": "说明投影歧义，但四个小视图和竖排标签不如定性结果集中。"}

## 17 · MS-TCN++: Multi-Stage Temporal Convolutional Network for Action Segmentation

- 核心内容：MS-TCN++ refines temporal action predictions through multiple stages, introduces dual dilated layers for local and long-range context, and evaluates over-segmentation and recognition performance on 50Salads, GTEA and Breakfast.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 10 · Fig. 10](https://arxiv.org/pdf/2006.09220)
- 选择理由：使用 Fig. 10(a) 的完整视频帧与三行动作条带。它直接表达“长视频分段”，兼有真实图像和彩色时间轴，优于旧的纵向卷积结构图。保留 GT 与模型行标。
- 候选比较：
  - {"page": 1, "figure": 1, "reason": "原缩略图的纵向堆叠结构过高，文字太小。"}
  - {"page": 5, "figure": 4, "reason": "虽更准确对应 MS-TCN++，但模块符号密集、缺少任务画面。"}

## 18 · Foresight Social-aware Reinforcement Learning for Robot Navigation

- 核心内容：FSRL rewards foresight of future collisions and socially comfortable clearance, combined with an efficiency constraint; simulated crowded environments test navigation success, time and disturbance with standing and moving people.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 2 · Fig. 2](https://arxiv.org/pdf/2105.13409)
- 选择理由：改用原文 Fig. 2 的机器人、行人和分岔路径，突出“提前避障”的核心。图像主体明确，无密集框图；保留原始路径和时间标记。
- 候选比较：
  - {"page": 3, "figure": 3, "reason": "三幅受力/半径定义图在小尺寸下显得抽象。"}
  - {"page": 7, "figure": 8, "reason": "四个仿真轨迹坐标图需要阅读小图例，适合正文而不是主页。"}

## 19 · Dual Pyramid Generative Adversarial Networks for Semantic Image Synthesis

- 核心内容：DP-GAN uses a dual-pyramid generator with bidirectional scale conditioning and multi-scale discriminator supervision to improve semantic image synthesis across object sizes, evaluated on Cityscapes and ADE20K.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 2 · Fig. 1](https://arxiv.org/pdf/2210.04085)
- 选择理由：从 Fig. 1 中选择输入语义图和 DP-GAN 输出两列、前两个场景，连同原始列标拼排。能在小图中直接看懂从布局生成街景；不包含基线输出，不暗示所选图就是全面性能比较。
- 候选比较：
  - {"page": 3, "figure": 2, "reason": "原完整双金字塔框图主要由小模块和符号构成。"}
  - {"page": 10, "figure": 6, "reason": "更大的定性比较含五列方法，缩小时每张图太小。"}

## 20 · Moving object segmentation in 3D LiDAR data: A learning-based approach exploiting sequential data

- 核心内容：The method combines sequential LiDAR range projections and residual images with segmentation networks to separate truly moving from static objects at sensor rate, and demonstrates benefits for odometry and map cleaning.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 8 · Fig. 7](https://arxiv.org/pdf/2105.08971)
- 选择理由：选择 Fig. 7(b) 的完整清洁地图面板。蓝色道路与建筑构成清楚的大主体，展示动态物体剔除的实际地图结果；没有把它标为语义分割图。
- 候选比较：
  - {"page": 3, "figure": 2, "reason": "原方法框图混有多条全景图和网络符号，细节过密。"}
  - {"page": 7, "figure": 6, "reason": "红黑 MOS 点云结果虽准确，但四图拼接和传感器中央空洞占比很大。"}

## 21 · Multi-scale interaction for real-time lidar data segmentation on an embedded platform

- 核心内容：MINet balances compute across multiple projection scales and shares dense interactions to avoid redundant work, achieving efficient LiDAR segmentation and demonstrating more than 24 scans per second on embedded hardware.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 5 · Fig. 4](https://arxiv.org/pdf/2008.09162)
- 选择理由：选 Fig. 4(d) 的模型结果面板，直接展示黑底彩色城市点云和车辆。保留原文圈注，不移除失败处，因此没有粉饰结果。
- 候选比较：
  - {"page": 2, "figure": 1, "reason": "旧图是多尺度网络结构，细小箭头和模块难以辨认。"}
  - {"page": 5, "figure": 5, "reason": "准确率–运行时间散点图需要读坐标，不如场景结果直观。"}

## 22 · Rethinking 3-D LiDAR point cloud segmentation

- 核心内容：The paper reformulates point-based 3D operations in LiDAR projection space, demonstrates faster reformulations of several methods, and introduces UnPNet to combine 3D structure with multi-scale 2D processing across four datasets.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 10 · Fig. 14](https://arxiv.org/pdf/2008.03928)
- 选择理由：选 Fig. 14 中 nuScenes 预测的单个完整场景。大幅彩色点云比 Fig. 9 整体网络图更适合作为主页封面；只展示模型结果，不拼接真值冒充输出。
- 候选比较：
  - {"page": 6, "figure": 9, "reason": "原 UnPNet 全局框图高度压缩后没有可读焦点。"}
  - {"page": 2, "figure": 1, "reason": "三维投影关系解释图有两个视角和一条全景，较分散。"}

## 23 · Spatial-temporal consistency network for low-latency trajectory forecasting

- 核心内容：STC-Net combines graph convolutions for interaction, dilated temporal convolutions for motion history, one-pass feature-wise prediction and joint refinement of past/future trajectories; evaluation reports compact size, low latency and robustness to sampling/scene changes.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 8 · Fig. 5](https://pages.iai.uni-bonn.de/gall_juergen/download/jgall_stcn_iccv21.pdf)
- 选择理由：选 Fig. 5 右列 STC-Net 的一个完整场景。真实航拍背景与红/蓝/黄轨迹比整张网络图更容易传达轨迹预测任务；颜色沿用原文定义。
- 候选比较：
  - {"page": 2, "figure": 2, "reason": "原空间–时间框架图横向过长，缩小后只剩块状符号。"}
  - {"page": 1, "figure": 1, "reason": "首图的并排对照也是好选项，但单个结果场景的主体更大。"}

## 24 · MiniSeg: An Extremely Minimum Network for Efficient COVID-19 Segmentation

- 核心内容：MiniSeg is an 83K-parameter model using attentive hierarchical spatial-pyramid learning for efficient infection-area segmentation; the paper builds a multi-dataset CT benchmark and examines infected-area and lesion-count robustness.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 7 · Fig. 4](https://arxiv.org/pdf/2004.09750)
- 选择理由：从 Fig. 4 中选首个病例的 CT 输入和 MiniSeg 输出，并保留原列名。两张大图即可看懂任务，避免将十列结果压成细小条带；保留全部原始红绿蓝误差编码。
- 候选比较：
  - {"page": 3, "figure": 1, "reason": "旧 AHSP 模块图只表达网络算子，缺少医学图像。"}
  - {"page": 7, "figure": 4, "reason": "完整十列比较适合论文，主页每列太窄，故选输入与本文输出。"}

## 25 · Pose Refinement Graph Convolutional Network for Skeleton-based Action Recognition

- 核心内容：Pose Refinement GCN explicitly corrects noisy skeletons and gradually fuses parallel spatial and motion streams while reducing temporal resolution early, obtaining comparable action-recognition accuracy with substantially fewer parameters and operations.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 6 · Fig. 8](https://arxiv.org/pdf/2010.07367)
- 选择理由：选择 Fig. 8 上排前两个完整 Original/Refined 骨架对，清楚展示姿态修正。蓝色人体骨架留白干净，任务一眼可辨，优于长条网络架构。
- 候选比较：
  - {"page": 2, "figure": 1, "reason": "旧网络总览过长，动作识别任务主体很小。"}
  - {"page": 4, "figure": 5, "reason": "渐进融合算子示意没有可直观看懂的人体。"}

## 26 · Refinedbox: Refining for fewer and high-quality object proposals

- 核心内容：RefinedBox refines candidate object boxes using lightweight re-ranking and box regression that can share convolutional features with downstream detection; evaluations on VOC and COCO examine recall with very few proposals.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 1 · Fig. 1](https://mftp.mmcheng.net/Papers/20NeucomRefinedBoxes.pdf)
- 选择理由：选首图的马匹与框精修前后示例，原始 Refine 箭头、排名和回归说明保留。主体鲜明，比网络分支结构图更适合缩略图。
- 候选比较：
  - {"page": 4, "figure": 2, "reason": "原网络结构图含多分支和小字，图像本身很小。"}
  - {"page": 8, "figure": 5, "reason": "六行五列检测比较内容过满，且不宜去掉方法列标后展示。"}

## 27 · Joint salient object detection and existence prediction

- 核心内容：The structural-SVM method jointly predicts whether a salient object exists and assigns regional saliency, coupling image-level existence and region-level labels to reduce false positives on background-only images.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 9 · Fig. 5](https://mftp.mmcheng.net/Papers/JointSalExist.pdf)
- 选择理由：从 Fig. 5 选有花朵与纯背景两个完整例子，拼排输入与 SSVM 两列，并保留原列名。既有鲜明黄色花朵，也表达“无显著物体时不误报”的区别，不只挑漂亮正例掩盖论文主题。
- 候选比较：
  - {"page": 1, "figure": 1, "reason": "旧图仅有基线方法在背景图上的失败，甚至没有本文结果。"}
  - {"page": 8, "figure": 4, "reason": "失败案例有价值但不足以作为整篇工作的唯一封面。"}

## 28 · Del: Deep embedding learning for efficient image segmentation

- 核心内容：DEL learns deep superpixel embeddings that define adjacent-region similarity, then efficiently merges SLIC superpixels into perceptual segments; experiments study segmentation quality, runtime and downstream object proposals.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 6 · Fig. 6](https://www.ijcai.org/proceedings/2018/0120.pdf)
- 选择理由：选 Fig. 6 的前两行输入与 DEL 分割两列。人物与彩色区域有清楚的对应关系，比旧的管线图更生动；没有将基线结果拼入本文列。
- 候选比较：
  - {"page": 3, "figure": 1, "reason": "旧的全管线图横向过宽，特征空间细节缩小后不可读。"}
  - {"page": 6, "figure": 6, "reason": "完整五列对照每个场景过小，因此保留输入与 DEL 两列。"}

## 29 · Direct line guidance odometry

- 核心内容：DLGO extends direct monocular odometry by using line structure to guide stronger point selection and jointly exploit intensity and geometry without treating every line as an expensive separate feature; tests study drift and reconstructed maps.
- 阅读范围：Abstract, introduction/method, experimental discussion, conclusion, figure captions, and visual comparison of candidate pages.
- 选图：[p. 1 · Fig. 1](https://www.robots.ox.ac.uk/~lav/Papers/li_etal_icra2018/li_etal_icra2018.pdf)
- 选择理由：保留首图这个本来就合适的任务画面，重新精确裁去周边页边与空白。走廊透视和绿色线特征有鲜明视觉主体，且直接对应 line-guided odometry。
- 候选比较：
  - {"page": 2, "figure": 2, "reason": "系统线程框图不如真实关键帧直观。"}
  - {"page": 5, "figure": 8, "reason": "地图重建结果较暗，结构不如走廊关键帧清晰。"}

## 30 · Structured skip list: A compact data structure for 3D reconstruction

- 核心内容：SSL stores only nonempty voxels while using ordered structure to reduce indexing memory; its HAL avoids redundant voxel allocation. TUM/ScanNet experiments report better storage efficiency with modest runtime overhead.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 1 · Fig. 1](https://www.shaopinglu.net/publications_files/IROS2018.pdf)
- 选择理由：A single furnished-room reconstruction gives an immediate readable demonstration of the 3D output. The other diagrams explain data structures, while page 6 spreads several smaller meshes across a wide strip.
- 候选比较：
  - {"page": 6, "figure": 7, "reason": "Several reconstructed TUM scenes; too wide when retained as a complete strip."}
  - {"page": 6, "figure": 8, "reason": "ScanNet scene meshes; lower contrast and more fragmented than the furnished-room teaser."}

## 31 · GeoReader: Learning Latent Geometry for Spatial Reasoning in Vision-Language Models

- 核心内容：GeoReader trains lightweight Geometric Readers using geometry descriptions decoded by a frozen VLM, freezes the interface, and then trains question-conditioned spatial QA. Geometry interventions and benchmark results test whether geometric tokens are actually used.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 2 · Fig. 1](https://arxiv.org/pdf/2610.18694)
- 选择理由：The room example is explicitly illustrative in the Figure 1 caption; it is the visual premise of Figure 1: a viewpoint, objects, and an egocentric spatial relation are visible without requiring tiny architecture labels. Selected only the self-contained annotated room panel, not unrelated schematic comparisons.
- 候选比较：
  - {"page": 9, "figure": 4, "reason": "Successful RGB/multi-view/point-cloud examples; informative but contains many small panels."}
  - {"page": 32, "figure": 10, "reason": "Three correct spatial QA cases; excellent for a project page, too tall and text-heavy for a homepage row."}
  - {"page": 4, "figure": 2, "reason": "Two-stage architecture is technically representative but dense at thumbnail scale."}

## 32 · Aligning Thoughts with Answers: Probability Rewards to Tame Thinking Drift

- 核心内容：Rita addresses thinking drift in visual intention grounding: a correct box can coexist with an incorrect object explanation. Reference-answer probability rewards and difficulty/variance-aware RL filtering improve localization and thought-answer consistency; extra reward passes add training cost.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 1 · Fig. 1](https://arxiv.org/pdf/2609.39183)
- 选择理由：Figure 1 makes the failure and correction concrete in one kitchen scene, with existing red/green reasoning cards. This is clearer than the abstract token/reward training diagram; no comparison labels are removed.
- 候选比较：
  - {"page": 4, "figure": 2, "reason": "Full reward/policy pipeline; many nested token boxes and equations."}
  - {"page": 9, "figure": 4, "reason": "Four qualitative examples; each paired response becomes extremely small when the full figure is shrunk."}

## 33 · Ego2World: Compiling Egocentric Cooking Videos into Executable Worlds for Belief-State Planning

- 核心内容：Ego2World compiles annotated egocentric cooking activities into symbolic executable environments with separate world and belief states and explicit task checks. The evaluation distinguishes completion, condition attainment, action validity and resource use; memory improves validity/query use without a detected completion gain.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 2 · Fig. 1](https://arxiv.org/pdf/2610.02715)
- 选择理由：The original overview remains the most effective visual: real cooking frames lead into executable rules and state. Its native image is tightly cropped to remove surrounding body text and caption. The appendix compiler is denser, and result plots do not communicate the video-to-world task as directly.
- 候选比较：
  - {"page": 14, "figure": 4, "reason": "Detailed annotation-to-environment pipeline; many smaller operation/rule cells."}
  - {"page": 8, "figure": 2, "reason": "Attainment/endpoint plots are quantitative evidence, not as immediate a visual explanation of the task."}

## 34 · PRISM: Planning and Reasoning with Intent in Simulated embodied environments

- 核心内容：PRISM diagnoses embodied planning across basic, implicit-intent and long-horizon tasks in five photorealistic apartments using executable actions and optional component probes. Results expose intent-resolution and long-horizon coordination bottlenecks, with oracle-perception limitations.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 4 · Fig. 1](https://arxiv.org/pdf/2605.11534)
- 选择理由：The apartment-level floor-plan panel cleanly shows the benchmark scale and varied environments. At a homepage size, it communicates more than the full overview text cards or the small, dark execution-trace frames.
- 候选比较：
  - {"page": 4, "figure": 1, "reason": "Full overview contains the same floor plans but also dense task definitions; selected only its complete environment panel."}
  - {"page": 12, "figure": 3, "reason": "Execution traces carry useful evidence, but many tiny frames and memory descriptions are illegible at row scale."}

## 35 · Grounding by Remembering: Cross-Scene and In-Scene Memory for 3D Functional Affordances

- 核心内容：AffordMem combines cross-scene visual examples for fine-grained operable parts with an in-scene 3D scene graph for ordinal/spatial reference resolution. It is training-free and improves SceneFun3D grounding; unseen memory categories and dynamic scenes remain limitations.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 2 · Fig. 1](https://arxiv.org/pdf/2605.11616)
- 选择理由：The complete left task panel shows cross-scene memory directing grounding from a broad door region to its operable handle. Choosing this one visual highlight gives the door/handle images enough space to remain visible at homepage size; original panel labels and failure/solution cues remain intact.
- 候选比较：
  - {"page": 4, "figure": 2, "reason": "Full architecture; too much token/memory/LLM text for a small teaser."}
  - {"page": 9, "figure": 3, "reason": "Qualitative scene masks across four examples; target masks are tiny in the full matrix and rows are not internally labeled."}

## 36 · IntentionNav: A Benchmark for Intent-Driven Object Navigation from Implicit Human Instruction

- 核心内容：IntentionNav studies navigation from implicit requests without a target category, with matched language styles/modes and fixed physical targets. Across evaluated VLMs, inferring or reaching a neighborhood is much easier than grounded termination; it is a simulation diagnostic benchmark.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 14 · Fig. 5](https://arxiv.org/pdf/2605.23187)
- 选择理由：The expanded conceptual illustration connects an indirect request to plausible object hypotheses, a scene map and grounded visual evidence. It uses larger environment imagery than the narrow pipeline and remains faithful to its caption: an explanatory task illustration, not a new experimental result.
- 候选比较：
  - {"page": 4, "figure": 1, "reason": "Task flow with a candidate list, depth, BEV and target image; too many small subpanels."}
  - {"page": 5, "figure": 2, "reason": "Rendered apartment and target crops; attractive but primarily describes candidate collection rather than intent resolution."}
  - {"page": 14, "figure": 4, "reason": "Reference-agent pipeline is mostly text boxes."}

## 37 · Ask When It Pays: Cost-Aware Open-Ended Interaction for Instance Goal Navigation

- 核心内容：TANDEM treats instance-goal interaction as cost-sensitive uncertainty reduction, with question-type penalties and Weighted Success Rate. It selectively asks when expected information gain justifies cost; paired trajectories show a route hint resolving layout ambiguity.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 9 · Fig. 4](https://arxiv.org/pdf/2606.03175)
- 选择理由：The matched floor-plan trajectories communicate a question’s benefit in one glance: uncertain search versus a corrected route. The original No QA / Spatial QA labels and the question/answer cue remain visible, preserving comparison context.
- 候选比较：
  - {"page": 6, "figure": 2, "reason": "TANDEM utility/agent architecture; many nested text panels."}
  - {"page": 8, "figure": 3, "reason": "Temporal/spatial interaction plots explain aggregate patterns but are less concrete than the paired episode."}

## 38 · AI for Auto-Research: Roadmap & User Guide

- 核心内容：This roadmap surveys AI assistance across creation, writing, validation and dissemination. Its synthesis separates reliable grounded/tool-mediated assistance from brittle scientific autonomy and emphasizes human verification of novelty, evidence and research correctness.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 1 · Fig. 1](https://arxiv.org/pdf/2605.18661)
- 选择理由：The four illustrated stages are already the strongest small-format figure: distinct characters, colors and a simple lifecycle. Retained this figure after comparison, using its actual illustration bounds without extra whitespace or caption.
- 候选比较：
  - {"page": 5, "figure": null, "reason": "Lifecycle stage cards contain much more text and only small icons."}
  - {"page": 1, "figure": 1, "reason": "Chosen complete four-phase illustration; each stage is an essential part of the paper taxonomy."}

## 39 · Think, Then Look: Active Spatial Reasoning for House-Scale 3D Scene Understanding

- 核心内容：SpatialReasoner answers house-scale spatial questions by localizing relevant map regions and using zoom/view-rendering tools, trained with self-correcting SFT and adaptive exploration RL. Results compare accuracy and observation cost against passive/tool-use baselines.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 2 · Fig. 1](https://arxiv.org/pdf/2512.03284)
- 选择理由：The introductory task example is unusually good already: a large house cutaway, selected views, and a visible question-guided inspection path. Kept the complete task narrative and corrected cropping to avoid surrounding paper text; the alternative tool diagram is less visually distinctive.
- 候选比较：
  - {"page": 12, "figure": 5, "reason": "Global/regional map-to-render examples; cleaner but less expressive of the full question-to-evidence loop."}
  - {"page": 14, "figure": 7, "reason": "Benchmark construction example; a long reasoning transcript occupies half the figure."}

## 40 · Improving the Generalization of Segmentation Foundation Models via Weakly-Supervised and Unsupervised Adaptation

- 核心内容：The journal extension combines source-free teacher/student/anchor self-training with patch-level contrastive regularization, teacher-feature masked modeling and LoRA. It studies weakly supervised and automatic prompt generation across natural, corrupted, medical, camouflaged and robotic image domains with SAM/SAM2.
- 阅读范围：Full public journal HTML: abstract, methodology, experiments, qualitative discussion and ablations; current author-hosted WeSAM++ framework figure.
- 选图：[Fig. 2](https://www.preprints.org/manuscript/202510.1640)
- 选择理由：裁出扩展版 WeSAM++ 方法图右上角两个完整提示示例，直接展示弱标签与无标签设置，去掉密集 teacher/student 框架。两幅图保留 Weak Labels / No Labels 原始标记；它们是方法示例，不是性能对比结果。
- 可用素材限制：Journal PDF and standalone journal result-image download returned 403. The selected image is a verified crop of the current WeSAM++ author-hosted framework figure.
- 候选比较：
  - {"source": "https://zhang-haojie.github.io/images/wesampp.webp", "reason": "新扩展版的完整架构图在小尺寸下过密。"}
  - {"figure": 5, "source": "https://www.preprints.org/manuscript/202510.1640", "reason": "HTML 可读且解释相同定性示例，但该站原图片下载返回 403；采用作者公开仓库的同类示例，并明确标注版本。"}

## 41 · DiffPCN: Latent Diffusion Model Based on Multi-view Depth Images for Point Cloud Completion

- 核心内容：DiffPCN projects incomplete point clouds to multi-view depth, uses a depth latent diffusion model for coarse completion, then denoises and upsamples with association-aware features. PCN/MVP/KITTI evaluations inspect geometry and completeness, including sparse real scans.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 6 · Fig. 4](https://arxiv.org/pdf/2509.23723)
- 选择理由：Selected two qualitative object examples for Input, Our and GT. These original figure columns show incomplete versus completed shape directly; two rows fit a teaser far better than the full multi-method matrix. Native PDF images are arranged as a faithful two-row, three-column excerpt; original column labels are retained from the same figure, with no new labels or changed colors.
- 候选比较：
  - {"page": 2, "figure": 2, "reason": "Full DepthLDM/denoising/upsampling pipeline; dense method boxes."}
  - {"page": 6, "figure": 4, "reason": "Full seven-column, three-row qualitative matrix; too many tiny shapes. Selected two rows and three labeled columns."}
  - {"page": 6, "figure": 5, "reason": "KITTI vehicle completions; realistic but flatter silhouettes and smaller visible differences."}

## 42 · Multi-View Industrial Anomaly Detection with Epipolar Constrained Cross-View Fusion

- 核心内容：The method constrains cross-view attention to epipolar-compatible patches and uses multi-center pretraining with synthesized negatives. Real-IAD tests report improved anomaly detection/localization and compare viewpoint heatmaps against prior methods.
- 阅读范围：Read abstract, method/benchmark definition, main results/conclusions and candidate captions; visually compared main and supplementary figures. This is a figure-selection review, not replication of experiments.
- 选图：[p. 6 · Fig. 4](https://arxiv.org/pdf/2503.11088)
- 选择理由：The USB example shows recognizable object views and colored anomaly maps. Selected the first three views from the complete USB half, preserving its Image/UniAD/PatchCore/Ours column labels and ground-truth masks so the comparison remains interpretable.
- 候选比较：
  - {"page": 1, "figure": 1, "reason": "Geometry-guided attention sketch explains the method but lacks clear anomaly results."}
  - {"page": 3, "figure": 2, "reason": "Pretraining architecture has many feature-bank/module boxes."}
  - {"page": 6, "figure": 4, "reason": "Full audiojack plus USB matrix is too wide; selected a coherent USB subset with labels."}

