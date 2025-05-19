import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "../ui/MotionWrapper";
import { personal } from "@/data";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.from(btnRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pt-32 pb-16 md:pt-42 md:pb-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personal.name}
              <span className="inline-block animate-pulse">✨</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              {personal.title}
            </motion.p>

            <motion.div
              className="flex justify-start gap-2 pt-3 md:pt-6"
              variants={containerVariants}
            >
              <motion.a
                target="_blank"
                href={personal.github}
                aria-label="GitHub"
                className="text-foreground hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="size-8" />
              </motion.a>
              <motion.a
                target="_blank"
                href={personal.linkedin}
                aria-label="LinkedIn"
                className="text-foreground hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="size-8" />
              </motion.a>
              <motion.a
                target="_blank"
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="text-foreground hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="size-8" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-purple-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <p className="relative pl-4 py-2 mb-4 text-muted-foreground">
              <span className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"></span>
              🚀 Frontend Engineer with {` ${new Date().getFullYear() - 2018} `}
              + years of experience building scalable, high-quality web apps. I
              specialize in React and Angular, with a strong focus on
              performance, clean code, and UX. I’ve worked on design systems,
              enterprise tools, and modular architectures. Fast learner, team
              player, and always exploring better ways to solve real
              problems—lately through AI-powered workflows.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
