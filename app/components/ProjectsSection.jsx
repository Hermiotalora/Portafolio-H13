"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const projectsData = t("projects.list", { returnObjects: true });
  const [tag, setTag] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags?.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="projects">
      <h2 className="text-xl font-bold text-white my-2">{t('projects.title')}</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={t("projects.tags.all")}
          value="all"
          isSelected={tag === "all"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={t("projects.tags.web")}
          value="web"
          isSelected={tag === "web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={t("projects.tags.mobile")}
          value="mobile"
          isSelected={tag === "mobile"}
        />
      </div>
      <ul ref ={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
