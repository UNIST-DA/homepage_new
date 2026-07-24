---
date: 2024-12-20
title: ClimODE: Climate and Weather Forecasting with Physics-Informed Neural ODEs (ICLR 2024)
category: Paper Review
presenter: 전병훈
url: https://www.notion.so/af709ee42967485c81cad818e7666e4e
keywords: Neural Differential Equation, Physics-Informed
---

# Selected Paper


## Title: CLIMODE: CLIMATE AND WEATHER FORECASTING
WITH PHYSICS-INFORMED NEURAL ODES


## Abstract: 


climate and weather prediction traditionally relies on complex numerical simulations of
atmospheric physics. Deep learning approaches, such as transformers, have recently challenged the simulation paradigm with complex network forecasts. However, they often
act as data-driven black-box models that neglect the underlying physics and lack uncertainty quantification. We address these limitations with ClimODE, a spatiotemporal
continuous-time process that implements a key principle of advection from statistical mechanics, namely, weather changes due to a spatial movement of quantities over time.
ClimODE models precise weather evolution with value-conserving dynamics, learning
global weather transport as a neural flow, which also enables estimating the uncertainty
in predictions. Our approach outperforms existing data-driven methods in global and regional forecasting with an order of magnitude smaller parameterization, establishing a new
state of the art.


## Link


[https://arxiv.org/abs/2404.10024](https://arxiv.org/abs/2404.10024)


# Seminar Slide


[CLIMODE_CLIMATE_AND_WEATHER_FORECASTING_WITH_PHYSICS-INFORMED_NEURAL_ODEs.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/65092ba0-d09c-4c7b-9d0f-0980ff8b7a2f/CLIMODE_CLIMATE_AND_WEATHER_FORECASTING_WITH_PHYSICS-INFORMED_NEURAL_ODEs.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZVSZJS%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGI3V%2B4ZuR%2BxlDkReZFPvlSdENJKLVbg9kqsA733QCtcAiEA9HU64cZSkJXZZbaSZ3xJ615b9j%2FJX3oepu9p8q6njj0q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDLl0Y0%2BqKPgHFiLuOircA3ifM1PbTcT4cnGRZ4NpT4%2FZOSHCBOniym1fYVN3eVXXsF3klCO3VLT5Wk4TgiElr8p808%2BGg9TQZ9h9ku2oZw3Yy2RVRZaEz3l3OOveNoAY7a%2BDo31NlpcvQeNUgM3oXVEDiXglTcLHmG%2Bd%2B0fadRWRfJkRizh%2Bba02bP5MJ2Rmh4C%2BleVMavztekk0Rh325WgnTbYxS6MD6pMtNX5E8Yu9qlTMXe8eahPdxcoDLjuW7TAyHxNwVEaPz3tAvdgsYCQrK3%2BG8dDNfFCt3ZKlLOwZ3EDru18h3yJh9DhXsBxSXOskJRT%2BoT9NjsZofpRraeXSi57M13yMNr2jIPLrqX%2Bu3sB2QUVgXCArDWixPRg9XyCyGwWP2RuRRr13LNoQougPA3I6dL8ydUqc%2BilQl58OWBfmdzPRtS542t5nOZAP5sXoq5dLr0x4Pd729wRD8p6sYFmPnIacxMd3qIWTgZiUycowmgVPxtXQW6AIpjzQWphtEJfQTKhzyLc7tU2JcP5niE1txaWosvlwEGwVyE4wFHbHMkLIvrRx0cVJABY2O81A03kwZEdK22LDIaLQLSix%2BueROoU3Rs6VLTAd02woebB9poQeRzck32uisRPr4%2F%2BwGGikJnNAlPiWMM%2BtjNMGOqUBAu%2BMgWcAifGZ1CxK8e%2FaI883P1J4UyjFKQLsEckWFwiR4SjYxCsaYY1n%2FFQ9nsUlQ1VIsl4GZeHP53hKSBusAlMUrEXSGYu2y07DzxTV0ovHjeYYDHFF7ZTUPYMAWg%2B8j66nFWZX4wtR%2FLFm4Wu%2FiMRs1ahU70u3%2BV%2BWatu22p3SrihJK6b8z51jj5YyD%2B0Jak8alLE%2BTz6LdGVovYVMsCVdXZq6&X-Amz-Signature=0dc3ef9a41c52247676b393cbb9f6661779d8478ca66e201a37735912e7aa26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


[CLIMODE_CLIMATE_AND_WEATHER_FORECASTING_WITH_PHYSICS-INFORMED_NEURAL_ODEs.pptx](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab7ec56c-704a-42ff-8b90-7315397db1e8/9a1aafcb-e1d0-4459-ba8c-d287aed51844/CLIMODE_CLIMATE_AND_WEATHER_FORECASTING_WITH_PHYSICS-INFORMED_NEURAL_ODEs.pptx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZVSZJS%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T082054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGI3V%2B4ZuR%2BxlDkReZFPvlSdENJKLVbg9kqsA733QCtcAiEA9HU64cZSkJXZZbaSZ3xJ615b9j%2FJX3oepu9p8q6njj0q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDLl0Y0%2BqKPgHFiLuOircA3ifM1PbTcT4cnGRZ4NpT4%2FZOSHCBOniym1fYVN3eVXXsF3klCO3VLT5Wk4TgiElr8p808%2BGg9TQZ9h9ku2oZw3Yy2RVRZaEz3l3OOveNoAY7a%2BDo31NlpcvQeNUgM3oXVEDiXglTcLHmG%2Bd%2B0fadRWRfJkRizh%2Bba02bP5MJ2Rmh4C%2BleVMavztekk0Rh325WgnTbYxS6MD6pMtNX5E8Yu9qlTMXe8eahPdxcoDLjuW7TAyHxNwVEaPz3tAvdgsYCQrK3%2BG8dDNfFCt3ZKlLOwZ3EDru18h3yJh9DhXsBxSXOskJRT%2BoT9NjsZofpRraeXSi57M13yMNr2jIPLrqX%2Bu3sB2QUVgXCArDWixPRg9XyCyGwWP2RuRRr13LNoQougPA3I6dL8ydUqc%2BilQl58OWBfmdzPRtS542t5nOZAP5sXoq5dLr0x4Pd729wRD8p6sYFmPnIacxMd3qIWTgZiUycowmgVPxtXQW6AIpjzQWphtEJfQTKhzyLc7tU2JcP5niE1txaWosvlwEGwVyE4wFHbHMkLIvrRx0cVJABY2O81A03kwZEdK22LDIaLQLSix%2BueROoU3Rs6VLTAd02woebB9poQeRzck32uisRPr4%2F%2BwGGikJnNAlPiWMM%2BtjNMGOqUBAu%2BMgWcAifGZ1CxK8e%2FaI883P1J4UyjFKQLsEckWFwiR4SjYxCsaYY1n%2FFQ9nsUlQ1VIsl4GZeHP53hKSBusAlMUrEXSGYu2y07DzxTV0ovHjeYYDHFF7ZTUPYMAWg%2B8j66nFWZX4wtR%2FLFm4Wu%2FiMRs1ahU70u3%2BV%2BWatu22p3SrihJK6b8z51jj5YyD%2B0Jak8alLE%2BTz6LdGVovYVMsCVdXZq6&X-Amz-Signature=7e9e1319bda2122519774606d7ea2bfee5fba66dba807ef895e343678769daae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# Comments


> 😀 **YongKyung Oh**  
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
