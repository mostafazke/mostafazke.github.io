import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import gsap from "gsap";
import MotionWrapper from "../ui/MotionWrapper";
import { skills as skillsData } from "../../data/skills";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const skillCategoryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skillItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-background via-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            🛠️ Skills & Technologies
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={skillCategoryVariants}
              className="backdrop-blur-sm bg-background/50 dark:bg-background/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/5 hover:border-border/10"
            >
              <h3 className="text-xl font-semibold mb-6 capitalize bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => {
                  return (
                    <motion.a
                      key={skill.name}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={skillItemVariants}
                      whileHover="hover"
                      className="flex items-center gap-2 bg-muted/50 dark:bg-muted/20 hover:bg-accent/80 hover:dark:bg-accent/20 
                                 rounded-full px-5 py-2.5 text-sm font-medium
                                 border border-border/50 dark:border-border/10 backdrop-blur-sm
                                 transition-all duration-300
                                 shadow-sm hover:shadow-md"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                      {skill.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
