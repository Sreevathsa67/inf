import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Target, Rocket, Heart, ImageIcon } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "Lead Organizer", initials: "AM" },
  { name: "Priya Sharma", role: "Technical Head", initials: "PS" },
  { name: "Rahul Verma", role: "Design Lead", initials: "RV" },
  { name: "Sneha Patel", role: "Marketing Head", initials: "SP" },
  { name: "Vikram Singh", role: "Operations", initials: "VS" },
  { name: "Ananya Gupta", role: "Sponsorship Lead", initials: "AG" },
];

const gallery = [
  { src: "/gallery/photo1.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/2.jpeg", span: "" },
  { src: "/gallery/photo3.jpeg", span: "" },
  { src: "/gallery/photo4.jpeg", span: "" },
  { src: "/gallery/photo5.jpeg", span: "md:col-span-2" },
];

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => (
  <div className="min-h-screen bg-background pt-24">
    <div className="container mx-auto px-4 py-16">

      {/* About */}
      <SectionHeading title="About Infothon" subtitle="Where innovation meets impact" />
      <motion.div {...stagger} className="glass-card neon-border p-8 md:p-12 max-w-3xl mx-auto mb-24 text-center">
        <p className="text-muted-foreground leading-relaxed">
          Infothon is the flagship hackathon of the Department of Information Science & Engineering at Vidyavardhaka College of Engineering — a platform where curious minds come together to build, break, and innovate.
          <br /><br />
          Now in its 6th edition, Infothon has grown into one of the most anticipated tech events on campus, bringing together students, developers, and problem-solvers to tackle real-world challenges head-on.
          <br /><br />
          Over the years, Infothon has become more than just a competition — it's a culture. A space where ideas get stress-tested, teams push their limits, and solutions that actually matter come to life.
          <br /><br />
          Infothon 6.0 continues that legacy — bigger, bolder, and built for the builders of tomorrow.
        </p>
      </motion.div>

      {/* Gallery */}
      <SectionHeading title="Gallery" subtitle="Moments from past editions" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-24">
        {gallery.map((item, i) => (
          <motion.div
            key={i}
            {...stagger}
            transition={{ delay: i * 0.08 }}
            className={`glass-card hover:neon-border transition-all duration-500 group overflow-hidden relative ${item.span}`}
          >
            {item.src ? (
              <img
                src={item.src}
                alt="Gallery"
                className="w-full h-full object-cover min-h-40 group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full min-h-40 h-full flex flex-col items-center justify-center gap-2 p-4">
                <ImageIcon className="w-8 h-8 text-primary/40" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Vision */}
      <SectionHeading title="Our Vision" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Target, title: "Innovation", desc: "The best way to predict the future is to create it. — Peter Drucker" },
          { icon: Rocket, title: "Impact", desc: "We make a living by what we get, but we make a life by what we give. — Winston Churchill" },
          { icon: Heart, title: "Collaboration", desc: "Great things in business are never done by one person. They're done by a team of people. — Steve Jobs" },
        ].map((item, i) => (
          <motion.div key={i} {...stagger} transition={{ delay: i * 0.15 }} className="glass-card p-8 text-center hover:neon-border transition-all duration-500">
            <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
    <Footer />
  </div>
);

export default About;