"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaSitemap,
  FaProjectDiagram,
  FaReact,
  FaNode,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiPhp,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiJson,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaPython } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const TAB_DATA = [
  {
    title: t('about.skills'),
    id: "skills",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
        {[

          // Programming & Frameworks
          { icon: <SiC size={40} />, name: "C" },
          { icon: <SiCplusplus size={40} />, name: "C++" },
          { icon: <FaPython size={40} />, name: "Python" },
          { icon: <SiJavascript size={40} />, name: "JavaScript" },
          { icon: <SiHtml5 size={40} />, name: "HTML5" },
          { icon: <FaCss3Alt size={40} />, name: "CSS" },
          { icon: <SiPhp size={40} />, name: "PHP" },
          { icon: <FaNode size={40} />, name: "Node.js" },
          { icon: <SiExpress size={40} />, name: "Express" },

           // Databases

          { icon: <FaDatabase size={40} />, name: "SQL Server" },
          { icon: <SiMongodb size={40} />, name: "MongoDB" },
          { icon: <FaDatabase size={40} />, name: "BigQuery" },
          { icon: <FaProjectDiagram size={40} />, name: "ER Modeling" },
          { icon: <FaCode size={40} />, name: "Query Optimization" },
          // Methodologies
          
          { icon: <SiTypescript size={40} />, name: "TypeScript" },
          { icon: <FaReact size={40} />, name: "React" },
          { icon: <SiNextdotjs size={40} />, name: "Next.js" },

          
          { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
          { icon: <SiFigma size={40} />, name: "Figma" },
          { icon: <FaSitemap size={40} />, name: "Agile" },
          { icon: <FaSitemap size={40} />, name: "UML" },
          { icon: <FaSitemap size={40} />, name: "Project Management" },

           // Integration & Tools
          { icon: <FaDatabase size={40} />, name: "PhpMyAdmin" },
          { icon: <SiJson size={40} />, name: "JSON" },          
          { icon: <FaCode size={40} />, name: "RESTful APIs" },
          { icon: <SiDocker size={40} />, name: "Docker" }, 
          { icon: <FaCode size={40} />, name: "Sublime Text" },

          { icon: <FaGithub size={40} />, name: "GitHub" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center bg-[#10050dbf] rounded-lg py-6 text-white shadow-md"
          >
            <div className="mb-2">{skill.icon}</div>
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    ),
  },

  {
    title: t('about.education'),
    id: "education",
    content: (
      <div className="space-y-10 text-sm sm:text-base">

        {/* EDUCACIÓN FORMAL */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary-500">
            🎓 {t('about.educationTitle')}
          </h3>
          <ul className="space-y-2">
            {t('about.educationItems', { returnObjects: true }).map((item, index) => (
              <li key={index} className="text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CURSOS */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary-500">
            📚 {t('about.coursesTitle')}
          </h3>

          <ul className="space-y-2">
            {t('about.courses', { returnObjects: true }).map((course, index) => (
              <li key={index} className="text-gray-300">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* COURSERA */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary-500">
            ☁️ {t('about.courseraTitle')}
          </h3>

          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {t('about.courseraItems', { returnObjects: true }).map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>

        {/* EN PROGRESO */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary-500">
            ⏳ {t('about.learningTitle')}
          </h3>

          <ul className="space-y-4">
            <li>
              <span className="font-semibold">{t('about.learning')}</span>
            </li>
          </ul>
        </div>

      </div>
    ),
  },

  {
    title: t('about.certifications'),
    id: "certifications",
    content: (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "/images/1.png",
          "/images/2.png",
          "/images/3.png",
          "/images/4.png",
          "/images/5.png",
          "/images/6.png",
          "/images/7.png",
          "/images/8.png",
          "/images/9.png",
          "/images/10.png",
          "/images/11.png",
          "/images/12.png",
          "/images/13.png",
          "/images/14.png",
          "/images/15.png",
          
        ].map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img}
              width={500}
              height={500}
              alt="Certification"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    ),
  },
];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="py-10 px-5 sm:py-18 xl:px-18">
        <h2 className="text-4x2 font-bold mb-6">{t('about.title')}</h2>

        <p className="text-base lg:text-lg max-w-4x2 mb-10">
        {t('about.description')}
        </p>


        <div className="flex gap-6 mb-10">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
            {t('about.skills')}
          </TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
            {t('about.education')}
          </TabButton>
          <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
            {t('about.certifications')}
          </TabButton>
        </div>

        <div>
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
