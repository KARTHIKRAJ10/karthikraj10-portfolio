export const NAV_ITEMS = [
  "About",
  "Projects",
  "Demos",
  "Skills",
  "Architecture",
  "Experience",
  "Contact",
];

export interface Project {
  title: string;
  category: string;
  problem: string;
  description: string;
  stack: string[];
  value: string;
  links: { demo?: string; github?: string; casestudy?: string };
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Retail Intelligence Platform",
    category: "Merchandising & Pricing Analytics",
    problem:
      "Retailers lack unified decision systems combining demand signals, price sensitivity, and geo-level incrementality.",
    description:
      "End-to-end platform integrating demand forecasting, price elasticity modeling, customer lifetime estimation, and geo-based incrementality analysis. Medallion architecture with dbt, SQL, and ML pipelines enabling reproducible experimentation and decision-layer simulations.",
    stack: ["Python", "dbt", "SQL", "Scikit-learn", "Power BI", "AWS"],
    value:
      "Enabled data-driven merchandising, pricing, and promotion decisions with measurable lift in forecast accuracy and budget reallocation efficiency.",
    links: { demo: "#", github: "#", casestudy: "#" },
  },
  {
    title: "Ecommerce Intelligence Platform",
    category: "Customer & Revenue Intelligence",
    problem:
      "Ecommerce teams operate with siloed models — recommendations, CLV, churn, and demand run independently without unified orchestration.",
    description:
      "AI intelligence platform serving 200K customers and 10K SKUs. Integrates deep retrieval (Two-Tower), LightGBM ranking, CLV prediction, segmentation, demand forecasting, and uplift modeling within a production-grade MLOps framework.",
    stack: ["Python", "TensorFlow", "LightGBM", "Docker", "CI/CD", "Databricks"],
    value:
      "Improved ranking quality, forecast accuracy, and incremental marketing performance with CFO-legible KPIs translating ML into measurable revenue, retention, and margin impact.",
    links: { demo: "#", github: "#", casestudy: "#" },
  },
  {
    title: "Marketing Mix Modeling Engine",
    category: "Marketing Science",
    problem:
      "Marketing teams cannot quantify the true contribution of each channel to revenue and optimize spend allocation.",
    description:
      "Bayesian MMM framework analyzing channel-level ROI with adstock transformations, saturation curves, and budget optimization. Enables scenario planning for media mix reallocation across digital and offline channels.",
    stack: ["Python", "PyMC", "Statsmodels", "Pandas", "Streamlit"],
    value:
      "Provided marketing leadership with data-backed budget reallocation recommendations improving overall ROAS by identifying under/over-invested channels.",
    links: { github: "#", casestudy: "#" },
  },
  {
    title: "Attribution & Incrementality Analyzer",
    category: "Marketing Measurement",
    problem:
      "Last-click attribution systematically misallocates credit, leading to suboptimal marketing investment decisions.",
    description:
      "Multi-touch attribution and incrementality measurement system comparing Shapley-value, Markov chain, and geo-based causal inference approaches. Includes experiment design frameworks for holdout and synthetic control studies.",
    stack: ["Python", "CausalImpact", "SQL", "Plotly", "Streamlit"],
    value:
      "Enabled marketing teams to shift from heuristic-based to evidence-based attribution, improving campaign ROI measurement accuracy.",
    links: { demo: "#", github: "#" },
  },
  {
    title: "Customer Lifetime Value Predictor",
    category: "Customer Intelligence",
    problem:
      "Businesses treat all customers equally instead of investing proportionally based on predicted long-term value.",
    description:
      "Probabilistic CLV modeling using BG/NBD and Gamma-Gamma frameworks combined with ML-based enrichment. Segments customers into value tiers with actionable retention and upsell strategies.",
    stack: ["Python", "Lifetimes", "XGBoost", "SQL", "Tableau"],
    value:
      "Enabled CRM teams to prioritize high-value customer retention and personalize engagement strategies based on predicted lifetime profitability.",
    links: { github: "#", casestudy: "#" },
  },
  {
    title: "Churn Prediction & Early Warning System",
    category: "Customer Retention Analytics",
    problem:
      "Churn is detected too late — after customers have already disengaged — leaving retention teams reactive instead of proactive.",
    description:
      "ML-powered early warning system using gradient-boosted models with behavioral feature engineering. Monitors engagement velocity, recency patterns, and transaction frequency to flag at-risk customers with lead time for intervention.",
    stack: ["Python", "XGBoost", "SHAP", "Airflow", "PostgreSQL"],
    value:
      "Shifted retention strategy from reactive to predictive, enabling targeted intervention campaigns with measurable reduction in churn rates.",
    links: { github: "#" },
  },
  {
    title: "AI Agent for Business Decision Support",
    category: "LLM / Generative AI",
    problem:
      "Non-technical stakeholders cannot access analytics insights without analyst bottlenecks, slowing decision velocity.",
    description:
      "Conversational AI agent built with LangChain and RAG architecture that answers business questions by retrieving analytics insights, summarizing customer patterns, and recommending actions in natural language.",
    stack: ["Python", "LangChain", "OpenAI", "ChromaDB", "FastAPI", "React"],
    value:
      "Reduced analyst dependency for routine queries, enabling business users to self-serve insights and accelerate decision-making cycles.",
    links: { demo: "#", github: "#", casestudy: "#" },
  },
  {
    title: "Campaign Performance Optimizer",
    category: "Performance Marketing",
    problem:
      "Campaign managers optimize based on surface metrics (CTR, CPC) rather than true incremental business outcomes.",
    description:
      "Automated campaign analytics pipeline connecting ad platform data with downstream conversion and revenue metrics. Applies causal inference to separate organic from paid-driven outcomes and recommends budget shifts.",
    stack: ["Python", "SQL", "Google Analytics", "Power BI", "AWS"],
    value:
      "Enabled performance marketing teams to optimize against true incremental revenue rather than vanity metrics.",
    links: { github: "#" },
  },
];

export interface Demo {
  title: string;
  subtitle: string;
  problem: string;
  description: string;
  interactions: string[];
  stack: string[];
  color: string;
}

export const DEMOS: Demo[] = [
  {
    title: "Marketing Incrementality Lab",
    subtitle: "Interactive Marketing Measurement Simulator",
    problem:
      "Marketing teams struggle to measure true incremental impact of campaigns beyond correlation-based attribution.",
    description:
      "Simulate campaign performance across channels. Compare attribution models (last-click, Shapley, Markov). Explore incremental lift through geo-based experiments. Adjust budget allocation and receive ROI-optimized recommendations grounded in causal measurement.",
    interactions: [
      "Simulate campaign scenarios",
      "Compare attribution models side-by-side",
      "Explore geo-based incrementality",
      "Adjust budget allocation sliders",
      "View ROI recommendations",
      "Understand experiment-based measurement",
    ],
    stack: ["Python", "Streamlit", "CausalImpact", "Plotly", "Pandas"],
    color: "#C8A96E",
  },
  {
    title: "Customer Intelligence Studio",
    subtitle: "AI-Powered Customer Analytics Platform",
    problem:
      "Customer data remains siloed in spreadsheets and dashboards, preventing unified understanding of customer behavior and value.",
    description:
      "Upload or simulate customer data to explore behavioral segmentation, inspect CLV tiers, assess churn risk scores, and receive next-best-action recommendations. Includes LLM-generated persona summaries that translate data into actionable customer narratives.",
    interactions: [
      "Upload or simulate customer data",
      "View behavioral segmentation",
      "Inspect CLV tier distributions",
      "Assess churn risk scores",
      "Get next-best-action recommendations",
      "Generate LLM persona summaries",
    ],
    stack: ["Python", "Streamlit", "Scikit-learn", "OpenAI", "Plotly"],
    color: "#6E9FC8",
  },
];

export const SKILLS: Record<string, string[]> = {
  "Marketing Science": [
    "Attribution Modeling",
    "Marketing Mix Modeling",
    "Incrementality Analysis",
    "A/B Testing",
    "Campaign Optimization",
    "ROAS/CPA Analysis",
    "Media Metrics",
    "Experiment Design",
  ],
  "Machine Learning & AI": [
    "Supervised/Unsupervised ML",
    "LLMs & Prompt Engineering",
    "Feature Engineering",
    "Model Validation",
    "XGBoost / LightGBM",
    "Deep Learning (foundational)",
    "NLP & RAG",
    "MLOps",
  ],
  "Customer Intelligence": [
    "CLV Modeling",
    "Churn Prediction",
    "Customer Segmentation",
    "Behavioral Analytics",
    "Next-Best-Action",
    "CRM Analytics",
    "Persona Development",
    "Cohort Analysis",
  ],
  "Data Engineering": [
    "SQL & dbt",
    "ETL/ELT Pipelines",
    "AWS (S3, EC2, Lambda)",
    "Databricks",
    "Docker & CI/CD",
    "Data Modeling",
    "Data Quality",
    "Medallion Architecture",
  ],
  "Analytics & BI": [
    "Python (Pandas, NumPy)",
    "Statistical Analysis",
    "Power BI & Tableau",
    "GA4 & Web Analytics",
    "Time-Series Forecasting",
    "Exploratory Analysis",
    "KPI Diagnostics",
    "Executive Dashboards",
  ],
};

export interface ArchStep {
  phase: string;
  title: string;
  desc: string;
}

export const ARCHITECTURE_STEPS: ArchStep[] = [
  {
    phase: "01",
    title: "Problem Framing",
    desc: "Translate business questions into measurable analytical objectives. Define success metrics, stakeholders, and decision context.",
  },
  {
    phase: "02",
    title: "Data Ingestion",
    desc: "Connect and integrate data from CRM, campaign platforms, transactional systems, and behavioral sources into unified pipelines.",
  },
  {
    phase: "03",
    title: "Data Modeling",
    desc: "Build medallion-layer architectures with dbt and SQL. Ensure data quality, governance, and reproducibility at every stage.",
  },
  {
    phase: "04",
    title: "Feature Engineering",
    desc: "Create domain-informed features — recency patterns, engagement velocity, channel interactions — that capture business-relevant signals.",
  },
  {
    phase: "05",
    title: "ML / LLM Layer",
    desc: "Train, validate, and deploy models with time-based splits, leakage prevention, and business-aligned evaluation metrics.",
  },
  {
    phase: "06",
    title: "Analytics & Experimentation",
    desc: "Apply causal inference, A/B testing, and incrementality frameworks to separate signal from noise in measurement.",
  },
  {
    phase: "07",
    title: "Application Layer",
    desc: "Build interactive dashboards, simulators, and decision tools that make insights accessible to non-technical stakeholders.",
  },
  {
    phase: "08",
    title: "Deploy & Iterate",
    desc: "Ship with CI/CD, monitor model drift and KPI health, and continuously improve based on feedback and new data.",
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Application Engineer — Analytics & Data Products",
    company: "Neurealm (Formerly Gavs)",
    location: "Chennai, India",
    period: "Nov 2022 – Apr 2023",
    highlights: [
      "Designed scalable marketing analytics pipelines supporting $3M+ annual spend optimization",
      "Built statistical modeling workflows across 0.5M customer interactions",
      "Engineered AWS-based pipelines processing 50M+ records monthly",
      "Delivered executive dashboards for 20+ marketing stakeholders",
    ],
  },
  {
    role: "Data Analyst — Market Research & Customer Analytics",
    company: "The Prink",
    location: "Trichy, India",
    period: "Sep 2020 – Oct 2022",
    highlights: [
      "Built behavioral segmentation models across 10K active customers",
      "Designed A/B testing frameworks for 20+ marketing experiments",
      "Developed predictive models analyzing 25K+ transaction records",
      "Increased qualified lead acquisition by 35% through targeting optimization",
    ],
  },
  {
    role: "Data Analyst",
    company: "Whirldata",
    location: "Chennai, India",
    period: "Feb 2019 – Mar 2020",
    highlights: [
      "Built SQL-driven KPI monitoring across 10+ digital campaigns",
      "Applied anomaly detection reducing reporting discrepancies by 21%",
      "Integrated data across 8 marketing platforms improving data quality by 30%",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Graduate Certificate — IT Business Analysis",
    school: "Conestoga College, Ontario",
    period: "2023 – 2024",
  },
  {
    degree: "B.Eng — Computer Science & Engineering",
    school: "Anna University, Tamil Nadu",
    period: "2014 – 2018",
  },
];
