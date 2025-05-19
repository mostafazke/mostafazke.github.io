"client islands";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import MotionWrapper from "../ui/MotionWrapper";
import { experiences } from "@/data";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            💼 Work Experience
          </h2>
        </MotionWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                {exp.company}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description.join("\n")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
