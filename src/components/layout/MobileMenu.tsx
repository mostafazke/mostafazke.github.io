import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function MobileMenu({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <>
      <motion.button
        className="md:hidden p-2 text-foreground"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40 absolute top-full left-0 w-full z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={`#${item.key}`}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {item.icon} {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
