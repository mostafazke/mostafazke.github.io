"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Home, Folder, Mail } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShrink = window.scrollY > 20;
      setScrolled(shouldShrink);
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          height: shouldShrink ? 56 : 72,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      initial={{ height: 72 }}
      className={`sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-full">
        <a href="#hero" className="font-bold text-lg">Mostafa</a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-700">
          {navItems.map(({ label, href, icon: Icon }) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              key={href}
              href={href}
              className="flex items-center gap-1 hover:text-black transition"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </motion.a>
          ))}
        </nav>


        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map(({ label, href, icon: Icon }) => (
                  <a key={href} href={href} className="flex items-center gap-2 text-base">
                    <Icon className="w-5 h-5" />
                    {label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
