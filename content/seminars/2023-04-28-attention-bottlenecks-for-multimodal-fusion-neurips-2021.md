---
date: 2023-04-28
title: Attention Bottlenecks for Multimodal Fusion (NeurIPS 2021)
category: Paper Review
presenter: Hyejin Cho
url: https://www.notion.so/f49d29b3e51c4dc59ecb14ec7089c18f
keywords: multi-modal learning, Transformer
---

# Selected Paper


## Title: 


Nagrani, A., Yang, S., Arnab, A., Jansen, A., Schmid, C., & Sun, C. (2021). Attention Bottlenecks for Multimodal Fusion. _Neural Information Processing Systems_
.


## Abstract: 


Humans perceive the world by concurrently processing and fusing high-dimensional inputs from multiple modalities such as vision and audio. Machine perception models, in stark contrast, are typically modality-specific and optimised for unimodal benchmarks, and hence late-stage fusion of final representations or predictions from each modality (`late-fusion') is still a dominant paradigm for multimodal video classification. Instead, we introduce a novel transformer based architecture that uses` fusion bottlenecks' for modality fusion at multiple layers. Compared to traditional pairwise self-attention, our model forces information between different modalities to pass through a small number of bottleneck latents, requiring the model to collate and condense the most relevant information in each modality and only share what is necessary. We find that such a strategy improves fusion performance, at the same time reducing computational cost. We conduct thorough ablation studies, and achieve state-of-the-art results on multiple audio-visual classification benchmarks including Audioset, Epic-Kitchens and VGGSound. All code and models will be released.


## Link


[https://doi.org/10.48550/arXiv.2107.00135](https://doi.org/10.48550/arXiv.2107.00135) 


# Seminar Slide


[0428semiar_Attention_bottlenecks_for_Multimodal_Fusion.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/6f2a8db0-043e-4f41-b1f9-3b2e71dde3a8/0428semiar_Attention_bottlenecks_for_Multimodal_Fusion.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7V3ZW35%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDZ%2BdKKJGu3HuLGWFv%2BaC4ozR9ylwOPoCDeAZYbcuwlRAiBO3mR2FS9tRU4RkOqIobwy6dz1vc7bYLY3p3ufYOfKKyr%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIMGPNGAou%2BCmbMbFdYKtwDYb8%2BlCyfQCTP27mO9Hvn%2FfwYZwrugEcijQfFIjQlHxVk5Z19fCJJLvMiOKj%2Bm49l3XCC6D5X5hW2OwjcrHpYGXmwVKdXeMkz5ZSYs0hZjMGt395NUKlOis3gTfB6%2F9qCdC8yFH%2BDsfOgxtpbnNL0wIkHfx3AjF2RMrpbkUyUCvbsrmEDXbyrC41K9xKQJFNqnpzbZuYqyczvRRdwqi3GGq%2F4yOHEGE6Y7X0rvaaPQ04MMR640AQfUOWjP%2F0PMQD%2B2aorA7MJlTMRpj75VtsjSkly6Oc316CuOd%2BOCck96j%2FGKuLKp8XRbzfsPsbqxGJtRxA8PVHueiTvtBHek8nY9ZkYRIJZm6eegDoAZX6Qbq8KhaUJnbEF4ZWf5%2BDLS0VckH59Cy%2FtM4coRprcIU95QfzhP%2BQD4rbfEZjmLwfIJK4ihxN%2Fj53lBjQhes1ma01C8kVwvwqBslhpyX%2FL6K7vN0punDfpoMdHjp9dmNdTwyWOeS6HVz02yf1eu96UiPUkpA9aWwrB5McJ4HvfaL2L%2BzHpfM66H9aUvDkVdVRNDv7z9YlzrWgES0Oo0v69zGG%2BDDDWOg3PU%2FAEY%2FrWCSguyLwKBkSUgkzQ%2FZBNGM2W8GWLy68g4oE2MAR%2B6M4w9a6M0wY6pgEqNMQn%2FyV8%2Be0BjtDzXo4KBrEXl9RxLK87txKlhk1uCRBeUvZ0KRAWTrs4BqWUkFuY2FmSQm13LkteQIV9Z10Ps6oHHdwCjL6luWpIE0WbqQMiwtrAZjgQQ35q2zrM3elhs1U4gDJ7rSK5zOQWxd9dz352S2XdJxKzxQlshs56PYagu%2BlizKcLKx9gTw5AeMv3CDgBBedXanyTiibqXw2TGnvkAVej&X-Amz-Signature=107616d914098092ab3a83b3a84a4cf8f862ffb59b44a6719258f01bc302c435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# Comments


> 😀 **YongKyung Oh**  
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
