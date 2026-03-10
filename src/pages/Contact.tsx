import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background pt-24">
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="Contact Us" subtitle="We'd love to hear from you" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card neon-border p-8 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { label: "Name", type: "text", placeholder: "Your name" },
            { label: "Phone", type: "tel", placeholder: "Your phone number" },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-sm font-display text-foreground/80 mb-1 block">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                required
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          ))}
          <div>
            <label className="text-sm font-display text-foreground/80 mb-1 block">Message</label>
            <textarea
              rows={5}
              placeholder="Your message..."
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
          <Button variant="hero" className="w-full" type="submit">
            Send Message
          </Button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {[
            { icon: Mail, title: "Email", info: "infothon@techfest.org" },
            { icon: Phone, title: "Phone", info: "+91 98765 43210" },
            { icon: MapPin, title: "Location", info: "Innovation Hub, Tech Campus, Mumbai" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.info}</p>
              </div>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="glass-card overflow-hidden rounded-xl h-48">
            <iframe
              src="https://www.google.com/maps?q=12.336565,76.618745&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              loading="lazy"
              title="Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
