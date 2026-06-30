// Lab activity — events & weekly seminars. News lives in ./news.ts (CMS).
// Ported in full from the legacy Jekyll _data/activity.yml & _data/seminar.json.
// Free of node:fs so the Client seminar list can import it.
export type EventItem = { date: string; title: string; image?: string; detail?: string };
export type SeminarItem = {
  date: string;
  title: string;
  category: "Lab Seminar" | "Paper Review";
  presenter: string;
  url: string;
  keywords: string[];
};

export const events: EventItem[] = [
  {
    "date": "2026-04-07",
    "title": "Cherry Blossom Pizza Picnic",
    "image": "/assets/activity/Lab_Events/Picnic.jpg",
    "detail": "Lab Members enjoyed picnic with delicious pizza."
  },
  {
    "date": "2026-04-07",
    "title": "Cherry Blossom Lab Photo",
    "image": "/assets/activity/Lab_Events/cherry_1.jpg",
    "detail": "Lab Members took picture under beautiful cherry blossom."
  },
  {
    "date": "2026-02-27",
    "title": "Spring Unity Get-Together",
    "image": "/assets/activity/Lab_Events/spring_unity_2026.jpg",
    "detail": "Enjoyed borad games, team games at the arcade together with lab members."
  },
  {
    "date": "2025-11-14",
    "title": "CIKM 2025 Participation",
    "image": "/assets/activity/Lab_Events/CIKM_group_11_14.jpg",
    "detail": "DA Lab members gathered together at CIKM 2025 Seoul."
  },
  {
    "date": "2025-11-14",
    "title": "2025 DA Lab Homecoming",
    "image": "/assets/activity/Lab_Events/Homecoming_11_14.jpg",
    "detail": "Held the 2025 DA Lab Homecoming event with professors, students, and alumni."
  },
  {
    "date": "2025-11-12",
    "title": "CIKM 2025 Poster Presentation",
    "image": "/assets/activity/Lab_Events/CIKM_poster_11_12.jpg",
    "detail": "Presented a short research paper on Modeling Irregular Astronomical Time Series at CIKM 2025."
  },
  {
    "date": "2025-11-11",
    "title": "CIKM 2025 Tutorial Session",
    "image": "/assets/activity/Lab_Events/CIKM_tutorial_11_11_prof.jpg",
    "detail": "Tutorial sessions at CIKM 2025 in Seoul."
  },
  {
    "date": "2025-11-08",
    "title": "2025 KIIE Fall Conference",
    "image": "/assets/activity/Lab_Events/KIIE_11_8.jpg",
    "detail": "Participated in the 2025 KIIE Fall Conference held in KAIST."
  },
  {
    "date": "2025-10-30",
    "title": "IE Talk Concert",
    "image": "/assets/activity/Lab_Events/talk_concert.jpg",
    "detail": "Professor introduced DA lab at Talk concert."
  },
  {
    "date": "2025-10-28",
    "title": "INFORMS 2025",
    "image": "/assets/activity/Lab_Events/INFORMS_10_28.jpg",
    "detail": "Lab members attended the INFORMS 2025."
  },
  {
    "date": "2025-07-11",
    "title": "Lab Movie Night",
    "image": "/assets/activity/Lab_Events/movie_night_2025.webp",
    "detail": "Enjoyed a movie night with lab members & U-SURF."
  },
  {
    "date": "2025-05-01",
    "title": "Professor's Birthday Celebration",
    "image": "/assets/activity/Lab_Events/Prof_birth.webp",
    "detail": "The lab celebrated our professor's birthday."
  },
  {
    "date": "2025-04-08",
    "title": "Cherry Blossom Picnic",
    "image": "/assets/activity/Lab_Events/spring_2025.webp",
    "detail": "Enjoyed an outdoor picnic among the campus cherry blossoms."
  },
  {
    "date": "2025-02-20",
    "title": "Lab Graduation Ceremony",
    "image": "/assets/activity/Lab_Events/graduation_2025.webp",
    "detail": "Celebrated the graduation of our lab members."
  },
  {
    "date": "2024-11-12",
    "title": "Lab BBQ Party",
    "image": "/assets/activity/Lab_Events/bbq_2024.webp",
    "detail": "Held lab BBQ party."
  },
  {
    "date": "2024-09-06",
    "title": "Lab Homecoming Day",
    "image": "/assets/activity/Lab_Events/homecoming_2024.webp",
    "detail": "Held our annual lab homecoming day event."
  },
  {
    "date": "2024-02-15",
    "title": "Lab Graduation Ceremony",
    "image": "/assets/activity/Lab_Events/graduation_2024.webp",
    "detail": "Celebrated the graduation of our lab members."
  },
  {
    "date": "2024-01-13",
    "title": "Lab Year-End Party",
    "image": "/assets/activity/Lab_Events/year_end_party_2024.webp",
    "detail": "Held our annual lab year-end party."
  },
  {
    "date": "2023-07-22",
    "title": "Lab Membership Training",
    "image": "/assets/activity/Lab_Events/membership_training_2023.png",
    "detail": "Conducted membership training."
  },
  {
    "date": "2023-04-03",
    "title": "Lab Cherry Blossom Picnic",
    "image": "/assets/activity/Lab_Events/blossom_2023.webp",
    "detail": "Enjoyed a picnic under the cherry blossoms."
  },
  {
    "date": "2023-02-17",
    "title": "Lab Graduation Ceremony",
    "image": "/assets/activity/Lab_Events/graduation_2023.webp",
    "detail": "Celebrated the graduation of our lab members."
  },
  {
    "date": "2022-07-10",
    "title": "Lab Membership Training",
    "image": "/assets/activity/Lab_Events/membership_training_2022.webp",
    "detail": "Conducted membership training."
  },
  {
    "date": "2022-06-01",
    "title": "KIIE Conference",
    "image": "/assets/activity/Lab_Events/KIIE_2022.webp",
    "detail": "Attended the KIIE conference."
  },
  {
    "date": "2022-04-20",
    "title": "Lab Picnic",
    "image": "/assets/activity/Lab_Events/picnic_2022.webp",
    "detail": "Enjoyed a Picnic with lab members."
  },
  {
    "date": "2021-04",
    "title": "Lab Cherry Blossom Picnic",
    "image": "/assets/activity/Lab_Events/blossom_2021.webp",
    "detail": "Enjoyed a picnic under the cherry blossoms."
  }
];

export const seminars: SeminarItem[] = [
  {
    "date": "2026-06-19",
    "title": "NEURAL DELAY DIFFERENTIAL EQUATIONS",
    "category": "Lab Seminar",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/376046396f7e8088baf2f3b2abcfd642",
    "keywords": [
      "Neural Differential Equation"
    ]
  },
  {
    "date": "2026-05-29",
    "title": "A Survey on Concept Drift Adaptation",
    "category": "Paper Review",
    "presenter": "Yongmin Kim",
    "url": "https://www.notion.so/36f046396f7e8017974bfff55bd3618a",
    "keywords": [
      "Concept Drift",
      "Adaptation"
    ]
  },
  {
    "date": "2026-05-22",
    "title": "Intelligent early-warning quality control for electromagnets based on long short-term memory network with Bayesian optimisation and exponentially weighted moving average chart",
    "category": "Lab Seminar",
    "presenter": "Thien Le",
    "url": "https://www.notion.so/366046396f7e80679d94d9db776976f8",
    "keywords": [
      "ControlChart",
      "DeepLearning",
      "LSTM"
    ]
  },
  {
    "date": "2026-04-24",
    "title": "Can a society of generative agents simulate human behavior and inform public health policy? A case study on vaccine hesitancy. In Proceedings of the Conference on Language Modeling",
    "category": "Lab Seminar",
    "presenter": "Ji_hyun",
    "url": "https://www.notion.so/34c046396f7e8073a480e19fff727112",
    "keywords": [
      "LLM",
      "Agent Based Modeling",
      "Simulation"
    ]
  },
  {
    "date": "2026-04-10",
    "title": "Are labels informative in semi-supervised learning?",
    "category": "Lab Seminar",
    "presenter": "이희윤",
    "url": "https://www.notion.so/2d9046396f7e80669c02d283a2ce0b86",
    "keywords": [
      "semi-supervised learning",
      "missingness data",
      "Image Representation"
    ]
  },
  {
    "date": "2026-03-27",
    "title": "Deep Learning Longitudinal Survival Analysis with Competing Risk",
    "category": "Lab Seminar",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/32f046396f7e80b6807fe5be4ea9f2d9",
    "keywords": [
      "Survival Analysis",
      "Deep Learning",
      "Irregular time series"
    ]
  },
  {
    "date": "2026-03-20",
    "title": "A Survey of Uncertainty Estimation Methods on Large Language Models",
    "category": "Lab Seminar",
    "presenter": "전병훈",
    "url": "https://www.notion.so/308046396f7e80ad84d0db477b870e1d",
    "keywords": [
      "Uncertainty Estimation",
      "LLM"
    ]
  },
  {
    "date": "2026-03-13",
    "title": "IdealTSF: Can Non-Ideal Data Contribute to Enhancing the Performance of Time Series Forecasting Models?",
    "category": "Lab Seminar",
    "presenter": "Yongmin Kim",
    "url": "https://www.notion.so/322046396f7e8082a345e977cb2f5b61",
    "keywords": [
      "optimization",
      "Forecasting",
      "time series"
    ]
  },
  {
    "date": "2026-02-20",
    "title": "SensorSCAN: Self-supervised learning and deep clustering for fault diagnosis in chemical processes",
    "category": "Paper Review",
    "presenter": "유정우",
    "url": "https://www.notion.so/30d046396f7e8067b1a8fd6e57230a7d",
    "keywords": [
      "Contrastive learning",
      "Time-series anomaly detection",
      "Transformer"
    ]
  },
  {
    "date": "2026-02-13",
    "title": "AutoTimes: Autoregressive Time Series Forecasters via Large Language Models",
    "category": "Lab Seminar",
    "presenter": "Ji_hyun",
    "url": "https://www.notion.so/308046396f7e80bf8076d85df7673d72",
    "keywords": [
      "LLM",
      "time-series forecasting",
      "Multi-variate"
    ]
  },
  {
    "date": "2026-01-16",
    "title": "Deep Latent Variable Models for Missing Data",
    "category": "Lab Seminar",
    "presenter": "이희윤",
    "url": "https://www.notion.so/2ea046396f7e802f9e5dc790c1b362e5",
    "keywords": [
      "VAE",
      "variational inference",
      "DeepLearning",
      "imputation"
    ]
  },
  {
    "date": "2026-01-05",
    "title": "Uncertainty quantification based on conformal prediction for industrial time series with distribution shift, IEEE Transactions on Industrial Informatics",
    "category": "Lab Seminar",
    "presenter": "전병훈",
    "url": "https://www.notion.so/2a2046396f7e802d9d80e9ded668ea75",
    "keywords": [
      "Uncertainty Estimation"
    ]
  },
  {
    "date": "2025-12-15",
    "title": "Reversible instance normalization for accurate time-series forecasting against distribution shift",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/2c4046396f7e806bb025d114b98d780c",
    "keywords": [
      "time-series forecasting"
    ]
  },
  {
    "date": "2025-12-08",
    "title": "OIL-AD: An anomaly detection framework for decision-making sequences",
    "category": "Lab Seminar",
    "presenter": "Yongmin Kim",
    "url": "https://www.notion.so/2bc046396f7e806dab28eb0090bf7390",
    "keywords": [
      "reinforcement learning",
      "Time-series anomaly detection",
      "UnsupervisedLearning"
    ]
  },
  {
    "date": "2025-11-24",
    "title": "Survival Models to Estimate User Engagement in Online Experiments",
    "category": "Paper Review",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/2b5046396f7e80238e82e8683189818a",
    "keywords": [
      "Survival Analysis",
      "User Engagement"
    ]
  },
  {
    "date": "2025-11-17",
    "title": "Using Explainable Artificial Intelligence to Improve Process Quality:\nEvidence from Semiconductor Manufacturing (Management Science, 2022)",
    "category": "Paper Review",
    "presenter": "유정우",
    "url": "https://www.notion.so/2b5046396f7e80fba149cf48245431af",
    "keywords": [
      "Gradient Boost Tree",
      "QualityMonitoring"
    ]
  },
  {
    "date": "2025-11-17",
    "title": "Uncertainty Estimation by Density Aware Evidential Deep Learning",
    "category": "Lab Seminar",
    "presenter": "",
    "url": "https://www.notion.so/2b6046396f7e8054abe0c494fc931413",
    "keywords": [
      "DeepLearning",
      "Uncertainty Estimation"
    ]
  },
  {
    "date": "2025-11-03",
    "title": "EconAgent: Large Language Model-Empowered Agents for Simulating Macroeconomic Activities",
    "category": "Lab Seminar",
    "presenter": "",
    "url": "https://www.notion.so/2a2046396f7e80149abbe62a2cbfc7c2",
    "keywords": [
      "LLM",
      "Macroeconomic"
    ]
  },
  {
    "date": "2025-10-13",
    "title": "Large Language Models can Deliver Accurate and Interpretable\nTime Series Anomaly Detection",
    "category": "Lab Seminar",
    "presenter": "Ji_hyun",
    "url": "https://www.notion.so/28c046396f7e80e28a4de0b911e5cf9a",
    "keywords": [
      "LLM",
      "Anomaly Detection"
    ]
  },
  {
    "date": "2025-09-29",
    "title": "An advanced retrieval-augmented generation system for manufacturing quality control (2025)",
    "category": "Lab Seminar",
    "presenter": "Seongjin",
    "url": "https://www.notion.so/28c046396f7e8055a688de5b111161f0",
    "keywords": [
      "LLM",
      "Retrieval Augmented Generation"
    ]
  },
  {
    "date": "2025-09-29",
    "title": "Diffusion-based Multivariate Time-Series Imputation",
    "category": "Lab Seminar",
    "presenter": "이시은",
    "url": "https://www.notion.so/2b5046396f7e8092ac68caa0e06ad697",
    "keywords": [
      "imputation",
      "Statistics",
      "Diffusion Model"
    ]
  },
  {
    "date": "2025-09-05",
    "title": "Multiple Imputation for Missing Data",
    "category": "Lab Seminar",
    "presenter": "이희윤",
    "url": "https://www.notion.so/264046396f7e8070b523c5b6c5eb8d73",
    "keywords": [
      "imputation",
      "Statistics"
    ]
  },
  {
    "date": "2025-08-25",
    "title": "A Deep-Learning-Based Surrogate Model for Thermal Signature Prediction in Laser Metal Deposition (IEEE T-ASE 2023)",
    "category": "Paper Review",
    "presenter": "Yongmin Kim",
    "url": "https://www.notion.so/25a046396f7e80a8a559e4613ee5ac1b",
    "keywords": [
      "DeepLearning",
      "QualityMonitoring",
      "GAN"
    ]
  },
  {
    "date": "2025-08-13",
    "title": "Neural Network Control Chart for Autocorrelated Multivariate Data (Quality Engineering)",
    "category": "Paper Review",
    "presenter": "유정우",
    "url": "https://www.notion.so/250046396f7e809397c2f33d41a3e440",
    "keywords": [
      "QualityMonitoring",
      "ControlChart"
    ]
  },
  {
    "date": "2025-08-01",
    "title": "Autoencoding Under Normalization Constraints (PMLR, 2021)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/23f046396f7e8014b2e5e4d83e1f3c27",
    "keywords": [
      "Anomaly Detection",
      "Autoencoder"
    ]
  },
  {
    "date": "2025-08-01",
    "title": "Uncertainty quantification in digital twin (SMO 2023)",
    "category": "Paper Review",
    "presenter": "전병훈",
    "url": "https://www.notion.so/245046396f7e80779f84c6b7889bed8e",
    "keywords": [
      "Uncertainty Estimation"
    ]
  },
  {
    "date": "2025-07-14",
    "title": "Multimodal Industrial Anomaly Detection via Hybrid Fusion (CVPR, 2023)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/230046396f7e801ab004e577c53cf802",
    "keywords": [
      "Anomaly Detection",
      "multi-modal learning"
    ]
  },
  {
    "date": "2025-07-07",
    "title": "Bayesian Calibration of Computer Models (JRSS:B 2001)",
    "category": "Paper Review",
    "presenter": "Chanbeom",
    "url": "https://www.notion.so/22d046396f7e804d9f54e4fc4a2e8f02",
    "keywords": [
      "Statistics"
    ]
  },
  {
    "date": "2025-05-30",
    "title": "ANOMALY TRANSFORMER: TIME SERIES ANOMALY DETECTION WITH ASSOCIATION DISCREPANCY (ICLR 2022 Spotlight)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/1ff046396f7e80a091fad7ac557a98ac",
    "keywords": [
      "Time-series anomaly detection",
      "Transformer"
    ]
  },
  {
    "date": "2025-05-23",
    "title": "Understanding Complex Missingness Mechanisms",
    "category": "Lab Seminar",
    "presenter": "이시은",
    "url": "https://www.notion.so/1fc046396f7e80c488a1f1aa9e7ca435",
    "keywords": [
      "imputation",
      "missingness data"
    ]
  },
  {
    "date": "2025-04-25",
    "title": "KAN: Kolmogorov–Arnold Networks (ICLR 2025)",
    "category": "Lab Seminar",
    "presenter": "Chanbeom",
    "url": "https://www.notion.so/1c3046396f7e80edbad2e7d2b890e6fa",
    "keywords": [
      "Deep Learning"
    ]
  },
  {
    "date": "2025-04-18",
    "title": "TIME-LLM: Reprogramming LLMs for Time Series\nForecasting",
    "category": "Paper Review",
    "presenter": "Seongjin",
    "url": "https://www.notion.so/1e3046396f7e8019a4a1c40e114c8cc5",
    "keywords": [
      "LLM",
      "time series"
    ]
  },
  {
    "date": "2025-04-11",
    "title": "MTSCI: A Conditional Diffusion Model for Multivariate Time Series Consistent Imputation (CIKM 2024)",
    "category": "Lab Seminar",
    "presenter": "이희윤",
    "url": "https://www.notion.so/1d1046396f7e8080983acdd19473ea9c",
    "keywords": [
      "DeepLearning",
      "time series",
      "Diffusion Model"
    ]
  },
  {
    "date": "2025-03-28",
    "title": "Linear-Time Sequence Modeling with Selective State Spaces (COLM 2024)",
    "category": "Paper Review",
    "presenter": "전병훈",
    "url": "https://www.notion.so/1ae046396f7e803c8c56ec9756577d95",
    "keywords": [
      "State space model",
      "time series",
      "RNN"
    ]
  },
  {
    "date": "2025-03-14",
    "title": "CARLA: Self-supervised contrastive representation learning for time series anomaly detection (Pattern Recognition 2025)",
    "category": "Lab Seminar",
    "presenter": "Yongmin Kim",
    "url": "https://www.notion.so/1525af7835be4d8a8f2ae5f5a350b9ce",
    "keywords": [
      "Contrastive learning",
      "Self-supervised Learning",
      "Time-series anomaly detection",
      "Anormaly Injection"
    ]
  },
  {
    "date": "2025-02-28",
    "title": "Neural SDEs as Infinite-Dimensional GANs (PMLR, 2021)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/193046396f7e8060ae4df1ff7a564d8d",
    "keywords": [
      "Neural Differential Equation",
      "Generative Model"
    ]
  },
  {
    "date": "2025-02-13",
    "title": "Root Cause Analysis of anomalies in multivariate time series through granger causal discovery (ICLR 2025)",
    "category": "Lab Seminar",
    "presenter": "강태원",
    "url": "https://www.notion.so/199046396f7e80afac16f04606f1e35c",
    "keywords": [
      "Autoencoder",
      "Causality",
      "Anomaly Detection"
    ]
  },
  {
    "date": "2025-02-07",
    "title": "Current Research Topics in Survival Analysis",
    "category": "Lab Seminar",
    "presenter": "Chanbeom",
    "url": "https://www.notion.so/aef251d7efcd402f857d89cd70b6b77e",
    "keywords": [
      "Survival Analysis"
    ]
  },
  {
    "date": "2025-01-24",
    "title": "Trajectory Flow Matching with Applications to Clinical Time Series Modelling (NeurIPS 2024)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/2017013160aa4616a9bbca865c34b07c",
    "keywords": [
      "Irregular time series",
      "Flow Matching",
      "Clinical time series"
    ]
  },
  {
    "date": "2025-01-17",
    "title": "Warpformer: A Multi-scale Modeling Approach for Irregular Clinical Time Series (KDD 2023)",
    "category": "Paper Review",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/cb135695f2a148bfb39562f4c3b67934",
    "keywords": [
      "Attention",
      "Transformer",
      "Irregular time series",
      "Warping"
    ]
  },
  {
    "date": "2025-01-10",
    "title": "Neural Frailty Machine: Beyond proportional hazard\nassumption in neural survival regressions (NeurIPS 2023)",
    "category": "Paper Review",
    "presenter": "Chanbeom",
    "url": "https://www.notion.so/c630db8facbb403db1d516dbde8c71ee",
    "keywords": [
      "Survival Analysis",
      "Deep Learning"
    ]
  },
  {
    "date": "2024-12-20",
    "title": "ClimODE: Climate and Weather Forecasting with Physics-Informed Neural ODEs (ICLR 2024)",
    "category": "Paper Review",
    "presenter": "전병훈",
    "url": "https://www.notion.so/af709ee42967485c81cad818e7666e4e",
    "keywords": [
      "Neural Differential Equation",
      "Physics-Informed"
    ]
  },
  {
    "date": "2024-12-06",
    "title": "Multi-Time Attention Networks for Irregularly Sampled Time Series (mTANs)",
    "category": "Lab Seminar",
    "presenter": "이시은",
    "url": "https://www.notion.so/153046396f7e804594f3eee2ecdbef1e",
    "keywords": [
      "Irregular time series",
      "Attention"
    ]
  },
  {
    "date": "2024-11-29",
    "title": "Modulated Neural ODEs (NeurIPS 2023)",
    "category": "Paper Review",
    "presenter": "Yongmin Kim",
    "url": "https://www.notion.so/3b92184defb44d7fa3e23500c0bd1acf",
    "keywords": [
      "Neural Differential Equation"
    ]
  },
  {
    "date": "2024-11-15",
    "title": "Physics-Informed Neural ODE with Heterogeneous Control Inputs (PINOHI) for Quality Prediction of Composite Adhesive Joints",
    "category": "Paper Review",
    "presenter": "Seongjin",
    "url": "https://www.notion.so/107046396f7e80d9947fee9a193b4012",
    "keywords": [
      "Neural Differential Equation",
      "Physics-Informed"
    ]
  },
  {
    "date": "2024-11-01",
    "title": "PREVENT : An Unsupervised Approach to Predict Software Failures in Production (IEEE Trans. Softw. Eng. 2025)",
    "category": "Paper Review",
    "presenter": "강태원",
    "url": "https://www.notion.so/f6c6ff4589e2469fb18a0c7b14e56cda",
    "keywords": [
      "Anomaly Detection",
      "Autoencoder",
      "Causality",
      "UnsupervisedLearning"
    ]
  },
  {
    "date": "2024-10-11",
    "title": "Multi-View Integrative Attention-Based Deep Representation Learning for Irregular Clinical Time-Series Data (2022)",
    "category": "Paper Review",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/107046396f7e8084a72fd035f2df3d04",
    "keywords": [
      "Irregular time series",
      "Attention"
    ]
  },
  {
    "date": "2024-09-20",
    "title": "Learning with Imbalanced Noisy Data by Preventing Bias in Sample Selection (IEEE Trans. Multimed. 2024)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/360723a523d24f1bbda8ce9ac42badc0",
    "keywords": [
      "classification",
      "Noisy label learning",
      "Sample selection",
      "Class imbalance"
    ]
  },
  {
    "date": "2024-08-30",
    "title": "Precursor-of-anomaly detection for irregular time series (KDD, 2023)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/4487c7a8eef145b2bee224364228e398",
    "keywords": [
      "Neural Differential Equation",
      "Time-series anomaly detection"
    ]
  },
  {
    "date": "2024-08-16",
    "title": "Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels",
    "category": "Paper Review",
    "presenter": "Seongjin",
    "url": "https://www.notion.so/ee84b2bb1771409a8ad36a95481e0b97",
    "keywords": [
      "Noisy label learning"
    ]
  },
  {
    "date": "2024-07-19",
    "title": "Wind Turbine Gearbox Failure Detection Through Cumulative Sum of Multivariate Time Series Data (Front. Energy Res. 2022)",
    "category": "Paper Review",
    "presenter": "강태원",
    "url": "https://www.notion.so/f30971eb69e84bb2b790a481a66dea71",
    "keywords": [
      "Anomaly Detection",
      "Time-series anomaly detection"
    ]
  },
  {
    "date": "2024-07-05",
    "title": "Machine Learning for Survival Analysis: A Survey (2019)",
    "category": "Lab Seminar",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/de6084377bf84fc3bb66b345c658dbbe",
    "keywords": [
      "Survival Analysis"
    ]
  },
  {
    "date": "2024-06-21",
    "title": "QuantTree: Histograms for Change Detection in Multivariate Data Streams (ICML 2018)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/21e6ef86765544c6acc2591fe3b38c42",
    "keywords": [
      "Change Detection"
    ]
  },
  {
    "date": "2024-06-07",
    "title": "Attention-based Representation Learning for Time Series with Principal and Residual Space Monitoring",
    "category": "Paper Review",
    "presenter": "Seongjin",
    "url": "https://www.notion.so/ecb8b06cbfeb4a87a0cb280995ada3e4",
    "keywords": [
      "Anomaly Detection",
      "Representation Learning",
      "Attention",
      "time series",
      "residual space"
    ]
  },
  {
    "date": "2024-05-24",
    "title": "ITRANSFORMER: Inverted Transformers Are Effective for Time Series Forecasting (ICLR, 2024)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/ce64ff05edfb418d887814bc3781424b",
    "keywords": [
      "Transformer",
      "time-series forecasting"
    ]
  },
  {
    "date": "2024-04-19",
    "title": "Deep Anomaly Detection with Outlier Exposure (ICLR 2019)",
    "category": "Paper Review",
    "presenter": "강태원",
    "url": "https://www.notion.so/8242cb6b0a3341a3ba81729060c65519",
    "keywords": [
      "Anomaly Detection",
      "outlier exposure"
    ]
  },
  {
    "date": "2024-04-05",
    "title": "Active Domain Adaptation via Clustering Uncertainty-Weighted Embeddings (ICCV 2021)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/53d45668d7a7432db19c834b9255312d",
    "keywords": [
      "Domain adaptation",
      "Active learning"
    ]
  },
  {
    "date": "2024-03-08",
    "title": "ABC: Auxiliary Balanced Classifier for Class-imbalanced Semi-supervised Learning (NeurIPS 2021)",
    "category": "Paper Review",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/daf0cb83b9e448e590e9f97b05ac63df",
    "keywords": [
      "semi-supervised learning",
      "Imbalanced Data",
      "Decoupled Training"
    ]
  },
  {
    "date": "2024-01-26",
    "title": "Neural ordinary differential equations(NeurIPS 2018)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/46372e04c2194c79a6ead65ac7516f6a",
    "keywords": [
      "Neural Differential Equation"
    ]
  },
  {
    "date": "2024-01-12",
    "title": "Moderate Coreset: A Universal Method of Data Selection for Real-world Data-efficient Deep Learning (ICLR 2023)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/b405aaa3164f45108e644c490e701696",
    "keywords": [
      "Coreset selection",
      "Dataset pruning",
      "DeepLearning"
    ]
  },
  {
    "date": "2023-12-29",
    "title": "Modeling Stochastic Variability in Multiband Time-series Data (AJ, 2020)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/6420828128be4a4caf5eaf1e1d69b424",
    "keywords": [
      "Irregular time series",
      "Time Modeling"
    ]
  },
  {
    "date": "2023-12-01",
    "title": "Efficient Parameter-free Clustering Using First Neighbor Relations (CVPR 2019)",
    "category": "Paper Review",
    "presenter": "Chanbeom",
    "url": "https://www.notion.so/21cb9046df9c42949e613aa3362dfde1",
    "keywords": [
      "Clustering"
    ]
  },
  {
    "date": "2023-11-24",
    "title": "SAITS: Self-attention-based imputation for time series (ESWA 2023)",
    "category": "Paper Review",
    "presenter": "Yongmin Kim",
    "url": "https://www.notion.so/d412661c05fa48a3854e1938265cc9d6",
    "keywords": [
      "Irregular time series",
      "Self-attention"
    ]
  },
  {
    "date": "2023-11-13",
    "title": "Towards Total Recall in Industrial Anomaly Detection (CVPR 2022)",
    "category": "Paper Review",
    "presenter": "강태원",
    "url": "https://www.notion.so/aa90edda3406416082be5c6d5b557339",
    "keywords": [
      "Anomaly Detection"
    ]
  },
  {
    "date": "2023-10-13",
    "title": "DCdetector: Dual Attention Contrastive Representation Learning for Time Series Anomaly Detection (KDD 2023)",
    "category": "Paper Review",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/d781095fb55444249782941872b4f779",
    "keywords": [
      "Time-series anomaly detection",
      "Attention",
      "Contrastive learning"
    ]
  },
  {
    "date": "2023-09-22",
    "title": "Domain Generalization for Medical Imaging Classification with Linear-Dependency Regularization (NeurIPS 2020)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/abf6d219d41144c3a7e12ad64a38b5b1",
    "keywords": [
      "DeepLearning",
      "Domain Generalization",
      "Medical Imaging"
    ]
  },
  {
    "date": "2023-09-08",
    "title": "Calibrating Histopathology Image Classifiers Using Label Smoothing (AIME 2022)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/d7a0ceaddd1d475fbd4bbb23a77eda63",
    "keywords": [
      "Label Smoothing",
      "Model Calibration"
    ]
  },
  {
    "date": "2023-09-01",
    "title": "Neural Controlled Differential Equations for Online Prediction Tasks (2022)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/4880a44028114a7484c7431eafb47dbd",
    "keywords": [
      "Neural Differential Equation",
      "Online Prediction"
    ]
  },
  {
    "date": "2023-08-18",
    "title": "Introduction to Gaussian Mixture Model(GMM) & EM Algorithm",
    "category": "Lab Seminar",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/8edbb35e58c84c39a912f006d7e9e12a",
    "keywords": [
      "Gaussian Mixture Model",
      "EM Algorithm",
      "UnsupervisedLearning"
    ]
  },
  {
    "date": "2023-08-11",
    "title": "Deep-CSA: Deep Contrastive Learning for Dynamic Survival Analysis With Competing Risks (JBHI 2022)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/f363a8c064884a2eba9ab2a67c8db2f2",
    "keywords": [
      "Survival Analysis",
      "Contrastive learning",
      "DeepLearning"
    ]
  },
  {
    "date": "2023-07-28",
    "title": "SWAD: Domain Generalization by Seeking Flat Minima (NeurIPS 2021)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/cc8ceca546ec49bb87d3bcf99db31c7e",
    "keywords": [
      "Domain Generalization",
      "optimization"
    ]
  },
  {
    "date": "2023-07-14",
    "title": "SurvLatent ODE: A Neural ODE based time-to-event model with competing risks for longitudinal data improves cancer-associated Venous Thromboembolism (VTE) prediction (PMLR, 2022)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/75b6db7c9ffb4064a7788dd1c2766a06",
    "keywords": [
      "Survival Analysis",
      "Neural Differential Equation"
    ]
  },
  {
    "date": "2023-07-03",
    "title": "Neural Flows: Efficient Alternative to Neural ODEs (NeurIPS 2021)",
    "category": "Paper Review",
    "presenter": "YongKyung Oh",
    "url": "https://www.notion.so/bc06c908cae541e9a9e9932388cc3054",
    "keywords": [
      "Neural Differential Equation",
      "Flow"
    ]
  },
  {
    "date": "2023-06-23",
    "title": "Loyalty Formation for Different Customer Journey Segments (2019)",
    "category": "Paper Review",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/082eb055f16c46329cc0e52147944480",
    "keywords": [
      "Latent Class Analysis",
      "UnsupervisedLearning"
    ]
  },
  {
    "date": "2023-06-09",
    "title": "POEM: Polarization of Embeddings for Domain-Invariant Representations (AAAI 2023)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/7b3ad0f90f9341a3b9dfafef17bf7416",
    "keywords": [
      "Domain Generalization"
    ]
  },
  {
    "date": "2023-06-02",
    "title": "Bidirectional Learning for Domain Adaptation of Semantic Segmentation (CVPR 2019)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/e53d3067cc4141c182013e66c78167e9",
    "keywords": [
      "Domain adaptation",
      "Bidirectional learning"
    ]
  },
  {
    "date": "2023-04-28",
    "title": "Attention Bottlenecks for Multimodal Fusion (NeurIPS 2021)",
    "category": "Paper Review",
    "presenter": "Hyejin Cho",
    "url": "https://www.notion.so/f49d29b3e51c4dc59ecb14ec7089c18f",
    "keywords": [
      "multi-modal learning",
      "Transformer"
    ]
  },
  {
    "date": "2023-04-21",
    "title": "DeepSurv: personalized treatment recommender system using a Cox proportional hazards deep neural network (ICML WCB 2016)",
    "category": "Paper Review",
    "presenter": "Jae Hun Cho",
    "url": "https://www.notion.so/b4dc9b0161c14f7cb2460b51ebf15ebb",
    "keywords": []
  },
  {
    "date": "2023-04-07",
    "title": "(Neural Comput & Applic 2021) One-class graph neural networks for anomaly detection in attributed networks",
    "category": "Paper Review",
    "presenter": "Ji In Kwak",
    "url": "https://www.notion.so/eb06e7e311814e4086a48acdaf49ed98",
    "keywords": [
      "Graph Anomaly Detection",
      "UnsupervisedLearning",
      "One-class classification"
    ]
  },
  {
    "date": "2023-03-31",
    "title": "A Simple Framework for Contrastive Learning of Visual Representations (ICML 2020)",
    "category": "Lab Seminar",
    "presenter": "유지태",
    "url": "https://www.notion.so/d433b50be9f949ff86dc36951387a49f",
    "keywords": [
      "Contrastive learning",
      "visual representation",
      "Self-supervised Learning"
    ]
  },
  {
    "date": "2023-03-17",
    "title": "High-Resolution Image Synthesis With Latent Diffusion Models (CVPR 2022)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/1583405649a3491588ad909c912f12c7",
    "keywords": [
      "Diffusion Model",
      "Text-to-Image",
      "Generative Model"
    ]
  },
  {
    "date": "2023-03-07",
    "title": "Simple and Principled Uncertainty Estimation with Deterministic Deep Learning via Distance Awareness (NeurIPS 2020)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/e6456123f01840a7b13250e9b5521805",
    "keywords": [
      "DeepLearning",
      "Uncertainty Estimation"
    ]
  },
  {
    "date": "2023-03-03",
    "title": "Unsupervised Label Noise Modeling and Loss Correction (ICML 2019)",
    "category": "Paper Review",
    "presenter": "YongKyung Oh",
    "url": "https://www.notion.so/0af52a38cb0e4404b2e5746fcab6580b",
    "keywords": [
      "Noisy label learning"
    ]
  },
  {
    "date": "2023-02-17",
    "title": "EXPLAINABLE DEEP ONE-CLASS CLASSIFICATION (ICLR 2021)",
    "category": "Paper Review",
    "presenter": "유지태",
    "url": "https://www.notion.so/6860c9169b3a4d1baae8e9c00c32c237",
    "keywords": [
      "outlier exposure",
      "Anomaly Detection",
      "XAI"
    ]
  },
  {
    "date": "2023-02-10",
    "title": "Transfusion: Understanding Transfer Learning for Medical Imaging (NeurIPS 2019)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/b0fd0ca6eef7470fbdcb3f239c80a394",
    "keywords": [
      "Medical Imaging",
      "Transfer Learning",
      "XAI"
    ]
  },
  {
    "date": "2023-02-01",
    "title": "Deep Semi-Supervised Anomaly Detection (ICLR 2020)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/57b52b9eac5540bca06ba1bbe2f51a91",
    "keywords": [
      "Anomaly Detection",
      "semi-supervised learning"
    ]
  },
  {
    "date": "2023-01-13",
    "title": "Image Style Transfer Using Convolutional Neural Networks (CVPR 2016)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/f4e420685a4a44af8ab7bf3c71c922ad",
    "keywords": [
      "Style Transfer",
      "CNN",
      "Image Representation"
    ]
  },
  {
    "date": "2022-12-29",
    "title": "Constructing a Control Chart Using Functional Data (Mathematics 2020)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/f6d644e023124cc59c0c186b86c5ac2b",
    "keywords": [
      "Functional Data",
      "Functional depth",
      "ControlChart"
    ]
  },
  {
    "date": "2022-10-28",
    "title": "Conditional score-based diffusion models for probabilistic time series imputation (NeurIPS 2021)",
    "category": "Lab Seminar",
    "presenter": "YongKyung Oh",
    "url": "https://www.notion.so/6cd9b6c0b23b4640bfe57ea80c782c1f",
    "keywords": [
      "Generative Model",
      "Diffusion Model"
    ]
  },
  {
    "date": "2022-10-21",
    "title": "SwinIR: Image Restoration Using Swin Transformer (ICCVW 2021)",
    "category": "Paper Review",
    "presenter": "Byungkook Koo",
    "url": "https://www.notion.so/4b98dd29607e43eaaa422512cca85ef5",
    "keywords": [
      "Image Super Resolution",
      "Swin Transformer",
      "Image Restoration",
      "Vision Transformer"
    ]
  },
  {
    "date": "2022-10-14",
    "title": "End-to-end unsupervised fault detection using a flow based model (RESS 2021)",
    "category": "Paper Review",
    "presenter": "SeungSu Kam",
    "url": "https://www.notion.so/7dd2282ca76541aaa1c98c6e1b2c9e85",
    "keywords": [
      "Normalizing Flow"
    ]
  },
  {
    "date": "2022-10-07",
    "title": "Latent ODE + ODE-GRU/ ODE-LSTM (NeurIPS 2019)",
    "category": "Paper Review",
    "presenter": "",
    "url": "https://www.notion.so/88ec37b018cf4bb8b74d67aea230abed",
    "keywords": [
      "Neural Differential Equation"
    ]
  }
];
