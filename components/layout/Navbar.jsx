"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import useDisclosure from "@/hooks/useDisclosure";
import { navigationItems } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { cn } from "@/utils/cn";
import "./component.css";

export default function Navbar() {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useDisclosure(false);

  return (
    <header className="header">
      <div className="navbar-container section-shell">
        <Logo className="navbar-logo" />
        <nav className="navbar-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "nav-link",
                isActivePath(pathname, item.href) && "active"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="navbar-button-container">
          <Button href="/signup" variant="primary" size="sm" className="px-8">
            Get Started
          </Button>
        </div>
        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={toggle}
        >
          {isOpen ? (
            <X className="menu-icon" />
          ) : (
            <Menu className="menu-icon" />
          )}
        </button>
      </div>
      <div className={cn("mobile-menu", isOpen && "open")}>
        <nav className="mobile-nav section-shell" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              className={cn(
                "mobile-nav-link",
                isActivePath(pathname, item.href) && "active"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/signup" variant="primary" className="mobile-button" onClick={close}>
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.startsWith("/#")) {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
