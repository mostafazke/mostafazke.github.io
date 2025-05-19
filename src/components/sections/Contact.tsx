import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import gsap from "gsap";
import MotionWrapper from "../ui/MotionWrapper";
import { personal } from "@/data";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
      duration: 0.7,
      ease: "anticipate",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const initialForm = { name: "", email: "", message: "" };

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 80, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData(e.currentTarget);
    formDataObj.append("access_key", "aec34899-0015-4cbe-9f4e-9e65928c1e88");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      e.currentTarget.reset();
      setFormData(initialForm);
      setTimeout(() => setSubmitted(false), 4000);
    }
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-background to-muted/30"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            📬 Get in Touch
          </h2>
        </MotionWrapper>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="backdrop-blur-sm bg-background/50 dark:bg-background/10 rounded-2xl p-6 shadow-lg border border-border/5">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6">
                Have a project in mind? Let's work together to create something
                amazing.
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors"
                >
                  <span>📧</span>
                  <span>{personal.email}</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors"
                >
                  <span>💼</span>
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors"
                >
                  <span>🐙</span>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background/50 dark:bg-background/10 border border-border/10 focus:border-accent/50 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background/50 dark:bg-background/10 border border-border/10 focus:border-accent/50 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background/50 dark:bg-background/10 border border-border/10 focus:border-accent/50 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? "animate-pulse" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submitted && (
                <div className="text-green-600 text-center mt-4">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
