export const profile = {
  name: "Katie Martin",
  role: "Data analyst & software developer",
  lede: "10 years turning data into decisions — now building the dashboards, data pipelines, and apps that make those decisions easier.",
  location: "Hutto, TX",
  availability: "Open to remote",
  email: "katherine.anne.martin711@gmail.com",
  resume:
    "https://drive.google.com/file/d/12h9mW77qHFrYP7Gl7GsRyZk2lQ8vV9RE/view?usp=drivesdk",
  github: "https://github.com/katiemartin711",
  linkedin: "https://www.linkedin.com/in/katie-martin-43628028/",
  hiringNote:
    "Open to full-time opportunities in data analytics, business intelligence, reporting, and frontend/mobile development.",
  about: [
    "I spent 10 years teaching middle school science and social studies — and the whole time, I was doing analytics. In education, we call it data-driven instruction: collecting assessment data, spotting trends, identifying which students need intervention, and building action plans around what the numbers tell us. I've always been the teacher who wanted to visualize the data, not just read a report.",
    "Now I'm making it official. I'm moving into data analytics and software development full-time: taking messy, complex data and turning it into clear visuals, confident decisions, and tools people actually use — from dashboards to mobile apps.",
  ],
  strengths: [
    "A decade of experience using data to drive real outcomes",
    "A passion for visualization — making patterns visible and understandable",
    "Strong communication skills honed from explaining complex ideas to 13-year-olds (and their parents)",
    "A systematic, action-oriented approach: insights are only useful if they lead somewhere",
  ],
};

export const skills: { category: string; tools: string }[] = [
  {
    category: "SQL",
    tools: "PostgreSQL · BigQuery · SQLite — joins, CTEs, aggregations, window functions",
  },
  { category: "Data visualization", tools: "Tableau · Power BI" },
  {
    category: "Spreadsheets",
    tools: "Advanced Excel — SUMIFS/COUNTIFS, dynamic charts",
  },
  {
    category: "Python",
    tools: "pandas · matplotlib · seaborn · Jupyter Notebooks",
  },
  {
    category: "Mobile & frontend",
    tools: "React Native (Expo) · React · TypeScript/JavaScript · Swift · Kotlin",
  },
  {
    category: "Data & testing",
    tools:
      "SQLite · Maestro E2E automation · exploratory/regression testing · Git/GitHub · Jira · CI/CD via GitHub pipelines",
  },
  {
    category: "Core skills",
    tools: "Data storytelling · Pattern recognition · Dashboard design · Action planning",
  },
];

export type Experience = {
  role: string;
  org: string;
  when: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "Athletic Insights · Remote",
    when: "Feb 2025 — Present",
    summary:
      "QA and app development on a mobile fitness app; built user-facing data features on an on-device SQLite database.",
  },
  {
    role: "Software Engineer Contractor",
    org: "Polygrok · Austin, TX",
    when: "Apr 2024 — Feb 2025",
    summary: "",
  },
  {
    role: "Middle School Science Teacher",
    org: "Hutto ISD · Round Rock ISD · Manor ISD",
    when: "Feb 2017 — Present",
    summary:
      "Hutto ISD, Aug 2023–present · Round Rock ISD, Aug 2018–May 2023 · Manor ISD, Feb 2017–May 2018. Ten years of data-driven instruction: assessment analysis, intervention planning, and PLC leadership.",
  },
];

export type Stat = { value: string; label: string };
export type OutLink = { label: string; href: string };
export type Figure = {
  src: string;
  alt: string;
  caption: string;
  still?: string;
};
export type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};
export type Project = {
  id: string;
  number: string;
  title: string;
  kind: string;
  summary: string;
  tags: string[];
  stats: Stat[];
  links: OutLink[];
  sections: Section[];
  figures?: Figure[];
  embedHref?: string;
};

const tableau =
  "https://public.tableau.com/views/telco_churn_dashboard_17879729789630/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";

export const projects: Project[] = [
  {
    id: "telco",
    number: "01",
    title: "Telco Customer Churn & Retention Analysis",
    kind: "Analytics",
    summary:
      "An end-to-end data analytics project examining 7,043 customer records to identify churn drivers, isolate high-risk subscriber segments, and deliver actionable retention strategies using PostgreSQL and Tableau.",
    tags: ["PostgreSQL", "Tableau", "SQL"],
    stats: [
      { value: "26.54%", label: "overall churn" },
      { value: "7,043", label: "subscribers" },
      { value: "49.37%", label: "highest-risk segment" },
    ],
    links: [
      { label: "Tableau dashboard", href: tableau },
      {
        label: "GitHub repository",
        href: "https://github.com/katiemartin711/customer-churn-analysis",
      },
    ],
    embedHref: tableau,
    sections: [
      {
        heading: "Executive summary",
        paragraphs: [
          "Customer churn directly impacts recurring revenue and growth stability in the telecommunications sector. This analysis investigates customer demographics, contract structures, tenure patterns, and service subscriptions to determine why subscribers churn and where targeted retention interventions will yield the highest return on investment.",
        ],
        bullets: [
          "Baseline churn rate: 26.54% overall dataset churn across 7,043 subscribers, representing $16.06M in total historical customer charges.",
          "First-year drop-off: 47.44% of customers in their first year (0–1 year tenure cohort) churn, making early tenure the single critical risk window.",
          "Contract vulnerability: customers on month-to-month contracts experience a 42.71% churn rate compared to just 2.83% for two-year contract holders.",
          "Critical service risk: fiber optic subscribers without tech support exhibit the highest risk profile, reaching a 49.37% churn rate.",
        ],
      },
      {
        heading: "Tech stack & methodology",
        table: {
          headers: ["Project phase", "Tool", "Key execution steps"],
          rows: [
            [
              "Data cleaning & prep",
              "PostgreSQL / DBeaver",
              "Handled nulls in TotalCharges, standardized boolean fields, cast data types, and validated record counts.",
            ],
            [
              "Exploratory data analysis",
              "PostgreSQL",
              "Built SQL aggregated queries to measure overall churn %, revenue impact, tenure cohorts, and multi-variable service intersections.",
            ],
            [
              "Interactive visualization",
              "Tableau Public",
              "Designed a 4-chart executive dashboard with cross-filtering actions, dynamic KPI summaries, and custom risk matrices.",
            ],
            [
              "Version control & docs",
              "Git / GitHub",
              "Documented complete data lineage, reproducible SQL scripts (01_data_cleaning.sql, 02_churn_analysis.sql), and an executive README.",
            ],
          ],
        },
      },
      {
        heading: "Contract type impact",
        paragraphs: [
          "Contract structure is the strongest structural predictor of retention.",
        ],
        bullets: [
          "Month-to-month: 42.71% churn rate",
          "One-year: 11.27% churn rate",
          "Two-year: 2.83% churn rate",
        ],
      },
      {
        heading: "Tenure cohort drop-off",
        paragraphs: ["Churn is heavily front-loaded in the customer lifecycle."],
        bullets: [
          "0–1 year tenure: 47.44% churn rate",
          "1–2 years: 28.71% churn rate",
          "2–4 years: 20.39% churn rate",
          "4–5 years: 14.42% churn rate",
          "5+ years: 6.61% churn rate",
        ],
      },
      {
        heading: "Service risk intersection",
        paragraphs: [
          "Subscribing to fiber optic internet without adding tech support creates the single highest churn segment across the entire customer base (49.37%).",
        ],
        bullets: [
          "Fiber optic + no tech support: 49.37% churn rate",
          "Fiber optic + tech support: 22.63% churn rate",
          "DSL + no tech support: 27.76% churn rate",
          "DSL + tech support: 9.68% churn rate",
        ],
      },
      {
        heading: "Strategic retention recommendations",
        bullets: [
          "Bundle free tech support for fiber subscribers: onboard new fiber optic customers with a complimentary 6-month trial of tech support to mitigate the primary 49.37% churn driver.",
          "First-year onboarding campaigns: deploy proactive customer success check-ins at day 30, 90, and 180 for 0–1 year subscribers to address early service issues before cancellation.",
          "Contract conversion incentives: offer a targeted monthly discount (for example, 10% off) for month-to-month customers who transition to an annual agreement.",
        ],
      },
      {
        heading: "Dashboard",
        paragraphs: [
          "The Tableau executive dashboard supports live exploration. Select a contract type, tenure cohort, or service bar to cross-filter metrics across the board.",
        ],
        bullets: [
          "Dynamic executive KPI header: total customer revenue ($16.06M) and churn percentages that update with the active segment filters.",
          "Contract risk breakdown: customer concentration across month-to-month, one-year, and two-year terms.",
          "Tenure cohort funnel: drop-off rates across five lifecycle stages, from 0–1 year to 5+ years.",
          "Service risk matrix: internet service mapped against tech support to isolate high-risk product combinations.",
        ],
      },
    ],
  },
  {
    id: "coffee",
    number: "02",
    title: "Executive Dashboard: Coffee Shop Business Performance & Operational Intelligence",
    kind: "Analytics",
    summary:
      "An interactive, executive-ready performance dashboard in Google Sheets for a multi-location coffee chain. It unifies raw transactional data across revenue, foot traffic, product categories, and store locations so leadership can see operations in one place.",
    tags: ["Google Sheets", "Pivot tables", "Dashboard design"],
    stats: [
      { value: "$698.8K", label: "total revenue" },
      { value: "149.1K", label: "transactions" },
      { value: "$4.69", label: "average order value" },
    ],
    links: [
      {
        label: "Dashboard & dataset",
        href: "https://docs.google.com/spreadsheets/d/1cldaGKVCtwZV3-jEq3wED90fd8kW3uLiR-rKEC5Nz1g/edit?usp=sharing",
      },
    ],
    figures: [
      {
        src: "images/coffee-dashboard.png",
        alt: "Coffee Shop Sales and Operations executive dashboard showing revenue KPIs, hourly volume, store comparison, category mix, and top menu items.",
        caption:
          "Executive dashboard: revenue, transaction volume, hourly peaks, store comparison, category mix, and top menu items.",
      },
    ],
    sections: [
      {
        heading: "Key features",
        bullets: [
          "KPI header and summary: dynamically tracks top-line metrics — total revenue ($698.8K), transaction volume (149.1K), units sold (214.5K), and average order value ($4.69).",
          "Interactive filtering: linked cross-tab slicers for store location and transaction date update all four visual charts and the summary metrics.",
          "Operational peak analysis: a line chart of hourly transaction flow identifies the morning rush (8 AM–10 AM, peaking near 18K transactions).",
          "Menu performance and product mix: revenue by category (coffee and tea driving 66.7% of sales) alongside a sorted top 10 product ranking by total revenue.",
          "Store performance parity: a comparative bar analysis of transaction count and total revenue across all three branch locations.",
        ],
      },
      {
        heading: "Technical stack & methods",
        bullets: [
          "Data processing and ETL: cleaned and structured raw transactional logs in Google Sheets using helper columns for daypart, day of week, and hour.",
          "Pivot data model: pivot tables on explicit range references (staging_data!A:O), dynamic calculated fields (AOV), and custom sorting thresholds.",
          "UI and design: executive visualization standards — an accessible color palette, gridlines removed, cleaned data labels, and a clear information hierarchy.",
        ],
      },
    ],
  },
  {
    id: "dataco",
    number: "03",
    title: "DataCo Supply Chain & Fulfillment Performance Dashboard",
    kind: "Analytics",
    summary:
      "An executive-facing Power BI project evaluating operational logistics, delivery bottlenecks, and lead-time delays across 180,519 global fulfillment records. A star schema and DAX measures turn raw transaction logs into supply chain intelligence.",
    tags: ["Power BI", "Python", "DAX"],
    stats: [
      { value: "180,519", label: "fulfillment records" },
      { value: "42.72%", label: "on-time delivery" },
      { value: "0%", label: "First Class on-time" },
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/katiemartin711/DataCo-SupplyChain-PowerBI",
      },
      {
        label: "Kaggle dataset",
        href: "https://www.kaggle.com/datasets/shashwatwork/dataco-smart-supply-chain-for-big-data-analysis",
      },
    ],
    figures: [
      {
        src: "images/dataco-tour.gif",
        still: "images/dataco-preview.png",
        alt: "Animated tour of the DataCo supply chain Power BI dashboard, cross-filtering shipping modes and regional performance.",
        caption:
          "Dashboard tour: cross-filtering across shipping modes, the regional matrix, and KPI cards. A still frame is shown when reduced motion is on.",
      },
    ],
    sections: [
      {
        heading: "Operational insights",
        bullets: [
          "Systemic delivery delays: global on-time delivery sits at 42.72%, highlighting widespread fulfillment constraints.",
          "First Class expedited breakdown: First Class shipping exhibits a 0.00% on-time rate — a complete failure of the premium expedited tier.",
          "Primary geographic bottleneck: Central Africa is the highest-risk regional market, with the lowest on-time rate (39.30%) and severe average delivery delays.",
          "Early staging trends: early 2015 orders arrived an average of 2 days ahead of schedule, which affects warehouse capacity.",
        ],
      },
      {
        heading: "Technical architecture",
        bullets: [
          "Data transformation: Python (pandas, Jupyter Notebook) for schema standardization, missing-value handling, and date offset calculations.",
          "Data modeling: a star schema linking a custom Dim_Date table to the DataCo_Cleaned_SupplyChain fact table in a one-to-many relationship.",
          "DAX: custom metrics for Total Sales, Total Orders, OTD Rate %, and Avg Delay Days.",
          "Visualization: Power BI Desktop with object locking, a custom color hierarchy, dynamic cross-filtering, and customized tooltips.",
        ],
      },
    ],
  },
  {
    id: "ketokind",
    number: "04",
    title: "KetoKind — Keto & Carnivore Diet Coach",
    kind: "Software",
    summary:
      "A keto and carnivore diet logging app for iOS and Android. The headline feature is plain-English meal logging: type what you ate instead of searching a food database.",
    tags: ["React Native", "Expo", "TypeScript", "SQLite"],
    stats: [
      { value: "On-device", label: "SQLite, no account" },
      { value: "iOS & Android", label: "in beta" },
      { value: "Local", label: "reminders & export" },
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/katiemartin711/KetoKind",
      },
    ],
    figures: [
      {
        src: "images/ketokind-dashboard.jpg",
        alt: "KetoKind dashboard on a phone, showing a two-year carnivore milestone, logging streak, and quick-add buttons for meals, medications, and symptoms.",
        caption:
          "Dashboard — daily streaks, meals, meds, and symptoms at a glance, plus quick-add actions.",
      },
      {
        src: "images/ketokind-profile.jpg",
        alt: "KetoKind profile screen showing diet type choices and guiding principles for the selected plan.",
        caption: "Profile — diet type selection with guiding principles for each plan.",
      },
      {
        src: "images/ketokind-ai-coach.jpg",
        alt: "KetoKind AI Coach screen with a coaching prompt preview and a control to copy the prompt plus recent logs.",
        caption:
          "AI Coach — one-tap export of the coaching prompt plus 30 days of logs. Data stays on the device until it is shared.",
      },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Most food-logging apps make you search a database for every ingredient. KetoKind flips that: you just type what you ate in plain English. It is built for people eating keto or carnivore who want fast logging without barcode scans and database lookups.",
        ],
      },
      {
        heading: "Tech stack",
        table: {
          headers: ["Layer", "Technology"],
          rows: [
            ["App framework", "React Native (Expo), TypeScript"],
            ["Database", "SQLite (on-device — private and fully offline-capable)"],
            ["Notifications", "expo-notifications (local scheduling)"],
            ["Testing", "Beta-tested with realistic data via Expo Go"],
          ],
        },
      },
      {
        heading: "Key features",
        bullets: [
          "Plain-English meal logging — type what you ate; no food-database search required.",
          "Smart reminders — a daily nudge (default 8pm) only fires when nothing has been logged that day. Users can change the time, add extra daily reminders, and toggle sound and badge.",
          "Trends screen — drill down into eating patterns over time.",
          "Log and Profile screens — view, edit, and delete logged meals.",
          "In-app privacy policy, with a one-time Pro unlock planned (no subscriptions).",
        ],
      },
      {
        heading: "Engineering notes",
        bullets: [
          "Reminder scheduling re-reconciles on app launch, when the app returns to the foreground, and after log changes, so nudges never fire stale.",
          "Currently in beta testing, targeting an iOS and Android release.",
        ],
      },
    ],
  },
  {
    id: "roaring-market",
    number: "05",
    title: "The Roaring Market — 1920s Stock Market Simulation",
    kind: "Software",
    summary:
      "A classroom stock-market simulation set in the Roaring Twenties. Students start with $100, trade through yearly newspaper events from 1920–1929, experiment with margin buying, and live through the 1929 crash — then take home a printable certificate.",
    tags: ["React", "JavaScript", "GitHub Pages"],
    stats: [
      { value: "$100", label: "starting cash" },
      { value: "1920–1929", label: "playable years" },
      { value: "1 file", label: "no install" },
    ],
    links: [
      {
        label: "Play the game",
        href: "https://katiemartin711.github.io/StockMarket1920Project/",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/katiemartin711/StockMarket1920Project",
      },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Built for classroom use, The Roaring Market turns the 1920s stock market into a playable lesson. Each year opens with a newspaper of era headlines, then a trading window: students buy and sell stocks starting from $100, and can buy on margin — borrowing up to $100 at 6% yearly interest to amplify their gains and losses. In 1929 the market crashes and open margin positions face forced settlement. The whole game ships as a single HTML file that runs fully offline: no accounts, no cloud, all data stays in the browser's localStorage. Students finish with a printable certificate and can copy or email their results to their teacher.",
        ],
      },
      {
        heading: "Tech stack",
        table: {
          headers: ["Layer", "Technology"],
          rows: [
            [
              "App framework",
              "React 18 (UMD) + Babel standalone via CDN — single HTML file, no build step",
            ],
            ["Language", "JavaScript (JSX transformed in the browser)"],
            ["Data", "localStorage — fully offline, no backend or accounts"],
            ["Sharing", "Printable completion certificate; copy or email results to a teacher"],
          ],
        },
      },
      {
        heading: "Key features",
        bullets: [
          "Yearly newspaper, 1920–1929 — era headlines set the scene before each trading window.",
          "Stock trading — start with $100 and buy or sell through the decade.",
          "Margin buying — borrow up to $100 at 6% yearly interest.",
          "1929 crash — the market collapses; open margin positions face forced margin-call settlement.",
          "Printable certificate — students get a completion certificate with their final results.",
          "Copy or email results — send results straight to the teacher.",
          "Zero-install and offline — one file runs anywhere; nothing to set up.",
        ],
      },
      {
        heading: "Engineering notes",
        bullets: [
          "The entire game is a single self-contained HTML file (React UMD + Babel via CDN), so a teacher can open and run it with no tooling.",
          "All game state persists in localStorage — no server, no accounts, no data collection.",
          "Hosted on GitHub Pages, so teachers can share the live link directly with students.",
        ],
      },
    ],
  },
];
