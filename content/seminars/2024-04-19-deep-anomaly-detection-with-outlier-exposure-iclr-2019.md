---
date: 2024-04-19
title: Deep Anomaly Detection with Outlier Exposure (ICLR 2019)
category: Paper Review
presenter: 강태원
url: https://www.notion.so/8242cb6b0a3341a3ba81729060c65519
keywords: Anomaly Detection, outlier exposure
---

# Deep Anomaly Detection with Outlier Exposure


### Link


## Abstract


It is important to detect anomalous inputs when deploying machine learning
systems. The use of larger and more complex inputs in deep learning magnifies
the difficulty of distinguishing between anomalous and in-distribution examples.
At the same time, diverse image and text data are available in enormous quantities.
We propose leveraging these data to improve deep anomaly detection by training
anomaly detectors against an auxiliary dataset of outliers, an approach we call
Outlier Exposure (OE). This enables anomaly detectors to generalize and detect
unseen anomalies. In extensive experiments on natural language processing and
small- and large-scale vision tasks, we find that Outlier Exposure significantly
improves detection performance. We also observe that cutting-edge generative
models trained on CIFAR-10 may assign higher likelihoods to SVHN images
than to CIFAR-10 images; we use OE to mitigate this issue. We also analyze the
flexibility and robustness of Outlier Exposure, and identify characteristics of the
auxiliary dataset that improve performance.


[%EC%84%B8%EB%AF%B8%EB%82%98_%EA%B0%95%ED%83%9C%EC%9B%90.pptx](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/6aa1d16f-51f9-4b24-b2f7-de7c38185846/%EC%84%B8%EB%AF%B8%EB%82%98_%EA%B0%95%ED%83%9C%EC%9B%90.pptx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCJ7NQH%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCc7T8rBo0Gz8cSOAViIBgeeRWB8eo5GLTwAMWgwlzovwIhANLEcQovVw0oWRUMDPXKKkhaXMnr96yEI3aLW3QAiICdKv8DCAEQABoMNjM3NDIzMTgzODA1Igysmi%2FZ74guqsvFXcIq3AOMzoHIIvK7iiUIjVTOz4A294X7xgCk%2F4gY1HRbuJq%2BK9MVtajBrC8mVg3kV%2FzLY9JE2L%2BKGvKYo%2BpACQntHQE4u8IjMxE%2FE8TLD1LNoNnnPjHNR5xr0TmjamLwtCCK%2FWq8NNoxKVwn326H07HUI96kC03wGssatijy1VWPWiomMfx6sFeisoahh4GOUNGjqTLsFqkZiCJiHDLZcNj9lkxePyqT%2BoKeQJaOV%2F%2FAGaHunPiN3MClGJudihUpFRH1sdhDrZP3JJjyYMUOCEaQpgeEJRPpsjNnOQSBBMzvh3F8ECzzL5jsG4%2F%2Bhp3yTsbBdTDEHR9pYgLwskpacm1pohOWkRdSI4WLxmo6E9F0DIReHD228SLrjw%2FN3zvPclBW%2B8ESbjmtc8p87ODjEhRwamTwhjfnq14MUHQY8yi%2BW%2Fl4PPg3tTIDUzKNaZFzXYM8jPqeH0m9gIR4%2BGE5W6TReOQhmjdG92slJl8kgN9Vj3b5x1J9OO6GVgbpnJYk0lNMlg3vjT0rpLxV93RAfG0%2BmnNINjrM7lxMERDJ4hUcOYVY37hGcoP6tzw9YlPaipS2tmjrxXpJ7ZVBj4bIL2w8YR14cB%2FA44h4j%2B6pdmwOtAMVOLdVZOT%2F%2BiqEQRttuTD0rIzTBjqkAZSeIzvKCs%2F8gFzJ%2B%2B1WXKJElkyyjwyE5zc6mS8mM5UOrGyw4YAwRaOGjhylZLhRRw%2BEF2fqrTrnwONNd9eJuUTrDWbvbBNdhGbOyFlbQFLb27rsteXrvPoHo6zXM1GMfkCKwLFW2fGbJRhfFREOG37W1l1OqG1AB%2FYAC6To2Tho74P8ysYBcmZDQRAGhxvus9haV%2BsErF6belLlDLcb3MnqbVEL&X-Amz-Signature=9e221307713c623412a617b4d2a07e604c546bd77e90aeb3651c733979e29557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


[%EC%84%B8%EB%AF%B8%EB%82%98_%EA%B0%95%ED%83%9C%EC%9B%90.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/7e4ccd23-5e9a-4b80-b224-14123a62e544/%EC%84%B8%EB%AF%B8%EB%82%98_%EA%B0%95%ED%83%9C%EC%9B%90.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCJ7NQH%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCc7T8rBo0Gz8cSOAViIBgeeRWB8eo5GLTwAMWgwlzovwIhANLEcQovVw0oWRUMDPXKKkhaXMnr96yEI3aLW3QAiICdKv8DCAEQABoMNjM3NDIzMTgzODA1Igysmi%2FZ74guqsvFXcIq3AOMzoHIIvK7iiUIjVTOz4A294X7xgCk%2F4gY1HRbuJq%2BK9MVtajBrC8mVg3kV%2FzLY9JE2L%2BKGvKYo%2BpACQntHQE4u8IjMxE%2FE8TLD1LNoNnnPjHNR5xr0TmjamLwtCCK%2FWq8NNoxKVwn326H07HUI96kC03wGssatijy1VWPWiomMfx6sFeisoahh4GOUNGjqTLsFqkZiCJiHDLZcNj9lkxePyqT%2BoKeQJaOV%2F%2FAGaHunPiN3MClGJudihUpFRH1sdhDrZP3JJjyYMUOCEaQpgeEJRPpsjNnOQSBBMzvh3F8ECzzL5jsG4%2F%2Bhp3yTsbBdTDEHR9pYgLwskpacm1pohOWkRdSI4WLxmo6E9F0DIReHD228SLrjw%2FN3zvPclBW%2B8ESbjmtc8p87ODjEhRwamTwhjfnq14MUHQY8yi%2BW%2Fl4PPg3tTIDUzKNaZFzXYM8jPqeH0m9gIR4%2BGE5W6TReOQhmjdG92slJl8kgN9Vj3b5x1J9OO6GVgbpnJYk0lNMlg3vjT0rpLxV93RAfG0%2BmnNINjrM7lxMERDJ4hUcOYVY37hGcoP6tzw9YlPaipS2tmjrxXpJ7ZVBj4bIL2w8YR14cB%2FA44h4j%2B6pdmwOtAMVOLdVZOT%2F%2BiqEQRttuTD0rIzTBjqkAZSeIzvKCs%2F8gFzJ%2B%2B1WXKJElkyyjwyE5zc6mS8mM5UOrGyw4YAwRaOGjhylZLhRRw%2BEF2fqrTrnwONNd9eJuUTrDWbvbBNdhGbOyFlbQFLb27rsteXrvPoHo6zXM1GMfkCKwLFW2fGbJRhfFREOG37W1l1OqG1AB%2FYAC6To2Tho74P8ysYBcmZDQRAGhxvus9haV%2BsErF6belLlDLcb3MnqbVEL&X-Amz-Signature=163396564289842385d7fd86a2105375afc586636520135c4d8a96d2d095920b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


[%EC%84%B8%EB%AF%B8%EB%82%98_%EA%B0%95%ED%83%9C%EC%9B%90.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/a0c8c28a-161f-4aa6-8a8a-587db13c888e/%EC%84%B8%EB%AF%B8%EB%82%98_%EA%B0%95%ED%83%9C%EC%9B%90.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCJ7NQH%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCc7T8rBo0Gz8cSOAViIBgeeRWB8eo5GLTwAMWgwlzovwIhANLEcQovVw0oWRUMDPXKKkhaXMnr96yEI3aLW3QAiICdKv8DCAEQABoMNjM3NDIzMTgzODA1Igysmi%2FZ74guqsvFXcIq3AOMzoHIIvK7iiUIjVTOz4A294X7xgCk%2F4gY1HRbuJq%2BK9MVtajBrC8mVg3kV%2FzLY9JE2L%2BKGvKYo%2BpACQntHQE4u8IjMxE%2FE8TLD1LNoNnnPjHNR5xr0TmjamLwtCCK%2FWq8NNoxKVwn326H07HUI96kC03wGssatijy1VWPWiomMfx6sFeisoahh4GOUNGjqTLsFqkZiCJiHDLZcNj9lkxePyqT%2BoKeQJaOV%2F%2FAGaHunPiN3MClGJudihUpFRH1sdhDrZP3JJjyYMUOCEaQpgeEJRPpsjNnOQSBBMzvh3F8ECzzL5jsG4%2F%2Bhp3yTsbBdTDEHR9pYgLwskpacm1pohOWkRdSI4WLxmo6E9F0DIReHD228SLrjw%2FN3zvPclBW%2B8ESbjmtc8p87ODjEhRwamTwhjfnq14MUHQY8yi%2BW%2Fl4PPg3tTIDUzKNaZFzXYM8jPqeH0m9gIR4%2BGE5W6TReOQhmjdG92slJl8kgN9Vj3b5x1J9OO6GVgbpnJYk0lNMlg3vjT0rpLxV93RAfG0%2BmnNINjrM7lxMERDJ4hUcOYVY37hGcoP6tzw9YlPaipS2tmjrxXpJ7ZVBj4bIL2w8YR14cB%2FA44h4j%2B6pdmwOtAMVOLdVZOT%2F%2BiqEQRttuTD0rIzTBjqkAZSeIzvKCs%2F8gFzJ%2B%2B1WXKJElkyyjwyE5zc6mS8mM5UOrGyw4YAwRaOGjhylZLhRRw%2BEF2fqrTrnwONNd9eJuUTrDWbvbBNdhGbOyFlbQFLb27rsteXrvPoHo6zXM1GMfkCKwLFW2fGbJRhfFREOG37W1l1OqG1AB%2FYAC6To2Tho74P8ysYBcmZDQRAGhxvus9haV%2BsErF6belLlDLcb3MnqbVEL&X-Amz-Signature=94fadb594a806ab9161430c890ec24a6b54990aa13a7d42a6749420037cdac9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
