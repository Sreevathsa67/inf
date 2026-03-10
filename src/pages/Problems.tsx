import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import {
  Bot, Users, Cloud, Shield, Leaf, Brain, Cpu, AlertTriangle,
  Zap, BookOpen, Truck, Sprout, HeartPulse, GraduationCap,
  FlaskConical, Droplets, Wind, Sun, Recycle, MapPin, Download, X, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const agenticProblems = [
  { id: "A1",  title: "Autonomous Food Waste Prediction & Redistribution Agent",  problem: "Restaurants and supermarkets waste large amounts of food due to inaccurate demand prediction.",  objectives: ["Predict food demand using historical sales, weather, and seasonal trends","Recommend optimal preparation quantities","Detect surplus food automatically","Connect vendors with NGOs or food banks for redistribution"], icon: Truck },
  { id: "A2",  title: "Multi-Agent Heritage Crowd Flow Optimizer",  problem: "Tourist attractions frequently become overcrowded causing safety risks.",  objectives: ["Analyze historical or simulated visitor data","Detect crowd density hotspots","Recommend alternate routes or attractions","Provide real-time crowd balancing suggestions"], icon: Users },
  { id: "A3",  title: "Autonomous Cloud Cost Negotiation Agent",  problem: "Companies overspend on cloud resources due to inefficient allocation.",  objectives: ["Analyze cloud usage logs","Predict future resource demand","Recommend optimized instance selection and scaling strategies","Generate automated cost optimization reports"], icon: Cloud },
  { id: "A4",  title: "Autonomous Event Safety Monitoring System",  problem: "Large public gatherings face risks due to uncontrolled crowd density.",  objectives: ["Analyze crowd movement patterns","Predict congestion zones","Generate safety alerts","Recommend crowd management strategies"], icon: AlertTriangle },
  { id: "A5",  title: "Autonomous Farmer Decision Intelligence Agent",  problem: "Farmers lack integrated insights combining weather, soil, and market information.",  objectives: ["Analyze weather and soil datasets","Recommend optimal crop selection","Generate irrigation and harvest recommendations","Predict crop yield trends"], icon: Sprout },
  { id: "A6",  title: "AI Agent for Deepfake Detection and Trust Scoring",  problem: "Deepfake media spreads misinformation and impersonation threats.",  objectives: ["Detect manipulated video or audio","Generate authenticity confidence scores","Highlight suspicious regions in media","Provide verification reports"], icon: Shield },
  { id: "A7",  title: "Autonomous Insider Threat Detection System",  problem: "Organizations face security risks from internal misuse of data.",  objectives: ["Learn normal employee activity patterns","Detect unusual access behavior","Generate anomaly alerts","Recommend security mitigation steps"], icon: Shield },
  { id: "A8",  title: "Personal Digital Footprint Risk Guardian",  problem: "Users unknowingly expose personal information across online platforms.",  objectives: ["Scan publicly available user data","Detect sensitive information exposure","Provide privacy risk alerts","Recommend privacy protection steps"], icon: Shield },
  { id: "A9",  title: "Multi-Agent Disaster Response Coordinator",  problem: "Emergency teams often lack coordinated situational awareness during disasters.",  objectives: ["Collect disaster information from multiple datasets","Identify affected areas","Recommend evacuation routes","Optimize emergency resource allocation"], icon: AlertTriangle },
  { id: "A10", title: "Autonomous Cyber Defense Agent",  problem: "Cyberattacks evolve faster than manual response systems.",  objectives: ["Analyze network activity logs","Detect abnormal patterns","Predict potential attack paths","Recommend automated mitigation strategies"], icon: Cpu },
  { id: "A11", title: "Government Scheme Navigation AI Agent",  problem: "Citizens struggle to identify relevant government welfare schemes.",  objectives: ["Analyze user profile and eligibility","Recommend suitable government schemes","Provide application guidance","Track scheme application progress"], icon: Bot },
  { id: "A12", title: "Autonomous Energy Optimization Agent",  problem: "Buildings consume electricity inefficiently due to lack of usage insights.",  objectives: ["Analyze energy consumption data","Detect wasteful usage patterns","Recommend energy saving strategies","Forecast future energy demand"], icon: Zap },
  { id: "A13", title: "AI Research Gap Discovery System",  problem: "Researchers struggle to identify unexplored research areas.",  objectives: ["Analyze research papers and patents","Detect trending research topics","Identify unexplored research gaps","Recommend potential research ideas"], icon: FlaskConical },
  { id: "A14", title: "Autonomous Meeting Intelligence Agent",  problem: "Important decisions made in meetings are often poorly documented.",  objectives: ["Transcribe meeting conversations","Extract key decisions and action items","Assign tasks automatically","Track task completion progress"], icon: Brain },
  { id: "A15", title: "Smart Road Accident Detection & Emergency Dispatch Agent",  problem: "Emergency services often receive delayed accident reports.",  objectives: ["Analyze traffic video datasets","Detect accident events","Identify accident location","Automatically notify emergency responders"], icon: AlertTriangle },
  { id: "A16", title: "Personal Autonomous Life Management Agent",  problem: "Individuals spend significant time organizing daily activities.",  objectives: ["Manage personal schedules","Detect scheduling conflicts","Recommend optimized daily plans","Provide reminders and task prioritization"], icon: Bot },
  { id: "A17", title: "Autonomous Enterprise Knowledge Retrieval Agent",  problem: "Employees waste time searching for internal company information.",  objectives: ["Index enterprise knowledge documents","Answer employee queries","Summarize relevant documents","Recommend related knowledge resources"], icon: BookOpen },
  { id: "A18", title: "Autonomous Urban Infrastructure Monitoring Agent",  problem: "Urban issues like potholes and broken lights often go unnoticed.",  objectives: ["Analyze city images or complaint data","Detect infrastructure problems","Prioritize repair tasks","Generate alerts for authorities"], icon: MapPin },
  { id: "A19", title: "Future Trend Discovery AI Agent",  problem: "Emerging technological trends are difficult to identify.",  objectives: ["Analyze research papers and patents","Monitor startup and news data","Detect emerging technologies","Generate future trend insights"], icon: Brain },
  { id: "A20", title: "Supply Chain Disruption Prediction Agent",  problem: "Supply chains frequently face disruptions from unpredictable events.",  objectives: ["Analyze logistics and weather data","Predict disruption risks","Recommend alternate routing strategies","Provide supply chain risk alerts"], icon: Truck },
  { id: "A21", title: "AI Career Skill Recommendation Agent",  problem: "Students struggle to identify skills required for future careers.",  objectives: ["Analyze job market datasets","Identify trending skills","Recommend personalized skill development paths","Suggest learning resources"], icon: GraduationCap },
  { id: "A22", title: "Autonomous Learning Path Generator",  problem: "Learners feel overwhelmed when starting new fields.",  objectives: ["Analyze learner goals","Generate personalized learning roadmap","Adapt learning path based on progress","Recommend relevant courses and resources"], icon: BookOpen },
  { id: "A23", title: "Smart Irrigation Decision Agent",  problem: "Water is often wasted due to inefficient irrigation planning.",  objectives: ["Analyze soil and weather datasets","Predict irrigation requirements","Generate optimized irrigation schedules","Reduce water consumption"], icon: Droplets },
  { id: "A24", title: "AI Tutor for Real-Time Student Learning Support",  problem: "Teachers cannot provide personalized guidance to every student.",  objectives: ["Analyze student performance data","Detect learning gaps","Provide personalized explanations","Recommend practice exercises"], icon: GraduationCap },
  { id: "A25", title: "AI Startup Feasibility Analyzer",  problem: "Entrepreneurs struggle to evaluate startup idea viability.",  objectives: ["Analyze market trends and competitors","Estimate potential demand","Generate feasibility reports","Provide risk assessment insights"], icon: Brain },
];

const sdgProblems = [
  { id: "S1",  title: "AI Microfinance Credit Scoring for the Unbanked",  problem: "Millions of individuals lack formal credit history and cannot access financial services.",  objectives: ["Analyze alternative financial datasets (mobile payments, utility payments)","Generate AI-based credit scores","Provide explainable credit risk assessments","Help microfinance institutions identify eligible borrowers"], icon: Brain },
  { id: "S2",  title: "Crop Yield Prediction and Farmer Advisory Platform",  problem: "Farmers face uncertainty in predicting crop yields and market demand.",  objectives: ["Analyze historical weather and soil datasets","Predict crop yield for different crops","Provide crop planning recommendations","Generate advisory insights for farmers"], icon: Sprout },
  { id: "S3",  title: "AI Crop Disease Early Warning System",  problem: "Crop diseases often spread before farmers detect them.",  objectives: ["Identify crop diseases from plant images","Analyze weather conditions for disease risk","Predict potential outbreaks","Recommend treatment and prevention strategies"], icon: Leaf },
  { id: "S4",  title: "Food Supply Chain Waste Reduction Platform",  problem: "Food waste occurs due to inefficient storage and logistics.",  objectives: ["Predict spoilage risk using supply chain data","Optimize food distribution routes","Match surplus food with NGOs or local markets","Generate analytics on food waste patterns"], icon: Truck },
  { id: "S5",  title: "Urban Nutrition Accessibility Mapping Tool",  problem: "Many urban areas lack access to affordable nutritious food.",  objectives: ["Map food deserts using city datasets","Analyze accessibility to grocery stores and markets","Recommend optimal locations for food programs","Provide insights for policymakers"], icon: MapPin },
  { id: "S6",  title: "AI Telemedicine Access Optimizer",  problem: "Rural communities struggle to access specialized healthcare.",  objectives: ["Analyze patient demand and doctor availability","Prioritize telemedicine consultations","Recommend optimal doctor allocation","Improve healthcare accessibility"], icon: HeartPulse },
  { id: "S7",  title: "Predictive Public Health Surveillance System",  problem: "Disease outbreaks are often detected too late.",  objectives: ["Analyze health datasets and hospital records","Detect unusual disease patterns","Predict outbreak risks","Generate alerts for health authorities"], icon: HeartPulse },
  { id: "S8",  title: "AI Mental Health Support Chat System",  problem: "Mental health support services are limited in many regions.",  objectives: ["Provide conversational emotional support","Detect distress signals in conversations","Recommend professional resources","Generate mental health trend insights"], icon: Brain },
  { id: "S9",  title: "Smart Learning Gap Detection Platform",  problem: "Teachers struggle to identify learning gaps in large classrooms.",  objectives: ["Analyze student performance data","Detect weak concepts","Generate personalized learning recommendations","Track student progress over time"], icon: GraduationCap },
  { id: "S10", title: "AI Career Guidance Platform for Rural Students",  problem: "Students in rural areas lack career awareness and guidance.",  objectives: ["Analyze job market datasets","Identify in-demand skills","Recommend suitable career paths","Provide learning resource suggestions"], icon: GraduationCap },
  { id: "S11", title: "AI System for Detecting Gender Bias in Hiring",  problem: "Hiring processes may contain unconscious gender bias.",  objectives: ["Analyze recruitment datasets","Detect bias patterns in hiring decisions","Generate fairness metrics","Recommend unbiased hiring practices"], icon: Users },
  { id: "S12", title: "Clean Water Access Risk Prediction Platform",  problem: "Communities may lose access to safe drinking water due to contamination.",  objectives: ["Analyze water quality datasets","Detect contamination trends","Predict high-risk areas","Generate early warning alerts"], icon: Droplets },
  { id: "S13", title: "AI Water Consumption Optimization Tool",  problem: "Water resources are wasted due to inefficient consumption patterns.",  objectives: ["Analyze household water usage","Detect abnormal consumption","Suggest conservation strategies","Generate water usage insights"], icon: Droplets },
  { id: "S14", title: "Renewable Energy Production Forecasting System",  problem: "Renewable energy output fluctuates unpredictably.",  objectives: ["Analyze weather datasets","Predict solar or wind energy generation","Generate production forecasts","Assist energy grid planning"], icon: Sun },
  { id: "S15", title: "Community Energy Sharing Optimization Platform",  problem: "Households with renewable energy cannot efficiently share surplus power.",  objectives: ["Analyze local energy production and consumption","Optimize energy sharing among households","Predict demand fluctuations","Improve local energy efficiency"], icon: Zap },
  { id: "S16", title: "AI-Based Sustainable Transportation Planner",  problem: "Urban transportation systems cause congestion and pollution.",  objectives: ["Analyze city traffic datasets","Predict congestion hotspots","Recommend optimized public transport routes","Suggest sustainable mobility strategies"], icon: Truck },
  { id: "S17", title: "Smart Waste Collection Route Optimizer",  problem: "Cities face inefficiencies in waste collection logistics.",  objectives: ["Analyze waste generation patterns","Optimize garbage collection routes","Reduce fuel consumption","Improve waste management efficiency"], icon: Recycle },
  { id: "S18", title: "Recycling Material Classification AI",  problem: "Manual sorting of recyclable materials is inefficient.",  objectives: ["Analyze images of recyclable materials","Classify materials using computer vision","Assist automated sorting systems","Improve recycling efficiency"], icon: Recycle },
  { id: "S19", title: "Air Pollution Prediction and Mitigation Platform",  problem: "Cities struggle to anticipate harmful air pollution events.",  objectives: ["Analyze air quality datasets","Predict pollution levels","Identify pollution sources","Recommend mitigation strategies"], icon: Wind },
  { id: "S20", title: "Urban Heat Island Prediction Tool",  problem: "Urban areas experience higher temperatures due to dense infrastructure.",  objectives: ["Analyze satellite and climate datasets","Detect urban heat hotspots","Generate heat risk maps","Recommend urban cooling strategies"], icon: Sun },
  { id: "S21", title: "AI Flood Risk Prediction Platform",  problem: "Floods cause significant damage due to delayed warnings.",  objectives: ["Analyze rainfall and terrain datasets","Predict flood risk zones","Generate early warning alerts","Recommend evacuation strategies"], icon: AlertTriangle },
  { id: "S22", title: "Wildlife Poaching Detection System",  problem: "Illegal poaching threatens wildlife populations.",  objectives: ["Analyze wildlife movement datasets","Detect suspicious activity patterns","Generate alerts for conservation authorities","Support wildlife protection efforts"], icon: Leaf },
  { id: "S23", title: "Deforestation Monitoring Platform",  problem: "Forest loss is difficult to track in real time.",  objectives: ["Analyze satellite imagery","Detect deforestation activities","Identify high-risk regions","Generate environmental impact insights"], icon: Leaf },
  { id: "S24", title: "Disaster Relief Resource Allocation Optimizer",  problem: "Relief resources are often distributed inefficiently during disasters.",  objectives: ["Analyze disaster impact datasets","Prioritize affected regions","Optimize resource allocation","Improve relief response efficiency"], icon: AlertTriangle },
  { id: "S25", title: "SDG Impact Tracking Dashboard for Governments",  problem: "Governments struggle to track progress toward SDG targets.",  objectives: ["Integrate datasets across sectors","Track SDG indicators","Visualize progress through dashboards","Support data-driven policy decisions"], icon: Brain },
];

const THEMES = [
  { key: "all",     label: "All Themes" },
  { key: "agentic", label: "Agentic AI & Autonomous Systems" },
  { key: "sdg",     label: "Sustainable Development Goals" },
];

type Problem = {
  id: string; title: string; problem: string; objectives: string[]; icon: any; theme: string;
};

const Modal = ({ p, onClose }: { p: Problem; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    onClick={onClose}
  >
    {/* Blurred backdrop */}
    <div className="absolute inset-0 bg-background/75 backdrop-blur-lg" />

    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 24 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-xl glass-card neon-border shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Gradient top strip */}
      <div className="h-1 w-full gradient-primary" />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg">
            <p.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/70 mb-1 block">
              {p.theme === "agentic" ? "Agentic AI & Autonomous Systems" : "Sustainable Development Goals"}
            </span>
            <h2 className="text-base font-bold text-foreground leading-snug">{p.title}</h2>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full glass-card border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Divider */}
        <div className="border-t border-white/8 mb-5" />

        {/* Problem */}
        <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/15">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">Problem Statement</p>
          <p className="text-sm text-foreground/90 leading-relaxed">{p.problem}</p>
        </div>

        {/* Objectives */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-3">Objectives</p>
          <ul className="space-y-2">
            {p.objectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Problems = () => {
  const [activeTheme, setActiveTheme] = useState("all");
  const [selected, setSelected] = useState<Problem | null>(null);

  const allProblems = [
    ...agenticProblems.map((p) => ({ ...p, theme: "agentic" })),
    ...sdgProblems.map((p) => ({ ...p, theme: "sdg" })),
  ];

  const filtered = allProblems.filter((p) =>
    activeTheme === "all" || p.theme === activeTheme
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading
          title="Problem Statements"
          subtitle="Choose a challenge and build a groundbreaking solution"
        />

        <div className="flex justify-center mb-10">
          <a href="/infothon_template.pptx" download>
  <Button variant="neon" size="lg" className="gap-2">
    <Download className="w-5 h-5" />
    Download Template PPT
  </Button>
</a>
        </div>

        {/* Theme tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {THEMES.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTheme(t.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeTheme === t.key
                  ? "gradient-primary text-primary-foreground border-transparent shadow-lg shadow-primary/20"
                  : "glass-card border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-muted-foreground text-xs mb-8 tracking-wider uppercase">
          {filtered.length} problem statements — click any to view details
        </p>

        {/* Two-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.025, 0.5) }}
              onClick={() => setSelected(p)}
              className="glass-card group cursor-pointer hover:neon-border transition-all duration-300 flex items-center gap-4 px-5 py-4 hover:bg-primary/5"
            >
              {/* Number */}
              <span className="text-xs font-bold text-primary/40 w-7 flex-shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <p.icon className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Title */}
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-snug flex-1">
                {p.title}
              </span>

              {/* Arrow */}
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <Modal p={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Problems;