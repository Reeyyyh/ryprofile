"use client";

import { motion } from "framer-motion";

import ProjectCard from "../ProjectCard";

import { projects } from "@/app/lib/data";

export default function ProjectsSection() {

    // FEATURED PROJECTS
    const featuredProjects = projects.filter(
        (project) => project.featured
    );

    // OTHER PROJECTS
    const otherProjects = projects.filter(
        (project) => !project.featured
    );

    return (
        <section
            id="projects"
            className="
                relative
                max-w-6xl
                mx-auto
                mt-32
                px-6
            "
        >

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
            >

                <h2
                    className="
                        mt-4
                        text-4xl
                        md:text-5xl
                        font-bold
                        tracking-tight
                        text-white
                    "
                >
                    Featured Projects
                </h2>

                <p
                    className="
                        mt-5
                        max-w-2xl
                        mx-auto
                        text-gray-400
                        leading-relaxed
                    "
                >
                    A collection of modern web applications
                    focused on performance, UI/UX, and
                    scalable architecture.
                </p>

            </motion.div>

            {/* FEATURED GRID */}
            <div
                className="
                    mt-16
                    grid
                    md:grid-cols-2
                    gap-7
                "
            >
                {featuredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        index={index + 1}
                        {...project}
                    />
                ))}
            </div>

            {/* OTHER PROJECTS */}
            {otherProjects.length > 0 && (
                <div className="mt-16">

                    {/* TITLE */}
                    <div className="flex items-center gap-4">

                        <div className="h-px flex-1 bg-white/10" />

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.25em]
                                text-gray-500
                            "
                        >
                            Other Projects
                        </p>

                        <div className="h-px flex-1 bg-white/10" />

                    </div>

                    {/* MINI GRID */}
                    <div
                        className="
                            mt-10
                            grid
                            sm:grid-cols-2
                            lg:grid-cols-3
                            gap-4
                        "
                    >

                        {otherProjects.map((project, index) => (

                            <motion.a
                                key={index}
                                href={project.github}
                                target="_blank"
                                whileHover={{
                                    y: -4,
                                }}
                                className="
                                    group
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/3
                                    backdrop-blur-xl
                                    p-5
                                    transition-all
                                    duration-300
                                    hover:border-blue-400/20
                                    hover:bg-blue-500/5
                                "
                            >

                                {/* TITLE */}
                                <h3
                                    className="
                                        text-lg
                                        font-semibold
                                        text-white
                                        transition
                                        group-hover:text-blue-100
                                    "
                                >
                                    {project.title}
                                </h3>

                                {/* DESC */}
                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-relaxed
                                        text-gray-400
                                    "
                                >
                                    {project.desc}
                                </p>

                                {/* TECH */}
                                <div
                                    className="
                                        mt-5
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >
                                    {project.tech
                                        .slice(0, 3)
                                        .map((tech, i) => (
                                            <span
                                                key={i}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-white/5
                                                    px-3
                                                    py-1
                                                    text-[11px]
                                                    text-gray-300
                                                "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>

                            </motion.a>

                        ))}

                    </div>

                </div>
            )}

        </section>
    );
}