import Link from "next/link";
import { Facebook, Instagram, Linkedin, MoveUpRight, Twitter } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { footerColumns, socialLinks, supportDetails } from "@/data/siteData";
import "./component.css";

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell">
        <div className="footer-divider" />
        <div className="footer-grid">
          <div className="footer-left">
            <Logo className="footer-logo" />
            <div className="social-links">
              {socialLinks.map((item) => {
                const Icon = icons[item.icon];

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="social-link"
                  >
                    <Icon className="social-icon" />
                  </Link>
                );
              })}
            </div>
            <p className="footer-address">{supportDetails.address}</p>
          </div>
          <div className="footer-columns">
            {footerColumns.map((column) => (
              <div key={column.title} className="footer-column">
                <h2 className="column-title">{column.title}</h2>
                <div className="column-links">
                  {column.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="column-link"
                    >
                      {item.label}
                      {item.external ? (
                        <MoveUpRight className="external-icon" />
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
