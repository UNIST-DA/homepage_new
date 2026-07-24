---
date: 2025-04-11
title: MTSCI: A Conditional Diffusion Model for Multivariate Time Series Consistent Imputation (CIKM 2024)
category: Lab Seminar
presenter: 이희윤
url: https://www.notion.so/1d1046396f7e8080983acdd19473ea9c
keywords: DeepLearning, time series, Diffusion Model
---

# Selected Paper


## Title: 


# **MTSCI: A Conditional Diffusion Model for Multivariate Time Series Consistent Imputation**


[MTSCI_%281%29.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/54e2c8c7-5a6b-40a8-89bb-4bfe0b3e2894/MTSCI_%281%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKZZXS7%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T081957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCmP%2B7IjN%2Fn0qhc0irt8X839LoKwpA95ZBx5K0SQBb2XwIgSr3zmYo1xRSNdblhq6Jv94esTkLduYsYQs%2FCqxnO2noq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDPERlflt1b6m%2B8IfpircA27LuvtnkAreqVbguqM8IqQF1ib37yzqA3LfpFMM0Bh%2FRB2f1lEdwJh2wz%2B%2BXXwBGCwzbxEaldYrypqNQSI1amtIw2lmlAR1PWc4CJPxue8BbRiDlxbGH5cR0YLSv%2BI393ZCgpxJVjeWmwH6s5ildgk21USa1EV%2BAHLWIGNelBTUKqbN8ZjubFkTMMXj2OP%2FJKPiHSr8QeNjrMJVd4J2v8Vlkkab2Tf0aIqWM5HCTMOeFoewIE8Za9jaXGgiNoWtkk6jfFtAFil2vS2hkcuq%2BBPmQtX3H4go3z8XtJ1ucg3sBev%2BKhJEqVH%2F9Ik7GwJgKoWSP8DhgM06dNg9Hh%2BlPVIq4TN7wnbI1fJagT%2FYVcNLSm0szhT7plcaEQq%2FDGanzNk6s4V%2BUc9kY7CvzKcjzyuzYpsSszutD2n2MXAX8Slbo95KLzflIh%2BVW9zYMVE9P1KlhLz%2Bs7LYDwvWz2K2w2p4bJeWfLslBM%2BZ2bmWmy4b%2B4R9KcXXCB7hBxXOIWLHM%2BvIMpVvbcB2ORfAgzu4pEu6%2Fpl7oGoHvst6EzApTH1FMWB7l13yvG0g7yn6nehGVZim8ZR%2BITUYaUXRBNT5Lu8w%2Fbt5r5RQAGZsqbJMtmTiXe%2FKxuoH31gKyfCuMMuvjNMGOqUB%2FETk2SvN5t58irS3MZQ6FpVgV4Ya8uGa31w1Bya2nDthge0xrSdTTxt0bihSyE27ZrP34b94wBSgA1ktof572ZP7Tsm0SDPAbVSdq5Et9p5WIqzA71m3GxmjtrviPLziyf99nLXI%2Fq7kp0TSsXBmwmWj9tYY1RISFAfnIpJFT9K2xewT3JhrFmGrj9VoGLoXamIB3tsUBInFToki9qd65PWwzCFi&X-Amz-Signature=6832174a02f0a44add92d4ced82af7bb47e1d2cbef3ccc020f20d559dbf0bbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## Abstract: 


Missing values are prevalent in multivariate time series, compromising the integrity of analyses and degrading the performance of downstream tasks. Consequently, research has focused on multivariate time series imputation, aiming to accurately impute the missing values based on available observations. A key research question is how to ensure imputation consistency, i.e., intra-consistency between observed and imputed values, and inter-consistency between adjacent windows after imputation. However, previous methods rely solely on the inductive bias of the imputation targets to guide the learning process, ignoring imputation consistency and ultimately resulting in poor performance. Diffusion models, known for their powerful generative abilities, prefer to generate consistent results based on available observations. Therefore, we propose a conditional diffusion model for Multivariate Time Series Consistent Imputation (MTSCI). Specifically, MTSCI employs a contrastive complementary mask to generate dual views during the forward noising process. Then, the intra contrastive loss is calculated to ensure intra-consistency between the imputed and observed values. Meanwhile, MTSCI utilizes a mixup mechanism to incorporate conditional information from adjacent windows during the denoising process, facilitating the inter-consistency between imputed samples. Extensive experiments on multiple real-world datasets demonstrate that our method achieves the state-of-the-art performance on multivariate time series imputation task under different missing scenarios.


## Link


[https://arxiv.org/abs/2408.05740](https://arxiv.org/abs/2408.05740)


# Seminar Slide


[MTSCI.pptx](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/d3a8fbdb-3003-4021-bc41-58065800dc3c/MTSCI.pptx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKZZXS7%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T081957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCmP%2B7IjN%2Fn0qhc0irt8X839LoKwpA95ZBx5K0SQBb2XwIgSr3zmYo1xRSNdblhq6Jv94esTkLduYsYQs%2FCqxnO2noq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDPERlflt1b6m%2B8IfpircA27LuvtnkAreqVbguqM8IqQF1ib37yzqA3LfpFMM0Bh%2FRB2f1lEdwJh2wz%2B%2BXXwBGCwzbxEaldYrypqNQSI1amtIw2lmlAR1PWc4CJPxue8BbRiDlxbGH5cR0YLSv%2BI393ZCgpxJVjeWmwH6s5ildgk21USa1EV%2BAHLWIGNelBTUKqbN8ZjubFkTMMXj2OP%2FJKPiHSr8QeNjrMJVd4J2v8Vlkkab2Tf0aIqWM5HCTMOeFoewIE8Za9jaXGgiNoWtkk6jfFtAFil2vS2hkcuq%2BBPmQtX3H4go3z8XtJ1ucg3sBev%2BKhJEqVH%2F9Ik7GwJgKoWSP8DhgM06dNg9Hh%2BlPVIq4TN7wnbI1fJagT%2FYVcNLSm0szhT7plcaEQq%2FDGanzNk6s4V%2BUc9kY7CvzKcjzyuzYpsSszutD2n2MXAX8Slbo95KLzflIh%2BVW9zYMVE9P1KlhLz%2Bs7LYDwvWz2K2w2p4bJeWfLslBM%2BZ2bmWmy4b%2B4R9KcXXCB7hBxXOIWLHM%2BvIMpVvbcB2ORfAgzu4pEu6%2Fpl7oGoHvst6EzApTH1FMWB7l13yvG0g7yn6nehGVZim8ZR%2BITUYaUXRBNT5Lu8w%2Fbt5r5RQAGZsqbJMtmTiXe%2FKxuoH31gKyfCuMMuvjNMGOqUB%2FETk2SvN5t58irS3MZQ6FpVgV4Ya8uGa31w1Bya2nDthge0xrSdTTxt0bihSyE27ZrP34b94wBSgA1ktof572ZP7Tsm0SDPAbVSdq5Et9p5WIqzA71m3GxmjtrviPLziyf99nLXI%2Fq7kp0TSsXBmwmWj9tYY1RISFAfnIpJFT9K2xewT3JhrFmGrj9VoGLoXamIB3tsUBInFToki9qd65PWwzCFi&X-Amz-Signature=ba3bd2d77b4f6a5bbd464d1ef5ef6c1b64150ee86027a46a09b705b1cf6ad555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# Comments


> 😀 **YongKyung Oh**  
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
