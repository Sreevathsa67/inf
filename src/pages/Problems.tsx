import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import {
  Bot, Users, Cloud, Shield, Leaf, Search, Zap, Map, Brain, Eye,
  AlertTriangle, Cpu, BookOpen, Truck, Calendar, Database, Building,
  TrendingUp, Globe, GraduationCap, Droplets, Sun, Wind, Recycle,
  TreePine, Activity, Heart, DollarSign, Sprout, FlaskConical, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// ─── Theme 1: Agentic AI & Autonomous Systems ──────────────────────────────
const agenticProblems = [
  {
    id: 1,
    title: "Autonomous Food Waste Prediction & Redistribution Agent",
    description:
      "Restaurants and supermarkets waste large amounts of food due to inaccurate demand prediction. Build an agent that predicts food demand, detects surplus food automatically, and connects vendors with NGOs or food banks for redistribution.",
    objectives: [
      "Predict food demand using historical sales, weather, and seasonal trends",
      "Recommend optimal preparation quantities",
      "Detect surplus food automatically",
      "Connect vendors with NGOs or food banks for redistribution",
    ],
    icon: Leaf,
    source: "Inspired from Smart India Hackathon – Agriculture, FoodTech & Rural Development Domain, 2022",
  },
  {
    id: 2,
    title: "Multi-Agent Heritage Crowd Flow Optimizer",
    description:
      "Tourist attractions frequently become overcrowded, causing safety risks. Develop a multi-agent system to analyze visitor data, detect crowd density hotspots, and provide real-time crowd balancing suggestions.",
    objectives: [
      "Analyze historical or simulated visitor data",
      "Detect crowd density hotspots",
      "Recommend alternate routes or attractions",
      "Provide real-time crowd balancing suggestions",
    ],
    icon: Map,
    source: "Inspired from Smart India Hackathon – Heritage & Culture Domain, 2022",
  },
  {
    id: 3,
    title: "Autonomous Cloud Cost Negotiation Agent",
    description:
      "Companies overspend on cloud resources due to inefficient allocation. Build an agent that analyzes cloud usage logs, predicts resource demand, and generates automated cost optimization reports.",
    objectives: [
      "Analyze cloud usage logs",
      "Predict future resource demand",
      "Recommend optimized instance selection and scaling strategies",
      "Generate automated cost optimization reports",
    ],
    icon: Cloud,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2023",
  },
  {
    id: 4,
    title: "Autonomous Event Safety Monitoring System",
    description:
      "Large public gatherings face risks due to uncontrolled crowd density. Build a system that analyzes crowd movement, predicts congestion zones, and recommends crowd management strategies in real time.",
    objectives: [
      "Analyze crowd movement patterns",
      "Predict congestion zones",
      "Generate safety alerts",
      "Recommend crowd management strategies",
    ],
    icon: Shield,
    source: "Inspired from Smart India Hackathon – Disaster Management Domain, 2023",
  },
  {
    id: 5,
    title: "Autonomous Farmer Decision Intelligence Agent",
    description:
      "Farmers lack integrated insights combining weather, soil, and market information. Build an agent that recommends optimal crop selection and generates irrigation and harvest recommendations.",
    objectives: [
      "Analyze weather and soil datasets",
      "Recommend optimal crop selection",
      "Generate irrigation and harvest recommendations",
      "Predict crop yield trends",
    ],
    icon: Sprout,
    source: "Inspired from Smart India Hackathon – Agriculture, FoodTech & Rural Development Domain, 2023",
  },
  {
    id: 6,
    title: "AI Agent for Deepfake Detection and Trust Scoring",
    description:
      "Deepfake media spreads misinformation and impersonation threats. Build an AI agent that detects manipulated video or audio, generates authenticity confidence scores, and provides verification reports.",
    objectives: [
      "Detect manipulated video or audio",
      "Generate authenticity confidence scores",
      "Highlight suspicious regions in media",
      "Provide verification reports",
    ],
    icon: Eye,
    source: "Inspired from Smart India Hackathon – Blockchain & Cybersecurity Domain, 2024",
  },
  {
    id: 7,
    title: "Autonomous Insider Threat Detection System",
    description:
      "Organizations face security risks from internal misuse of data. Build a system that learns normal employee activity patterns, detects unusual access behavior, and recommends security mitigation steps.",
    objectives: [
      "Learn normal employee activity patterns",
      "Detect unusual access behavior",
      "Generate anomaly alerts",
      "Recommend security mitigation steps",
    ],
    icon: Shield,
    source: "Inspired from Smart India Hackathon – Blockchain & Cybersecurity Domain, 2023",
  },
  {
    id: 8,
    title: "Personal Digital Footprint Risk Guardian",
    description:
      "Users unknowingly expose personal information across online platforms. Build an agent that scans publicly available user data, detects sensitive information exposure, and recommends privacy protection steps.",
    objectives: [
      "Scan publicly available user data",
      "Detect sensitive information exposure",
      "Provide privacy risk alerts",
      "Recommend privacy protection steps",
    ],
    icon: AlertTriangle,
    source: "Inspired from Smart India Hackathon – Blockchain & Cybersecurity Domain, 2024",
  },
  {
    id: 9,
    title: "Multi-Agent Disaster Response Coordinator",
    description:
      "Emergency teams often lack coordinated situational awareness during disasters. Build a multi-agent system that collects disaster information, identifies affected areas, and optimizes emergency resource allocation.",
    objectives: [
      "Collect disaster information from multiple datasets",
      "Identify affected areas",
      "Recommend evacuation routes",
      "Optimize emergency resource allocation",
    ],
    icon: AlertTriangle,
    source: "Inspired from Smart India Hackathon – Disaster Management Domain, 2022",
  },
  {
    id: 10,
    title: "Autonomous Cyber Defense Agent",
    description:
      "Cyberattacks evolve faster than manual response systems. Build an autonomous agent that analyzes network activity logs, detects abnormal patterns, predicts potential attack paths, and recommends mitigation strategies.",
    objectives: [
      "Analyze network activity logs",
      "Detect abnormal patterns",
      "Predict potential attack paths",
      "Recommend automated mitigation strategies",
    ],
    icon: Cpu,
    source: "Inspired from Smart India Hackathon – Blockchain & Cybersecurity Domain, 2023",
  },
  {
    id: 11,
    title: "Government Scheme Navigation AI Agent",
    description:
      "Citizens struggle to identify relevant government welfare schemes. Build an agent that analyzes user eligibility, recommends suitable government schemes, and tracks application progress.",
    objectives: [
      "Analyze user profile and eligibility",
      "Recommend suitable government schemes",
      "Provide application guidance",
      "Track scheme application progress",
    ],
    icon: Globe,
    source: "Inspired from Smart India Hackathon – Smart Automation (E-Governance) Domain, 2022",
  },
  {
    id: 12,
    title: "Autonomous Energy Optimization Agent",
    description:
      "Buildings consume electricity inefficiently due to lack of usage insights. Build an agent that analyzes energy consumption data, detects wasteful usage patterns, and forecasts future energy demand.",
    objectives: [
      "Analyze energy consumption data",
      "Detect wasteful usage patterns",
      "Recommend energy saving strategies",
      "Forecast future energy demand",
    ],
    icon: Zap,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2023",
  },
  {
    id: 13,
    title: "AI Research Gap Discovery System",
    description:
      "Researchers struggle to identify unexplored research areas. Build a system that analyzes research papers and patents, detects trending topics, and recommends potential research ideas.",
    objectives: [
      "Analyze research papers and patents",
      "Detect trending research topics",
      "Identify unexplored research gaps",
      "Recommend potential research ideas",
    ],
    icon: Search,
    source: "Inspired from Smart India Hackathon – Smart Education Domain, 2023",
  },
  {
    id: 14,
    title: "Autonomous Meeting Intelligence Agent",
    description:
      "Important decisions made in meetings are often poorly documented. Build an agent that transcribes meeting conversations, extracts key decisions, assigns tasks automatically, and tracks completion progress.",
    objectives: [
      "Transcribe meeting conversations",
      "Extract key decisions and action items",
      "Assign tasks automatically",
      "Track task completion progress",
    ],
    icon: Calendar,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2022",
  },
  {
    id: 15,
    title: "Smart Road Accident Detection & Emergency Dispatch Agent",
    description:
      "Emergency services often receive delayed accident reports. Build a system that analyzes traffic video datasets, detects accident events, identifies accident location, and automatically notifies emergency responders.",
    objectives: [
      "Analyze traffic video datasets",
      "Detect accident events",
      "Identify accident location",
      "Automatically notify emergency responders",
    ],
    icon: AlertTriangle,
    source: "Inspired from Smart India Hackathon – Smart Vehicles / Transportation Domain, 2023",
  },
  {
    id: 16,
    title: "Personal Autonomous Life Management Agent",
    description:
      "Individuals spend significant time organizing daily activities. Build an agent that manages personal schedules, detects scheduling conflicts, and provides reminders and task prioritization.",
    objectives: [
      "Manage personal schedules",
      "Detect scheduling conflicts",
      "Recommend optimized daily plans",
      "Provide reminders and task prioritization",
    ],
    icon: Users,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2022",
  },
  {
    id: 17,
    title: "Autonomous Enterprise Knowledge Retrieval Agent",
    description:
      "Employees waste time searching for internal company information. Build an agent that indexes enterprise knowledge documents, answers employee queries, and recommends related knowledge resources.",
    objectives: [
      "Index enterprise knowledge documents",
      "Answer employee queries",
      "Summarize relevant documents",
      "Recommend related knowledge resources",
    ],
    icon: Database,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2023",
  },
  {
    id: 18,
    title: "Autonomous Urban Infrastructure Monitoring Agent",
    description:
      "Urban issues like potholes and broken lights often go unnoticed. Build an agent that analyzes city images or complaint data, detects infrastructure problems, and generates alerts for authorities.",
    objectives: [
      "Analyze city images or complaint data",
      "Detect infrastructure problems",
      "Prioritize repair tasks",
      "Generate alerts for authorities",
    ],
    icon: Building,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2024",
  },
  {
    id: 19,
    title: "Future Trend Discovery AI Agent",
    description:
      "Emerging technological trends are difficult to identify. Build an agent that analyzes research papers, patents, and startup data to detect emerging technologies and generate future trend insights.",
    objectives: [
      "Analyze research papers and patents",
      "Monitor startup and news data",
      "Detect emerging technologies",
      "Generate future trend insights",
    ],
    icon: TrendingUp,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2023",
  },
  {
    id: 20,
    title: "Supply Chain Disruption Prediction Agent",
    description:
      "Supply chains frequently face disruptions from unpredictable events. Build an agent that analyzes logistics and weather data, predicts disruption risks, and provides supply chain risk alerts.",
    objectives: [
      "Analyze logistics and weather data",
      "Predict disruption risks",
      "Recommend alternate routing strategies",
      "Provide supply chain risk alerts",
    ],
    icon: Truck,
    source: "Inspired from Smart India Hackathon – Transportation & Logistics Domain, 2022",
  },
  {
    id: 21,
    title: "AI Career Skill Recommendation Agent",
    description:
      "Students struggle to identify skills required for future careers. Build an agent that analyzes job market datasets, identifies trending skills, and recommends personalized skill development paths.",
    objectives: [
      "Analyze job market datasets",
      "Identify trending skills",
      "Recommend personalized skill development paths",
      "Suggest learning resources",
    ],
    icon: GraduationCap,
    source: "Inspired from Smart India Hackathon – Smart Education Domain, 2024",
  },
  {
    id: 22,
    title: "Autonomous Learning Path Generator",
    description:
      "Learners feel overwhelmed when starting new fields. Build an agent that analyzes learner goals, generates personalized learning roadmaps, and recommends relevant courses and resources.",
    objectives: [
      "Analyze learner goals",
      "Generate personalized learning roadmap",
      "Adapt learning path based on progress",
      "Recommend relevant courses and resources",
    ],
    icon: BookOpen,
    source: "Inspired from Smart India Hackathon – Smart Education Domain, 2023",
  },
  {
    id: 23,
    title: "Smart Irrigation Decision Agent",
    description:
      "Water is often wasted due to inefficient irrigation planning. Build an agent that analyzes soil and weather datasets, predicts irrigation requirements, and generates optimized irrigation schedules.",
    objectives: [
      "Analyze soil and weather datasets",
      "Predict irrigation requirements",
      "Generate optimized irrigation schedules",
      "Reduce water consumption",
    ],
    icon: Droplets,
    source: "Inspired from Smart India Hackathon – Agriculture, FoodTech & Rural Development Domain, 2022",
  },
  {
    id: 24,
    title: "AI Tutor for Real-Time Student Learning Support",
    description:
      "Teachers cannot provide personalized guidance to every student. Build an AI tutor that analyzes student performance data, detects learning gaps, and recommends practice exercises.",
    objectives: [
      "Analyze student performance data",
      "Detect learning gaps",
      "Provide personalized explanations",
      "Recommend practice exercises",
    ],
    icon: Brain,
    source: "Inspired from Smart India Hackathon – Smart Education Domain, 2023",
  },
  {
    id: 25,
    title: "AI Startup Feasibility Analyzer",
    description:
      "Entrepreneurs struggle to evaluate startup idea viability. Build an agent that analyzes market trends and competitors, estimates potential demand, and provides risk assessment insights.",
    objectives: [
      "Analyze market trends and competitors",
      "Estimate potential demand",
      "Generate feasibility reports",
      "Provide risk assessment insights",
    ],
    icon: TrendingUp,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2024",
  },
];

// ─── Theme 2: Sustainable Development Goals ───────────────────────────────
const sdgProblems = [
  {
    id: 1,
    title: "AI Microfinance Credit Scoring for the Unbanked",
    description:
      "Millions of individuals lack formal credit history and cannot access financial services. Build an AI system that analyzes alternative financial datasets and provides explainable credit risk assessments.",
    objectives: [
      "Analyze alternative financial datasets (mobile payments, utility payments)",
      "Generate AI-based credit scores",
      "Provide explainable credit risk assessments",
      "Help microfinance institutions identify eligible borrowers",
    ],
    icon: DollarSign,
    source: "Inspired from Smart India Hackathon – FinTech Domain, 2023",
  },
  {
    id: 2,
    title: "Crop Yield Prediction and Farmer Advisory Platform",
    description:
      "Farmers face uncertainty in predicting crop yields and market demand. Build a platform that analyzes historical weather and soil datasets and provides crop planning recommendations.",
    objectives: [
      "Analyze historical weather and soil datasets",
      "Predict crop yield for different crops",
      "Provide crop planning recommendations",
      "Generate advisory insights for farmers",
    ],
    icon: Sprout,
    source: "Inspired from Smart India Hackathon – Agriculture, FoodTech & Rural Development Domain, 2024",
  },
  {
    id: 3,
    title: "AI Crop Disease Early Warning System",
    description:
      "Crop diseases often spread before farmers detect them. Build a system that identifies crop diseases from plant images, analyzes weather conditions for disease risk, and recommends treatment and prevention strategies.",
    objectives: [
      "Identify crop diseases from plant images",
      "Analyze weather conditions for disease risk",
      "Predict potential outbreaks",
      "Recommend treatment and prevention strategies",
    ],
    icon: Leaf,
    source: "Inspired from Smart India Hackathon – Agriculture, FoodTech & Rural Development Domain, 2022",
  },
  {
    id: 4,
    title: "Food Supply Chain Waste Reduction Platform",
    description:
      "Food waste occurs due to inefficient storage and logistics. Build a platform that predicts spoilage risk, optimizes food distribution routes, and matches surplus food with NGOs or local markets.",
    objectives: [
      "Predict spoilage risk using supply chain data",
      "Optimize food distribution routes",
      "Match surplus food with NGOs or local markets",
      "Generate analytics on food waste patterns",
    ],
    icon: Recycle,
    source: "Inspired from Smart India Hackathon – Transportation & Logistics Domain, 2023",
  },
  {
    id: 5,
    title: "Urban Nutrition Accessibility Mapping Tool",
    description:
      "Many urban areas lack access to affordable nutritious food. Build a tool that maps food deserts using city datasets and recommends optimal locations for food programs.",
    objectives: [
      "Map food deserts using city datasets",
      "Analyze accessibility to grocery stores and markets",
      "Recommend optimal locations for food programs",
      "Provide insights for policymakers",
    ],
    icon: Map,
    source: "Inspired from Smart India Hackathon – Healthcare / Social Development Theme, 2024",
  },
  {
    id: 6,
    title: "AI Telemedicine Access Optimizer",
    description:
      "Rural communities struggle to access specialized healthcare. Build a system that analyzes patient demand and doctor availability, prioritizes telemedicine consultations, and improves healthcare accessibility.",
    objectives: [
      "Analyze patient demand and doctor availability",
      "Prioritize telemedicine consultations",
      "Recommend optimal doctor allocation",
      "Improve healthcare accessibility",
    ],
    icon: Heart,
    source: "Inspired from Smart India Hackathon – MedTech / BioTech / HealthTech Domain, 2022",
  },
  {
    id: 7,
    title: "Predictive Public Health Surveillance System",
    description:
      "Disease outbreaks are often detected too late. Build a system that analyzes health datasets and hospital records, detects unusual disease patterns, predicts outbreak risks, and generates alerts for health authorities.",
    objectives: [
      "Analyze health datasets and hospital records",
      "Detect unusual disease patterns",
      "Predict outbreak risks",
      "Generate alerts for health authorities",
    ],
    icon: Activity,
    source: "Inspired from Smart India Hackathon – MedTech / BioTech / HealthTech Domain, 2023",
  },
  {
    id: 8,
    title: "AI Mental Health Support Chat System",
    description:
      "Mental health support services are limited in many regions. Build a conversational AI that provides emotional support, detects distress signals, and recommends professional resources.",
    objectives: [
      "Provide conversational emotional support",
      "Detect distress signals in conversations",
      "Recommend professional resources",
      "Generate mental health trend insights",
    ],
    icon: Brain,
    source: "Inspired from Smart India Hackathon – MedTech / BioTech / HealthTech Domain, 2023",
  },
  {
    id: 9,
    title: "Smart Learning Gap Detection Platform",
    description:
      "Teachers struggle to identify learning gaps in large classrooms. Build a platform that analyzes student performance data, detects weak concepts, and generates personalized learning recommendations.",
    objectives: [
      "Analyze student performance data",
      "Detect weak concepts",
      "Generate personalized learning recommendations",
      "Track student progress over time",
    ],
    icon: GraduationCap,
    source: "Inspired from Smart India Hackathon – Smart Education Domain, 2022",
  },
  {
    id: 10,
    title: "AI Career Guidance Platform for Rural Students",
    description:
      "Students in rural areas lack career awareness and guidance. Build a platform that analyzes job market datasets, identifies in-demand skills, and recommends suitable career paths.",
    objectives: [
      "Analyze job market datasets",
      "Identify in-demand skills",
      "Recommend suitable career paths",
      "Provide learning resource suggestions",
    ],
    icon: BookOpen,
    source: "Inspired from Smart India Hackathon – Smart Education Domain, 2023",
  },
  {
    id: 11,
    title: "AI System for Detecting Gender Bias in Hiring",
    description:
      "Hiring processes may contain unconscious gender bias. Build a system that analyzes recruitment datasets, detects bias patterns in hiring decisions, and recommends unbiased hiring practices.",
    objectives: [
      "Analyze recruitment datasets",
      "Detect bias patterns in hiring decisions",
      "Generate fairness metrics",
      "Recommend unbiased hiring practices",
    ],
    icon: Users,
    source: "Inspired from Smart India Hackathon – Smart Automation Domain, 2024",
  },
  {
    id: 12,
    title: "Clean Water Access Risk Prediction Platform",
    description:
      "Communities may lose access to safe drinking water due to contamination. Build a platform that analyzes water quality datasets, detects contamination trends, and generates early warning alerts.",
    objectives: [
      "Analyze water quality datasets",
      "Detect contamination trends",
      "Predict high-risk areas",
      "Generate early warning alerts",
    ],
    icon: Droplets,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2023",
  },
  {
    id: 13,
    title: "AI Water Consumption Optimization Tool",
    description:
      "Water resources are wasted due to inefficient consumption patterns. Build a tool that analyzes household water usage, detects abnormal consumption, and suggests conservation strategies.",
    objectives: [
      "Analyze household water usage",
      "Detect abnormal consumption",
      "Suggest conservation strategies",
      "Generate water usage insights",
    ],
    icon: Droplets,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2022",
  },
  {
    id: 14,
    title: "Renewable Energy Production Forecasting System",
    description:
      "Renewable energy output fluctuates unpredictably. Build a system that analyzes weather datasets, predicts solar or wind energy generation, and assists energy grid planning.",
    objectives: [
      "Analyze weather datasets",
      "Predict solar or wind energy generation",
      "Generate production forecasts",
      "Assist energy grid planning",
    ],
    icon: Sun,
    source: "Inspired from Smart India Hackathon – Renewable / Sustainable Energy Domain, 2023",
  },
  {
    id: 15,
    title: "Community Energy Sharing Optimization Platform",
    description:
      "Households with renewable energy cannot efficiently share surplus power. Build a platform that analyzes local energy production and consumption, optimizes sharing, and improves local energy efficiency.",
    objectives: [
      "Analyze local energy production and consumption",
      "Optimize energy sharing among households",
      "Predict demand fluctuations",
      "Improve local energy efficiency",
    ],
    icon: Wind,
    source: "Inspired from Smart India Hackathon – Renewable / Sustainable Energy Domain, 2024",
  },
  {
    id: 16,
    title: "AI-Based Sustainable Transportation Planner",
    description:
      "Urban transportation systems cause congestion and pollution. Build a planner that analyzes city traffic datasets, predicts congestion hotspots, and suggests sustainable mobility strategies.",
    objectives: [
      "Analyze city traffic datasets",
      "Predict congestion hotspots",
      "Recommend optimized public transport routes",
      "Suggest sustainable mobility strategies",
    ],
    icon: Truck,
    source: "Inspired from Smart India Hackathon – Smart Vehicles / Transportation Domain, 2023",
  },
  {
    id: 17,
    title: "Smart Waste Collection Route Optimizer",
    description:
      "Cities face inefficiencies in waste collection logistics. Build a system that analyzes waste generation patterns, optimizes garbage collection routes, and reduces fuel consumption.",
    objectives: [
      "Analyze waste generation patterns",
      "Optimize garbage collection routes",
      "Reduce fuel consumption",
      "Improve waste management efficiency",
    ],
    icon: Recycle,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2022",
  },
  {
    id: 18,
    title: "Recycling Material Classification AI",
    description:
      "Manual sorting of recyclable materials is inefficient. Build an AI that analyzes images of recyclable materials, classifies them using computer vision, and assists automated sorting systems.",
    objectives: [
      "Analyze images of recyclable materials",
      "Classify materials using computer vision",
      "Assist automated sorting systems",
      "Improve recycling efficiency",
    ],
    icon: FlaskConical,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2023",
  },
  {
    id: 19,
    title: "Air Pollution Prediction and Mitigation Platform",
    description:
      "Cities struggle to anticipate harmful air pollution events. Build a platform that analyzes air quality datasets, predicts pollution levels, identifies pollution sources, and recommends mitigation strategies.",
    objectives: [
      "Analyze air quality datasets",
      "Predict pollution levels",
      "Identify pollution sources",
      "Recommend mitigation strategies",
    ],
    icon: Wind,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2022",
  },
  {
    id: 20,
    title: "Urban Heat Island Prediction Tool",
    description:
      "Urban areas experience higher temperatures due to dense infrastructure. Build a tool that analyzes satellite and climate datasets, detects urban heat hotspots, and recommends urban cooling strategies.",
    objectives: [
      "Analyze satellite and climate datasets",
      "Detect urban heat hotspots",
      "Generate heat risk maps",
      "Recommend urban cooling strategies",
    ],
    icon: Sun,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2024",
  },
  {
    id: 21,
    title: "AI Flood Risk Prediction Platform",
    description:
      "Floods cause significant damage due to delayed warnings. Build a platform that analyzes rainfall and terrain datasets, predicts flood risk zones, and recommends evacuation strategies.",
    objectives: [
      "Analyze rainfall and terrain datasets",
      "Predict flood risk zones",
      "Generate early warning alerts",
      "Recommend evacuation strategies",
    ],
    icon: AlertTriangle,
    source: "Inspired from Smart India Hackathon – Disaster Management Domain, 2023",
  },
  {
    id: 22,
    title: "Wildlife Poaching Detection System",
    description:
      "Illegal poaching threatens wildlife populations. Build a system that analyzes wildlife movement datasets, detects suspicious activity patterns, and generates alerts for conservation authorities.",
    objectives: [
      "Analyze wildlife movement datasets",
      "Detect suspicious activity patterns",
      "Generate alerts for conservation authorities",
      "Support wildlife protection efforts",
    ],
    icon: TreePine,
    source: "Inspired from Smart India Hackathon – Environmental / Wildlife Conservation Theme, 2022",
  },
  {
    id: 23,
    title: "Deforestation Monitoring Platform",
    description:
      "Forest loss is difficult to track in real time. Build a platform that analyzes satellite imagery, detects deforestation activities, and generates environmental impact insights.",
    objectives: [
      "Analyze satellite imagery",
      "Detect deforestation activities",
      "Identify high-risk regions",
      "Generate environmental impact insights",
    ],
    icon: TreePine,
    source: "Inspired from Smart India Hackathon – Clean & Green Technology Domain, 2023",
  },
  {
    id: 24,
    title: "Disaster Relief Resource Allocation Optimizer",
    description:
      "Relief resources are often distributed inefficiently during disasters. Build a system that analyzes disaster impact datasets, prioritizes affected regions, and optimizes resource allocation.",
    objectives: [
      "Analyze disaster impact datasets",
      "Prioritize affected regions",
      "Optimize resource allocation",
      "Improve relief response efficiency",
    ],
    icon: Globe,
    source: "Inspired from Smart India Hackathon – Disaster Management Domain, 2022",
  },
  {
    id: 25,
    title: "SDG Impact Tracking Dashboard for Governments",
    description:
      "Governments struggle to track progress toward SDG targets. Build a dashboard that integrates datasets across sectors, tracks SDG indicators, and supports data-driven policy decisions.",
    objectives: [
      "Integrate datasets across sectors",
      "Track SDG indicators",
      "Visualize progress through dashboards",
      "Support data-driven policy decisions",
    ],
    icon: Activity,
    source: "Inspired from Smart India Hackathon – Smart Automation (E-Governance) Domain, 2024",
  },
];

const themes = [
  {
    key: "agentic",
    label: "Theme 1: Agentic AI & Autonomous Systems",
    problems: agenticProblems,
    accentClass: "from-violet-500 to-cyan-500",
    badgeClass: "text-violet-400 border-violet-400/30 bg-violet-400/10",
    glowClass: "hover:shadow-violet-500/20",
  },
  {
    key: "sdg",
    label: "Theme 2: Sustainable Development Goals",
    problems: sdgProblems,
    accentClass: "from-emerald-500 to-teal-400",
    badgeClass: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    glowClass: "hover:shadow-emerald-500/20",
  },
];

const Problems = () => {
  const [activeTheme, setActiveTheme] = useState<"agentic" | "sdg">("agentic");

  const theme = themes.find((t) => t.key === activeTheme)!;

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading
          title="Problem Statements"
          subtitle="Choose a challenge and build a groundbreaking solution"
        />

        {/* Download Button */}
        <div className="flex justify-center mb-10">
          <a href="/template.pptx" download="Infothon6_Template.pptx">
            <Button variant="neon" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Template PPT
            </Button>
          </a>
        </div>

        {/* Theme Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          {themes.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTheme(t.key as "agentic" | "sdg")}
              className={`px-6 py-3 rounded-xl font-display text-sm font-semibold border transition-all duration-300 ${
                activeTheme === t.key
                  ? `bg-gradient-to-r ${t.accentClass} text-white border-transparent shadow-lg`
                  : "glass-card text-muted-foreground border-white/10 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Problem Count Badge */}
        <div className="flex justify-center mb-8">
          <span className={`text-xs font-display uppercase tracking-wider px-4 py-1.5 rounded-full border ${theme.badgeClass}`}>
            {theme.problems.length} Problem Statements
          </span>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {theme.problems.map((p, i) => (
            <motion.div
              key={`${activeTheme}-${p.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`glass-card p-8 flex flex-col hover:neon-border transition-all duration-500 group hover:shadow-xl ${theme.glowClass}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.accentClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <p.icon className="w-6 h-6 text-white" />
              </div>

              {/* Problem Number Badge */}
              <span className={`text-xs font-display uppercase tracking-wider px-3 py-1 rounded-full border w-fit mb-4 ${theme.badgeClass}`}>
                #{String(p.id).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {p.description}
              </p>

              {/* Objectives */}
              <div className="mt-auto">
                <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-2">
                  Objectives
                </p>
                <ul className="space-y-1">
                  {p.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${theme.accentClass} flex-shrink-0`} />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Source */}
              <p className="mt-5 text-[10px] text-muted-foreground/60 italic border-t border-white/5 pt-3">
                {p.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Problems;