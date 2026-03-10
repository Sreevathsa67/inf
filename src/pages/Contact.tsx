import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background pt-24">
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="Contact Us" subtitle="We'd love to hear from you" />

      <div className="max-w-2xl mx-auto space-y-8">

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {[
            { icon: Mail,    title: "Email",    info: "infothon@vvce.ac.in" },
            { icon: MapPin,  title: "Location", info: "VidhyaVardhaka College of Engineering" },
          ].map((item, i) => (
            <div key={i} className="glass-card flex gap-4 items-start p-5 flex-1">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.info}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <h4 className="text-sm font-bold text-foreground mb-3">Follow Us</h4>
          <div className="flex gap-3 justify-center">
            {[Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card overflow-hidden rounded-xl h-64"
        >
          <iframe
            src="https://www.google.com/maps?q=12.336565,76.618745&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            loading="lazy"
            title="Location"
          />
        </motion.div>

      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;