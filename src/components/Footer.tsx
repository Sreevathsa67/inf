import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-primary text-lg mb-4 neon-text">INFOTHON 6.0</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Innovate. Build. Disrupt. The premier hackathon pushing the boundaries of technology.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/problems", label: "Problem Statements" },
              { to: "/sponsors", label: "Sponsors" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">Contact</h4>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <span>infothon@techfest.org</span>
            <span>+91 98765 43210</span>
            <span>Innovation Hub, Tech Campus</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">Follow Us</h4>
          <div className="flex gap-3">
            {[Github, Twitter, Linkedin, Instagram, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs">
        © 2026 Infothon 6.0. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
