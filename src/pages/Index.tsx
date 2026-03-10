import { motion } from "framer-motion";


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/HeroScene";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Clock, Users, Trophy, Zap, Lightbulb, Handshake, Calendar, CheckCircle, Send, Star } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed scroll-driven cube */}
      <HeroScene />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(48 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(48 100% 50%) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4"
          >
            Presenting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary neon-text mb-6"
          >
            INFOTHON 6.0
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-display text-lg md:text-2xl tracking-[0.2em] text-foreground/80 mb-12"
          >
           
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/register">Register</Link>
            </Button>
            <Button variant="neon" size="lg" asChild>
              <Link to="/problems">View Problem Statements</Link>
            </Button>
          </motion.div>
        </div>
        
      </section>

      {/* Event Overview */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Event Overview"
            subtitle="A 24 hour hackathon bringing the brightest minds together to solve real-world challenges."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24 hours", desc: "Non-stop innovation and coding marathon" },
              { icon: Users, title: "Open to All", desc: "Students and enthusiasts welcome" },
              { icon: Trophy, title: "₹40,000+", desc: "Prize pool with exciting goodies and swag" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 text-center hover:neon-border transition-all duration-500"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <SectionHeading title="Timeline" subtitle="Key milestones for Infothon 6.0" />
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { icon: Calendar, date: "March 28th", title: "Registration Ends", desc: "Sign up and form your team" },
              { icon: Send, date: "March 29th  -  April 1st", title: "PPT Submission", desc: "Submit your solution approach" },
              { icon: Zap, date: "April 11th and 12th", title: "Hackathon Day", desc: "24 hours of building and hacking" },
              { icon: CheckCircle, date: "April 12th", title: "Results Announced", desc: "Winners declared and prizes distributed" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 items-start relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center neon-glow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {i < 3 && <div className="w-px h-16 bg-border" />}
                </div>
                <div className="pb-12">
                  <span className="text-primary font-display text-xs tracking-wider">{item.date}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Why Participate?" subtitle="More than just a hackathon" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Handshake, title: "Networking", desc: "Connect with industry leaders, mentors, and like-minded innovators." },
              { icon: Lightbulb, title: "Build Real Solutions", desc: "Work on real-world problems and create impactful solutions that matter." },
              { icon: Star, title: "Industry Mentorship", desc: "Get guided by expert mentors from top tech companies throughout the event." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 hover:neon-border transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
