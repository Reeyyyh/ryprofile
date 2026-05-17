"use client";

import { skills } from "@/app/lib/skills";
import SkillCard from "../SkillCard";

export default function TechSection() {
    return (
        <section
            id="tech"
            className="
                relative
                max-w-6xl
                mx-auto
                mt-32
                px-6
            "
        >

            {/* HEADER */}
            <div className="text-center mb-14">

                <h2
                    className="
                        mt-3
                        text-4xl
                        md:text-5xl
                        font-bold
                        tracking-tight
                        text-white
                    "
                >
                    Tech Stack
                </h2>

                <p
                    className="
                        mt-4
                        max-w-2xl
                        mx-auto
                        text-gray-400
                        leading-relaxed
                    "
                >
                    Technologies and tools I use to build
                    scalable and modern web applications.
                </p>

            </div>

            {/* SKILLS */}
            <div
                className="
                    grid
        grid-cols-5
        gap-3
        md:gap-6
                "
            >
                {skills.map((skill, i) => (
                    <SkillCard
                        key={i}
                        {...skill}
                    />
                ))}
            </div>

        </section>
    );
}