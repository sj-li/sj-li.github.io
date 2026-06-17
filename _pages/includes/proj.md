<span id="projects"></span>

# 🚀 Projects

## Ego2World: Compiling Egocentric Cooking Videos into Executable Worlds for Belief-State Planning

Qinchuan Cheng<sup>1</sup>, <a href="https://scholar.google.com/citations?user=FzhpGe8AAAAJ&hl=zh-CN">Zhantao Gong</a><sup>2</sup>, <a href="https://pengzhansun.github.io/">Pengzhan Sun</a><sup>3</sup>, <a href="https://www.comp.nus.edu.sg/~ayao/">Angela Yao</a><sup>3</sup>, <a href="https://dawdleryang.github.io/">Xulei Yang</a><sup>4</sup>, <a href="https://sj-li.github.io/">Shijie Li</a><sup>4</sup>

<sup>1</sup>Xi'an Jiaotong University, <sup>2</sup>Nankai University, <sup>3</sup>NUS, <sup>4</sup>A*STAR

[[Paper]](https://arxiv.org/pdf/2605.13335) [[arXiv]](https://arxiv.org/abs/2605.13335) [[Code]](#) [[Data]](#)

Embodied agents in household environments must plan under partial observation: they need to remember objects, track state changes, and recover when actions fail. Existing benchmarks only partially test this ability. Egocentric video datasets capture realistic human activities but remain passive, while interactive simulators support execution but rely on synthetic scenes and hand-crafted dynamics, introducing a sim-to-real gap and often assuming fully observable state. We introduce Ego2World, an executable benchmark that turns egocentric cooking videos into executable symbolic worlds governed by graph-transition rules. Built on HD-EPIC, Ego2World derives reusable transition rules from video annotations and executes them in a hidden symbolic world graph. During evaluation, the simulator maintains the hidden world graph, while the agent plans over its own partial belief graph using only local observations and execution feedback. This separation forces agents to update memory and replan without observing the true world state. Experiments show that action-overlap scores overestimate physical-state success, and that persistent belief memory improves task completion while reducing repeated visual exploration, suggesting that belief maintenance should be a first-class target of embodied-agent evaluation.

## PRISM: Planning and Reasoning with Intent in Simulated embodied environments

Yunn Kang Lim<sup>1</sup>, <a href="https://pengzhansun.github.io/">Pengzhan Sun</a><sup>2</sup>, <a href="https://github.com/ByZ0e">Ziyi Bai</a><sup>3</sup>, <a href="https://alex-xun-xu.github.io/">Xun Xu</a><sup>1</sup>, <a href="https://www.comp.nus.edu.sg/~ayao/">Angela Yao</a><sup>2</sup>, <a href="https://dawdleryang.github.io/">Xulei Yang</a><sup>1</sup>, <a href="https://sj-li.github.io/">Shijie Li</a><sup>1</sup>

<sup>1</sup>A*STAR, <sup>2</sup>NUS, <sup>3</sup>BAAI

[[Paper]](https://arxiv.org/pdf/2605.11534) [[arXiv]](https://arxiv.org/abs/2605.11534) [[Code]](#) [[Data]](#)

When an LLM-based embodied agent fails at a household task, the culprit could be misidentified objects, forgotten sub-goals, or poor action sequencing, yet existing benchmarks report only a single success rate, making it impossible to tell which cognitive module is responsible. We present PRISM, a diagnostic benchmark that reframes this problem: rather than asking only did the agent succeed?, PRISM asks which capability is most likely responsible for failure? Built on five photorealistic multi-room apartments (4--8 rooms each), PRISM structures 300 human-verified tasks into three capability tiers, Basic Ability, Reasoning Ability, and Long-horizon Ability, that isolate perception-to-action grounding, implicit intent resolution, and sustained multi-step coordination respectively. PRISM exposes an agent-agnostic executable action API that allows arbitrary agents, LLM agents, VLM agents, symbolic planners, RL policies, and hybrid systems, to be evaluated end-to-end under the same benchmark protocol. To support deeper diagnosis, optional probes for perception, memory, and planning can be adopted, replaced, or bypassed entirely, enabling controlled component-level analysis when desired. Experiments on seven contemporary LLMs establish a clear hierarchy: explicit spatial grounding is not the dominant failure source under oracle perception, implicit intent resolution is a significant bottleneck for all model families, and long-horizon coordination exposes a stark capability cliff, lightweight models collapse to as low as 20.0% success while simultaneously consuming more tokens than their frontier counterparts, a signature of compensatory over-reasoning rather than genuine planning capability.

## Grounding by Remembering: Cross-Scene and In-Scene Memory for 3D Functional Affordances

Qirui Wang<sup>1</sup>, Jingyi He<sup>1</sup>, <a href="https://pynsigrid.github.io/">Yining Pan</a><sup>2</sup>, <a href="https://dawdleryang.github.io/">Xulei Yang</a><sup>2</sup>, <a href="https://sj-li.github.io/">Shijie Li</a><sup>2</sup>

<sup>1</sup>TUM, <sup>2</sup>A*STAR

[[Paper]](https://arxiv.org/pdf/2605.11616) [[arXiv]](https://arxiv.org/abs/2605.11616) [[Code]](#) [[Data]](#)

Functional affordance grounding requires more than recognizing an object: an agent must localize the specific region that supports an interaction, such as the handle to pull or the button to press. This is difficult for training-free vision-language pipelines because actionable regions are often small, visually ambiguous, and repeated across multiple same-category instances in a scene. We propose AffordMem, a framework that grounds 3D functional affordances by remembering geometry at two levels. The first is cross-scene affordance memory: the agent maintains a category-level memory bank of RGB images with affordance regions rendered as overlays, and recalls the most informative examples at query time to guide a frozen VLM toward small operable subregions that text-only prompting consistently misses. The second is in-scene spatial memory: as the agent processes the scene, it organizes candidate instances and their 3D spatial relations into a structured scene graph, enabling the language model to resolve references over distant or currently unobserved candidates such as "the second handle from the top." AffordMem requires no model fine-tuning and no target-scene annotation, using a reusable memory bank built from source scenes. On SceneFun3D, our method improves over the prior training-free state of the art by +3.23 AP50 on Split 0 and +3.7 AP50 on Split 1. Ablation studies support complementary benefits: cross-scene memory improves fine-grained localization, while in-scene memory provides the larger gain on spatially qualified queries.

## IntentionNav: A Benchmark for Intent-Driven Object Navigation from Implicit Human Instruction

Lin Qian<sup>1</sup>, <a href="https://sj-li.github.io/">Shijie Li</a><sup>2</sup>, Sihao Lin<sup>3</sup>, Xuan Zhang<sup>4</sup>, Bangya Liu<sup>4</sup>, Yanran Li<sup>5</sup>, Hujun Yin<sup>1</sup>

<sup>1</sup>University of Manchester, <sup>2</sup>A*STAR, <sup>3</sup>University of Adelaide, <sup>4</sup>2077, <sup>5</sup>University of Bedfordshire

[[Paper]](https://arxiv.org/pdf/2605.23187) [[arXiv]](https://arxiv.org/abs/2605.23187) [[Code]](#) [[Data]](#)

Existing object navigation benchmarks usually provide an embodied agent with an explicit target object category, such as a microwave or a chair. In contrast, human-facing embodied AI systems are often given indirect instructions, for example, "I need something to warm this food" or "the room feels stuffy." In these cases, the agent must infer which object satisfies the underlying intent, locate a scene-grounded instance of that object, and determine whether the navigation goal has been achieved. We introduce IntentionNav, a diagnostic benchmark for intent-driven object navigation from implicit human instructions. IntentionNav contains 500 intents across 176 Isaac Sim scenes and 64 target object categories, with each intent rewritten into four controlled instruction styles and annotated with one of four intent modes. This structure enables detailed analysis of target inference, language robustness, neighborhood reachability, and terminal success, rather than relying only on aggregate navigation metrics.
