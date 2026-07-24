---
date: 2025-12-08
title: OIL-AD: An anomaly detection framework for decision-making sequences
category: Lab Seminar
presenter: Yongmin Kim
url: https://www.notion.so/2bc046396f7e806dab28eb0090bf7390
keywords: reinforcement learning, Time-series anomaly detection, UnsupervisedLearning
---

# Selected Paper


## Title: **OIL-AD: An anomaly detection framework for decision-making sequences**


## Abstract: 


[Anomaly detection](https://www.sciencedirect.com/topics/computer-science/anomaly-detection) in decision-making sequences is a challenging problem due to the complexity of normality [representation learning](https://www.sciencedirect.com/topics/computer-science/representation-learning) and the sequential nature of the task. Most existing methods based on [Reinforcement Learning](https://www.sciencedirect.com/topics/computer-science/reinforcement-learning)  (RL) are difficult to implement in the real world due to unrealistic 
assumptions, such as having access to environment dynamics, reward signals, and online interactions with the environment. To address these limitations, we propose an [unsupervised method](https://www.sciencedirect.com/topics/computer-science/unsupervised-method) named Offline [Imitation Learning](https://www.sciencedirect.com/topics/social-sciences/imitation-learning) [based Anomaly Detection](https://www.sciencedirect.com/topics/computer-science/anomaly-based-detection) (OIL-AD), which [detects anomalies](https://www.sciencedirect.com/topics/computer-science/detect-anomaly) in decision-making sequences using two extracted behaviour features: _action optimality_ and _sequential association_. Our offline learning model is an adaptation of behavioural cloning with a transformer [policy network](https://www.sciencedirect.com/topics/social-sciences/policy-networks), where we modify the training process to learn a Q function and a state [value function](https://www.sciencedirect.com/topics/computer-science/function-value) from normal trajectories. We propose that the Q function and the state value function can provide sufficient information about agents’ behavioural data, from which we derive two features for anomaly detection. The intuition behind our method is that the _action optimality_ feature derived from the Q function can differentiate the optimal action from others at each local state, and the _sequential association_ feature derived from the state value function has the potential to 
maintain the temporal correlations between decisions (state–action pairs). Our experiments show that OIL-AD can achieve outstanding online anomaly detection performance with up to 34.8% improvement in  score over comparable baselines. The [source code](https://www.sciencedirect.com/topics/physics-and-astronomy/source-coding) is available on [https://github.com/chenwang4/OILAD](https://github.com/chenwang4/OILAD)


## Link


[https://www.sciencedirect.com/science/article/pii/S0031320325003164](https://www.sciencedirect.com/science/article/pii/S0031320325003164)


# Paper Review


[OILAD.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/d2dee227-ff5f-4e9b-bf50-e3f4b933eb29/OILAD.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQKLACF%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T081938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICrNd5CFLogErORaO2IXngymUG7noWHhawrHSemNI1mbAiAmFZHTI8TBaS2EeSD1aE7f2MIyrDNV3yrHp1HcpuRcJSr%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIMVG7cs3VL3LL8uEFzKtwDPk9HFsv8r5pIR5LZoCB3oOGL8mOu7wWeAhdHYMeCr9%2B81SrEpF825MH0Rk9cNyG8DW5YhXJAjDaV7fPv7BrNL4zYD1eah9P3S%2BGSdeuh95c%2FTkXjulO5VATVkveUE%2FaslvrAlwjnAlS7QVakK%2FDtZZIQys5rBBUMNr8n0aqHHaY8uwxgoCA2GpkUsOtz2eROixCReMLq8TLKgz1N%2BnboIZFmgjkn7Afenjt5ISdN4d3Eef0TAAvbrDp4nCYSrOksjvKhlodVuK5tAS%2FIv3dSy%2Bx1M9eGIRGBDwyXwJrHsd2EODpQvLcYM4zsrKF0xq048V29S11cnEkTuwKGkTJS3SQtbBZk7dXhfHz9OQ4C5EX4yUDzCUAwIy3%2FmXVXXMBZhM8Tyc79gM%2FLGiQA1Df6L4kcDPAWcMbWdNrGcXNWAR4nIix4uBBNXpUBEtUHB2EzEQoogv65zSYkhOWnvpZH6gzBcFX42V0OYPaSlsld89%2BemGhkcCt%2BJKA%2Fj6akkhz7hYBbccOATvufmAPgG8cFNWv%2FAf%2FfWhCrSKzSseSZ8Hdr766eYyyUkPwRzHTZeVfOjNdnTvCnqEW%2FB7kLLANwS8GLgEBstyQrXZA9I8Gfjxvcslti7XTYKvEjoccwi7KM0wY6pgFJSEnVCDHnTeV64lXG7lhqxWRdTfIT8nb%2FwGHEbwfR4inGOaEDumVCR0dB2wO8z9VBFZtke2Jwg8Bz%2B2NHyJVPeyp96ifjrqu9TSksc2lZLR8RTiaKfJ5aHwj9Zuj%2Fm0iKYYWwxzLp7AW9%2BgpbcOCdhkHG0D8DkE52xqDoHDZRj6%2F6jzDlx0bwD2uc2SbBJ12zTiHhYPQY59%2F0NdAq4GIZtnqILNxX&X-Amz-Signature=f53caf9414fc37e48eed8b53e2103fb31a5f83615f2b6064c6f4cad7b2840836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# Comments


> 😀 **YongKyung Oh**  
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
