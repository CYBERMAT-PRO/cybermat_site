"use client";
import React, {useRef, useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";


const projectsData = [
    {
        title: "Site 1",
        id: "1",
        description: "En cours de création",
        image: "/images/projects/site-internet.png",
        tag: ["Tout","Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        title: "Site 2",
        id: "2",
        description: "En cours de création",
        image: "/images/projects/site-internet.png",
        tag: ["Tout","Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("Tout");
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity:1},
    };

    return(
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center py-6 gap-2">
                <ProjectTag 
                    onClick={handleTagChange}
                    name="Tout"
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag 
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />

            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li 
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate": "initial"}
                        transition={{ duration:0.3, delay: index *0.4}}
                    >               
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
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