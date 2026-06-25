// Lab activity, ported from Jekyll _data/activity.yml and _data/seminar.json.
// Recent entries are included here for the home + activity overview; the full
// historical archive is migrated when the dedicated activity pages are built.

// News moved to ./news.ts (server-only, CMS-loaded). This module stays free of
// node:fs so the Client seminar list can keep importing it.
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
    date: "2026-04-07",
    title: "Cherry Blossom Pizza Picnic",
    image: "/assets/activity/Lab_Events/cherry_1.jpg",
  },
  {
    date: "2026-02-27",
    title: "Spring Unity Get-Together",
    image: "/assets/activity/Lab_Events/talk_concert.jpg",
  },
  {
    date: "2025-11-14",
    title: "2025 DA Lab Homecoming",
    image: "/assets/activity/Lab_Events/Homecoming_11_14.jpg",
  },
  {
    date: "2025-11-12",
    title: "CIKM 2025 Poster Presentation",
    image: "/assets/activity/Lab_Events/CIKM_poster_11_12.jpg",
  },
  {
    date: "2025-10-28",
    title: "INFORMS 2025",
    image: "/assets/activity/Lab_Events/INFORMS_10_28.jpg",
  },
  {
    date: "2025-07-11",
    title: "Lab Movie Night",
    image: "/assets/activity/Lab_Events/movie_night_2025.webp",
  },
  {
    date: "2025-04-08",
    title: "Cherry Blossom Picnic",
    image: "/assets/activity/Lab_Events/spring_2025.webp",
  },
  {
    date: "2025-02-20",
    title: "Lab Graduation Ceremony",
    image: "/assets/activity/Lab_Events/graduation_2025.webp",
  },
];

export const seminars: SeminarItem[] = [
  { date: "2026-06-19", title: "Neural Delay Differential Equations", category: "Lab Seminar", presenter: "SeungSu Kam", url: "https://www.notion.so/376046396f7e8088baf2f3b2abcfd642", keywords: ["Neural Differential Equation"] },
  { date: "2026-05-29", title: "A Survey on Concept Drift Adaptation", category: "Paper Review", presenter: "Yongmin Kim", url: "https://www.notion.so/36f046396f7e8017974bfff55bd3618a", keywords: ["Concept Drift", "Adaptation"] },
  { date: "2026-05-22", title: "Intelligent early-warning quality control for electromagnets based on LSTM with Bayesian optimisation and EWMA chart", category: "Lab Seminar", presenter: "Thien Le", url: "https://www.notion.so/366046396f7e80679d94d9db776976f8", keywords: ["Control Chart", "Deep Learning", "LSTM"] },
  { date: "2026-04-24", title: "Can a society of generative agents simulate human behavior and inform public health policy?", category: "Lab Seminar", presenter: "Jihyun Ko", url: "https://www.notion.so/34c046396f7e8073a480e19fff727112", keywords: ["LLM", "Agent-Based Modeling", "Simulation"] },
  { date: "2026-04-10", title: "Are labels informative in semi-supervised learning?", category: "Lab Seminar", presenter: "Heeyoon Lee", url: "https://www.notion.so/2d9046396f7e80669c02d283a2ce0b86", keywords: ["Semi-supervised Learning", "Missing Data", "Image Representation"] },
  { date: "2026-03-27", title: "Deep Learning Longitudinal Survival Analysis with Competing Risk", category: "Lab Seminar", presenter: "SeungSu Kam", url: "https://www.notion.so/32f046396f7e80b6807fe5be4ea9f2d9", keywords: ["Survival Analysis", "Irregular Time Series"] },
  { date: "2026-03-20", title: "A Survey of Uncertainty Estimation Methods on Large Language Models", category: "Lab Seminar", presenter: "Byeonghoon Jeon", url: "https://www.notion.so/308046396f7e80ad84d0db477b870e1d", keywords: ["Uncertainty Estimation", "LLM"] },
  { date: "2026-03-13", title: "IdealTSF: Can Non-Ideal Data Enhance Time Series Forecasting Models?", category: "Lab Seminar", presenter: "Yongmin Kim", url: "https://www.notion.so/322046396f7e8082a345e977cb2f5b61", keywords: ["Optimization", "Forecasting", "Time Series"] },
  { date: "2026-02-20", title: "SensorSCAN: Self-supervised learning and deep clustering for fault diagnosis in chemical processes", category: "Paper Review", presenter: "Jeongwoo Yoo", url: "https://www.notion.so/30d046396f7e8067b1a8fd6e57230a7d", keywords: ["Contrastive Learning", "Anomaly Detection", "Transformer"] },
  { date: "2026-02-13", title: "AutoTimes: Autoregressive Time Series Forecasters via Large Language Models", category: "Lab Seminar", presenter: "Jihyun Ko", url: "https://www.notion.so/308046396f7e80bf8076d85df7673d72", keywords: ["LLM", "Time-Series Forecasting", "Multivariate"] },
  { date: "2026-01-16", title: "Deep Latent Variable Models for Missing Data", category: "Lab Seminar", presenter: "Heeyoon Lee", url: "https://www.notion.so/2ea046396f7e802f9e5dc790c1b362e5", keywords: ["VAE", "Variational Inference", "Imputation"] },
  { date: "2026-01-05", title: "Uncertainty quantification based on conformal prediction for industrial time series with distribution shift", category: "Lab Seminar", presenter: "Byeonghoon Jeon", url: "https://www.notion.so/2a2046396f7e802d9d80e9ded668ea75", keywords: ["Uncertainty Estimation"] },
  { date: "2025-12-15", title: "Reversible instance normalization for accurate time-series forecasting against distribution shift", category: "Paper Review", presenter: "SeungSu Kam", url: "https://www.notion.so/2c4046396f7e806bb025d114b98d780c", keywords: ["Time-Series Forecasting"] },
  { date: "2025-12-08", title: "OIL-AD: An anomaly detection framework for decision-making sequences", category: "Lab Seminar", presenter: "Yongmin Kim", url: "https://www.notion.so/2bc046396f7e806dab28eb0090bf7390", keywords: ["Reinforcement Learning", "Anomaly Detection", "Unsupervised"] },
  { date: "2025-11-24", title: "Survival Models to Estimate User Engagement in Online Experiments", category: "Paper Review", presenter: "Hyejin Cho", url: "https://www.notion.so/2b5046396f7e80238e82e8683189818a", keywords: ["Survival Analysis", "User Engagement"] },
  { date: "2025-11-17", title: "Using Explainable AI to Improve Process Quality: Evidence from Semiconductor Manufacturing", category: "Paper Review", presenter: "Jeongwoo Yoo", url: "https://www.notion.so/2b5046396f7e80fba149cf48245431af", keywords: ["Gradient Boosting", "Quality Monitoring"] },
  { date: "2025-11-03", title: "EconAgent: Large Language Model-Empowered Agents for Simulating Macroeconomic Activities", category: "Lab Seminar", presenter: "Sieun Lee", url: "https://www.notion.so/2a2046396f7e80149abbe62a2cbfc7c2", keywords: ["LLM", "Macroeconomic"] },
  { date: "2025-10-13", title: "Large Language Models can Deliver Accurate and Interpretable Time Series Anomaly Detection", category: "Lab Seminar", presenter: "Jihyun Ko", url: "https://www.notion.so/28c046396f7e80e28a4de0b911e5cf9a", keywords: ["LLM", "Anomaly Detection"] },
  { date: "2025-09-29", title: "An advanced retrieval-augmented generation system for manufacturing quality control", category: "Lab Seminar", presenter: "Seongjin Kim", url: "https://www.notion.so/28c046396f7e8055a688de5b111161f0", keywords: ["LLM", "RAG"] },
  { date: "2025-09-29", title: "Diffusion-based Multivariate Time-Series Imputation", category: "Lab Seminar", presenter: "Sieun Lee", url: "https://www.notion.so/2b5046396f7e8092ac68caa0e06ad697", keywords: ["Imputation", "Diffusion Model"] },
];
