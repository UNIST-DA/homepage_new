---
date: 2025-01-24
title: Trajectory Flow Matching with Applications to Clinical Time Series Modelling (NeurIPS 2024)
category: Paper Review
presenter: Jae Hun Cho
url: https://www.notion.so/2017013160aa4616a9bbca865c34b07c
keywords: Irregular time series, Flow Matching, Clinical time series
---

# Selected Paper


## Title: **Trajectory Flow Matching with Applications to Clinical Time Series Modelling**


## Abstract: 


Modeling stochastic and irregularly sampled time series is a challenging problem found in a wide range of applications, especially in medicine. Neural stochastic differential equations (Neural SDEs) are an attractive modeling technique for this problem, which parameterize the drift and diffusion terms of an SDE with neural networks. However, current algorithms for training Neural SDEs require backpropagation through the SDE dynamics, greatly limiting their scalability and stability. To address this, we propose **Trajectory Flow Matching** (TFM), which trains a Neural SDE in a _simulation-free_ manner, bypassing backpropagation through the dynamics. TFM leverages the flow matching technique from generative modeling to model time series. In this work we first establish necessary conditions for TFM to learn time series data. Next, we present a reparameterization trick which improves training stability. Finally, we adapt TFM to the clinical time series setting, demonstrating improved performance on four clinical time series datasets both in terms of absolute performance and uncertainty prediction, a crucial parameter in this setting.




## Link


[https://openreview.net/forum?id=fNakQltI1N&referrer=[the profile of Alexander Tong](%2Fprofile%3Fid%3D~Alexander_Tong1)](https://openreview.net/forum?id=fNakQltI1N&referrer=%5Bthe%20profile%20of%20Alexander%20Tong%5D(%2Fprofile%3Fid%3D~Alexander_Tong1))


# Seminar Slide


[Trajectory_Flow_Matching_with_Applications_to_Clinical_Time_Series_Modeling.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/0ec27479-b26b-491c-9444-93c4c69b1b94/Trajectory_Flow_Matching_with_Applications_to_Clinical_Time_Series_Modeling.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642S2HG3R%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEnF6cezGo3uZ2vnkfmk%2F894imtsMSG1eB5xZld3o4RQAiB9x9RuVx%2FXUOw8DUqWx8N5lcbxlMnLM%2B14fZ%2BY1MfH9ir%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIMdjkpljmXD09LWycKKtwDHQQ8oo0%2FmPcxR1twOVutWOZ0kwYakRz0ps3%2Bftr0OfkB5UKyT%2BCoMoUUWLWTObFj%2FDgin1GcU7%2Fi94%2Bf8SMA%2FvI%2BiSI41FaJJRH3XGN7Xl0gtqPe0excFVKDg3AaT8qL2TWkhwJu2e8qYyUQNiF1x2HDRWWbasC2rHfo7%2Fr50ehyzL25oPAFFHIGOhZsgEwx4MIStKo016KZ1lseHe42WFYV%2BR0nWQCdSsbwZYesnTRS85uXRAVMlxA4azOaQhfpmLPp33kxvshZXJAPf98T7OjFV9HyjfG4aHGTNcAPTH2uqY3OX9fjzAauYHD1GJYBsY1z4pLLLc0DaBy6dkBg5Hxv1Q8dDJg%2BfS7oKccewIOF%2B%2FmoWEQ9rxCn0kkVLOO6IOhRVlVeczBWJS2IykOUi93%2BetInZ7w2ObOgzJGVL7QCmj6ODyx3OC9Xi9OVF2IyGCPHC0kJ3fTVIei5kPG%2BGA%2F8CNTX64YuLfQVVcQq4296AKBwCtNKpFN4R7IkD2JwWCKNnPK78sYY3ahLDRnA9saWJ41RcTqEU80r6wNynTYbi6CCuHv9gA2SM120DmGlXL1PA%2FTRkHIc6UosEeZSTCTwdDq5gO1RPNr9dSE6OD8fHyQKfLlmjW2OuaUwxbCM0wY6pgGrGeO%2BnVCi%2FW4BRBf8eGuUw3xHpVANV%2FgBmRuPyU3zcw8pPmOPmYZw9oc8Zjyd1v4dGQfXVwEg9x884T%2B84FD3pQOanwaHc%2FsI555riqkON1ID%2F9Bq%2BBCml1JxOZ%2F%2BfIbH3aAhv1AHPMJvRcH5cIhsxetR4g%2BNEYhqzvTGJdaaeAUVSnxSX7nDnC8xsc0mNJDSTAWfAwNcxh1wniz%2FjKzTPmbUn1ut&X-Amz-Signature=ac8b2cbebb975de418c1a61a891e8b9e596cdf6082fbf6bd211423e2f8d7eb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# Comments


> 😀 **YongKyung Oh**  
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
