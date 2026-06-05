---
title: "AI 视频生成平台"
description: "整理常用 AI 视频生成平台、开源模型与聚合工具入口"
pubDate: 2026-06-04
tags: ["AI", "视频生成", "工具平台"]
category: "AI 工具"
draft: false
cover: "/images/blog/ai-video-platforms.png"
visibility: "public"
---

# AI视频生成平台

## 官方平台

###  国产平台
#### **【闭源模型平台】**

*   **可灵AI (Kling AI)** - 快手旗下，目前全球榜单名列前茅，支持长视频生成、智能运镜与音画同步。
    *   **入口**：https://klingai.com/
*   **即梦AI (Dreamina)** - 字节跳动（剪映）推出的一站式AI创作平台，与抖音短视频生态深度绑定。
    *   **入口**：https://jimeng.jianying.com/
*   **海螺AI (Hailuo AI)** - MiniMax（大模型四小龙之一）推出，搭载Hailuo引擎，以细腻情感、微表情和物理规律见长`（有自己的模型但是也有聚合其他模型）`。
    *   **入口**：https://hailuoai.com/
*   **Happy Horse** - 阿里ATH创新事业部出品，主打原生音视频同生成、极致的物理规律和商业级出片效率，是目前闭源/半闭源商业化平台上的“榜一大哥”
    *   **入口：**https://www.happyhorse.com/ 

*   **Vidu** - 生数科技研发，国内首个纯自研AI视频生成模型，主打主体一致性和动漫风格。
    *   **入口**：https://www.vidu.cn/
*   **PixVerse** - 爱诗科技推出，支持多模态生成，在出海市场和特效模板中表现优异。
    *   **入口**：https://pixverse.ai/
*   **通义万相 / 清影** - 阿里与智谱AI旗下的官方闭源创作平台，集成于各自的通义千问和智谱清言大模型生态中。
    *   **入口**：https://tongyi.aliyun.com/wanxiang (万相) / https://chatglm.cn/ (清影)

**【开源模型平台】**
*   **Wan 2.1 (万相)** - 阿里通义开源的视频生成模型，被广泛认为是目前综合效果最好、调用量极高的开源模型之一。
    *   **入口 (HuggingFace)**：https://huggingface.co/Wan-AI
*   **CogVideoX** - 智谱AI开源的3D VAE架构模型，显存占用极低，普通游戏本即可流畅运行。
    *   **入口 (HuggingFace)**：https://huggingface.co/THUDM/CogVideoX-5B
*   **HunyuanVideo (腾讯混元)** - 腾讯开源的超高清视频生成大模型，在开源社区影响力巨大。
    *   **入口 (HuggingFace)**：https://huggingface.co/tencent/
*   **LongCat-Video** - 美团LongCat团队于2026年4月刚开源的重磅136亿参数模型，支持720p/30fps高清画质。
    *   **入口 (HuggingFace)**：https://huggingface.co/meituan-longcat
*   **SkyReels** - 昆仑万维等开源的面向AI短剧创作的模型，支持丰富的微表情和动作组合。
    *   **入口 (GitHub)**：https://github.com/SkyworkAI/SkyReels
*   **Open-Sora** - 北大及开源社区维护的Sora开源复现计划，持续跟进DiT架构。
    *   **入口 (GitHub)**：https://github.com/hpcaitech/Open-Sora

### 国外平台
#### **【闭源模型平台】**
*   **Google Flow (Veo 3 / Veo 3.1)** - 谷歌DeepMind推出的最新视频生成平台，物理规律、音画同步及真实感极佳，2025年发布后即刻上线
    *   **入口**：https://labs.google/fx/tools/flow
*   **Runway (Gen-3 / Gen-4)** - 行业老牌标杆，提供强大的导演模式和动作笔刷等专业可控功能。
    *   **入口**：https://runwayml.com/
*   **Pika Labs (Pika Art)** - 斯坦福团队创立，以创意特效（如捏瘪、融化、爆炸等）和动画风格见长。
    *   **入口**：https://pika.art/
*   **Luma Dream Machine** - Luma Labs推出，以极快的生成速度和逼真的物理引擎著称。
    *   **入口**：https://lumalabs.ai/dream-machine
*   **Meta Vibes** - Meta推出的AI图像与视频生成工具，深度集成于Meta社交生态。
    *   **入口**：https://ai.meta.com/vibes/
*   *(注：OpenAI Sora 已于2026年3月正式关停，不再作为独立平台提供服务)*

**【开源模型平台】**
*   **Mochi 1** - Genmo开源的视频模型，以模拟流体动力学和毛发动态等高保真动作跨越“恐怖谷”效应。
    *   **入口 (HuggingFace)**：https://huggingface.co/genmo/mochi-1-preview
*   **LTX-Video (LTX-2)** - Lightricks于2026年1月开源，支持4K画质与音画同步。
    *   **入口 (HuggingFace)**：https://huggingface.co/Lightricks/LTX-Video
*   **Stable Video Diffusion (SVD)** - Stability AI开源的经典图生视频模型，生态插件丰富。
    *   **入口 (HuggingFace)**：https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt

---

## 第三方聚合平台


### 国内聚合平台
*   **星流 (Xingliu)** - **（新一代 Agent 平台）** 奇点星宇推出的国内版 AI 设计智能体。不同于传统的参数调试工具，它主打“全链路自动化工作流”，深度适配国内商业场景与中文语境，聚合了可灵、即梦等国产顶尖模型。用户只需输入一句话需求，即可自动完成从分镜策划、生图、生视频到剪辑配乐的全过程，直接交付商业级成片。
    *   **入口**：https://www.xingliu.art/
*   **LiblibAI (哩布哩布) / LibTV** - 国内知名的AI创作社区，2026年3月推出LibTV，首创「人工创作+ AI Agent」双入口，打通从剧本到成片的全链路工作流。
    *   **入口**：https://www.liblib.art/
*   **吐司 (Tusi.art)** - 国内主流的开源模型在线运行平台，支持用户一键部署和运行各类开源视频生成模型（如Wan2.1、CogVideo等），无需本地配置显卡。
    *   **入口**：https://tusi.art/
*   **海艺AI (SeaArt)** - 不仅拥有自研能力，还聚合了大量国内外主流视频模型，提供丰富的模板和中文提示词工作流。
    *   **入口**：https://www.seaart.ai/

### 国外聚合平台
*   **Lovart** - **（新一代 Agent 平台）** 奇点星宇推出的全球版 AI 设计智能体，被公认为全球首款 AI Design Agent。它面向全球市场，聚合了 Veo 3、Midjourney 等海外顶级模型，专为出海品牌、国际设计师打造。其核心优势在于将策划、设计、视频生成无缝融合在同一个 Agent 工作流中，彻底解决跨平台创作的碎片化痛点。
    *   **入口**：https://www.lovart.ai/
*   **Replicate** - 全球最大的AI模型API云运行平台，支持一键调用Wan 2.1、Veo 3、PixVerse等最新模型，开发者与极客首选。
    *   **入口**：https://replicate.com/
*   **Hugging Face Spaces** - 全球最大的AI开源社区，提供各类最新论文和开源视频模型的在线Demo体验空间。
    *   **入口**：https://huggingface.co/spaces
*   **Civitai** - 原本以Stable Diffusion模型分享为主，现已全面支持AI视频生成工作流及云端生成服务，社区氛围活跃。
    *   **入口**：https://civitai.com/
*   **Viidx AI** - 新兴的多模型AI视频生成聚合平台，将最新模型放入统一界面，免去用户在多平台间切换和重复订阅的烦恼。
    *   **入口**：https://viidx.com/
*   **Soradeo** - 针对多模型整合的统一创作平台，提供Prompt辅助、去水印和多模型对比功能。
    *   **入口**：https://www.soradeo.com/
