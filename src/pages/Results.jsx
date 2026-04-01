import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";

const theme1 = {
  label: "Theme 1 — The Frontier of Agentic Intelligence and Autonomous Systems",
  color: "violet",
  teams: [
    { team: "AgentGyan", lead: "SreeCharan M S" },
    { team: "BitWise-Not", lead: "Harish Chawan A" },
    { team: "Code Warriors", lead: "Arpitha K Gudagudi" },
    { team: "CodeCrafters", lead: "Ashish Kumar" },
    { team: "Codex", lead: "Krishna Nambiar A V" },
    { team: "Codezilla", lead: "Pooja K" },
    { team: "Crypticthreads", lead: "Musapnara Hareesh" },
    { team: "Elite Wolves", lead: "Dhanush S N" },
    { team: "GreenLeaf", lead: "S T Sohan" },
    { team: "Hackquest", lead: "Shreya M" },
    { team: "HackNova", lead: "Shruthi R Gowda" },
    { team: "Ibomma", lead: "Yaswanth Vennukula" },
    { team: "KILLJOY", lead: "B S Koushik" },
    { team: "Krypta", lead: "Nisarga R" },
    { team: "Logic Lords", lead: "Haripriya P L" },
    { team: "Madhwa", lead: "Ananda Joshi" },
    { team: "NextGen Coders", lead: "Sindhu H M" },
    { team: "Quantum Hack", lead: "Swathi P" },
    { team: "RapidResQ", lead: "Priyanka V" },
    { team: "SAFEX", lead: "Bhoomika K C" },
    { team: "Team Unique", lead: "Sumanth Vokkaliga" },
    { team: "TECNOVATORS", lead: "Rochana C" },
    { team: "Ton Up", lead: "Harshith T S" },
    { team: "ZAPCODERS", lead: "Chinmayee R" },
    { team: "SheCodes", lead: "Yashaswi Urs M" },
  ],
};

const theme2 = {
  label: "Theme 2 — Innovating for Sustainable Development",
  color: "emerald",
  teams: [
    { team: "Lost in loop", lead: "Granthini C A" },
    { team: "MedTechMaverics", lead: "Suma M Arkachari" },
    { team: "RISING DEVELOPERS", lead: "Sri Ranjana J" },
    { team: "Sapna", lead: "Mamatha Krishna" },
    { team: "SmartDevelopers", lead: "Omnateeta V" },
    { team: "Sync Squad", lead: "Gagana S" },
    { team: "TEAM PREDATORS", lead: "Shreyas J S" },
    { team: "TEAM SYNAPSE", lead: "Arnav Pandita" },
    { team: "Team-Unknown", lead: "Jainandan S L" },
    { team: "Tech Warriors", lead: "Hemanth P S" },
    { team: "TechTides", lead: "Spoorti Hosmath" },
    { team: "Vision - X", lead: "Preetham N A" },
    { team: "We3", lead: "Pranav Kumar" },
    { team: "ByteCoders", lead: "B K Shreya" },
    { team: "TEAMCODEBLOOD", lead: "Manoj Jogi" },
    { team: "CODE BREAKERS", lead: "Bhavan Kumar S" },
    { team: "CODERED", lead: "Sneha R" },
    { team: "CONNECT+", lead: "Girish S Desai" },
    { team: "CropCure Crew", lead: "Nagarathna N" },
    { team: "Ctrl Alt Delete", lead: "Agrim Kedia" },
    { team: "DEEPTHINKERS", lead: "Senhan Salvudheen" },
    { team: "FUTURE BUILDERS", lead: "Sumit Alegavi" },
    { team: "glaude", lead: "Yeshwanth M" },
    { team: "Imagineers", lead: "Irene Aisha" },
    { team: "Keep Silence", lead: "Darshan Gowda T S" },
  ],
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};
const ThemeSection = ({ data }) => {
  const isViolet = data.color === "violet";
  return (
    <motion.div {...stagger} className="mb-16">
      {/* Theme header */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${
        isViolet
          ? "border-violet-500/30 bg-violet-500/10 text-violet-300"
          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
      }`}>
        <span className={`w-2 h-2 rounded-full ${isViolet ? "bg-violet-400" : "bg-emerald-400"}`} />
        <span className="font-display text-xs font-semibold uppercase tracking-wider">{data.label}</span>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 px-6 py-3 border-b border-border/60 bg-card/50">
          <span className="col-span-1 font-display text-xs uppercase tracking-wider text-muted-foreground">#</span>
          <span className="col-span-5 font-display text-xs uppercase tracking-wider text-muted-foreground">Team Name</span>
          <span className="col-span-6 font-display text-xs uppercase tracking-wider text-muted-foreground">Team Lead</span>
        </div>

        {/* Rows */}
        {data.teams.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="grid grid-cols-12 px-3 py-3 border-b border-border/30 last:border-0 hover:bg-primary/5 transition-colors duration-150 group"
          >
            <span className="col-span-1 font-display text-xs text-primary/40 group-hover:text-primary/70 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="col-span-5 font-body text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
              {entry.team}
            </span>
            <span className="col-span-6 font-body text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
              {entry.lead}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-right text-xs text-muted-foreground mt-3">{data.teams.length} teams shortlisted</p>
    </motion.div>
  );
};

const Results = () => (
  <div className="min-h-screen bg-background pt-24 overflow-x-hidden">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <SectionHeading
        title="Shortlisted Teams"
        subtitle="11th – 12th April 2026 · VVCE Sports Complex"
      />

      <motion.p
        {...stagger}
        className="text-center text-muted-foreground text-sm mb-16 -mt-8"
      >
        Congratulations to all shortlisted teams! Report at the venue on{" "}
        <span className="text-primary font-semibold">April 11th, 2026</span>.
      </motion.p>

      <ThemeSection data={theme1} />
      <ThemeSection data={theme2} />
    </div>
    <Footer />
  </div>
);

export default Results;