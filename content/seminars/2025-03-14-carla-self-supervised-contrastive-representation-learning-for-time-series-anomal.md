---
date: 2025-03-14
title: CARLA: Self-supervised contrastive representation learning for time series anomaly detection (Pattern Recognition 2025)
category: Lab Seminar
presenter: Yongmin Kim
url: https://www.notion.so/1525af7835be4d8a8f2ae5f5a350b9ce
keywords: Contrastive learning, Self-supervised Learning, Time-series anomaly detection, Anormaly Injection
---

# Selected Paper


## Title: CARLA: Self-supervised contrastive representation learning for time series anomaly detection


## Abstract: 


One main challenge in time series anomaly detection (TSAD) is the lack of labelled data in many real life scenarios. Most of the existing anomaly detection methods focus on learning the normal behaviour of unlabelled time series in an unsupervised manner. The normal boundary is often defined tightly, resulting in slight deviations being classified as anomalies, consequently leading to a high false positive rate and a limited ability to generalise normal patterns. To address this, we introduce a novel end-to-end self-supervised ContrAstive Representation Learning approach for time series Anomaly detection (CARLA). While existing contrastive learning methods assume that augmented time series windows are positive samples and temporally distant windows are negative samples, we argue that these assumptions are limited as augmentation of time series can transform them to negative samples, and a temporally distant window can represent a positive sample. Existing approaches to contrastive learning for time series have directly copied methods developed for image analysis. We argue that these methods do not transfer well. Instead, our contrastive approach leverages existing generic knowledge about time series anomalies and injects various types of anomalies as negative samples. Therefore, CARLA not only learns normal behaviour but also learns deviations indicating anomalies. It creates similar representations for temporally close windows and distinct ones for anomalies. Additionally, it leverages the information about representations’ neighbours through a self-supervised approach to classify windows based on their nearest/furthest neighbours to further enhance the performance of anomaly detection. In extensive tests on seven major real-world TSAD datasets, CARLA shows superior performance (F1 and AU-PR) over state-of-the-art self-supervised, semi-supervised, and unsupervised TSAD methods for univariate time series and multivariate time series. Our research highlights the immense potential of contrastive representation learning in advancing the TSAD field, thus paving the way for novel applications and in-depth exploration.


## Link


[bookmark](https://www.sciencedirect.com/science/article/pii/S0031320324006253)


# Seminar Slide


[CARLA.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/06b8fc51-e693-4034-90ab-e326fc3cc344/CARLA.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARSO3PC%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC3hdd1Svo0QBZ%2FLr%2Ftco7VCgv4B2MXQ7ILBbZgw6G2JAIhAJ0ilW2KmxRuFDh5cLLGh2YqcT7Fqg5DrJH5wcs2P7KJKv8DCAEQABoMNjM3NDIzMTgzODA1IgyIHG%2BvR6ohnkBT2igq3AOPifOVbnYantBfv7umznY2YKEZI4gWKV2ftPZApKHGK6wdZnSfN5Avo%2FMqTZlni3l7sn4E%2BCZCFC6cGfCSH7QrLzraFZthBN8KaPqLQ6fT%2BudV%2B11cf0bXW%2Brj6kyR3Ps7LvhVQ%2FMP1eoof0E0KICuvPkmEix9gmG0BpHEZ1vasSfn8JeneSM%2BkbZj9LV0YFiXNUeg8zq8B1wS1dwd9gD2Islf7wF1un8mqPGvyiaxw2knHPxRNJirDTxkHczL2SvFq6w2cDHntKK65GYiIQEDKICJuBQPY11SZf%2BlmIGXlRVzK%2Bi1YwT%2BfHga6LMsK4DwL%2B6FApyr4xvlsu7WpRebtSUNVvzMj9QKtwv%2F%2FVjiUhSn6vrPbe5rRuIzYZkzdUtRFnv6ORYXX3ftAmJ%2BBpeiPfjq5E5zRLXAr%2FvgfeaSFt7sG%2FTbEoYFWNtiM7Fq4gn6FDXpyuk9Ro384cecfhQD4sIG7OJy8EfN3Ov4qMqQrn0aEBxrxfGsfACOq%2F0TvIZCU5V6zTdWoRsfqwrcZPQNzkEFCanU79WGAhJMw1tYrkl4n69Jpn6QrJshviM%2B8Fcm9junjFV7eMuYPyPF1SIZPSf2Fma8pc759NTGrVA50SNktAITteb7BEU8RzC2rozTBjqkAT9y1IN6NYA8U1qJkRGPPBdAEKeBLMhjZjGh0PTlE%2FNhuNECf%2FybTzTE5Dx0AGBW%2BAG3QpppJjt%2F4w9TiTf0vydu63Aod93LxcIzRp6Lm%2FGUk%2BQvm5COIosjGAIiuBore8sIJId6cEVb4807LdPmGy8%2F%2B8NyClY2CkJxONOxIocLH1o7i%2FIwePUahlsj00Eriq81Y1WW02%2BY5kymoFG7zDUwDOO%2B&X-Amz-Signature=b3787e2e895d610c5827f177fd4d31456b0e22021e721bc3ef90793913826bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# Comments


> 😀 **YongKyung Oh**  
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


ModernTCN


[https://github.com/luodhhh/ModernTCN](https://github.com/luodhhh/ModernTCN)


CNN 기반 TS 모델 다시 부각시키는 논문

- 기본적인 것을 다시 돌아본다는 측면에서 관심이 간다.

ICLR 2024 spotlight


---


TimeMixer


[https://github.com/kwuking/TimeMixer](https://github.com/kwuking/TimeMixer)


다양한 측정 주기의 TS 데이터들을 이용하는 것과 관련된 논문인듯? - 우리 쪽이랑 관련 있을 것 같음


ICLR 2024 Poster
