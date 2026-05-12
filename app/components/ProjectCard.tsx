"use client";

import { motion } from "framer-motion";

import {
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

type Props = {
    title: string;
    desc: string;
    tech: string[];
    github: string;
    demo: string;

    featured?: boolean;
    year?: string;
    status?: string;
    index?: number;
};

export default function ProjectCard({
    title,
    desc,
    tech,
    github,
    demo,
    featured = false,
    year,
    status,
    index,
}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            whileHover={{
                y: -10,
            }}
            transition={{
                duration: 0.45,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
                group
                relative
                overflow-hidden
                rounded-4xl
                border
                border-white/10
                bg-black/40
                backdrop-blur-sm
            "
        >

            {/* BACKGROUND */}
            <div
                className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-blue-500/5
                    via-transparent
                    to-cyan-500/5
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* GLOW */}
            <div
                className="
                    absolute
                    -top-24
                    right-0
                    w-72
                    h-72
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                "
            />

            {/* GRID */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.03]
                    bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                    bg-size-[40px_40px]
                "
            />

            {/* CONTENT */}
            <div className="relative z-10 p-8">

                {/* TOP */}
                <div className="flex items-start justify-between gap-4">

                    {/* BADGE */}
                    {featured ? (
                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-blue-400/20
                                bg-blue-500/10
                                px-4
                                py-2
                                text-xs
                                uppercase
                                tracking-[0.2em]
                                text-blue-300
                            "
                        >
                            <Sparkles size={14} />

                            Featured
                        </div>
                    ) : (
                        <div
                            className="
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-2
                                text-xs
                                uppercase
                                tracking-[0.2em]
                                text-gray-400
                            "
                        >
                            Project
                        </div>
                    )}

                    {/* INDEX */}
                    <p
                        className="
                            text-5xl
                            font-bold
                            leading-none
                            text-white/5
                            transition-all
                            duration-500
                            group-hover:text-white/10
                        "
                    >
                        {String(index ?? 1).padStart(2, "0")}
                    </p>

                </div>

                {/* META */}
                {(year || status) && (
                    <div
                        className="
                            mt-7
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-gray-500
                        "
                    >

                        {year && (
                            <span>{year}</span>
                        )}

                        {year && status && (
                            <div className="w-1 h-1 rounded-full bg-gray-600" />
                        )}

                        {status && (
                            <span>{status}</span>
                        )}

                    </div>
                )}

                {/* TITLE */}
                <h3
                    className="
                        mt-4
                        text-3xl
                        font-semibold
                        tracking-tight
                        text-white
                        transition-all
                        duration-300
                        group-hover:text-blue-100
                    "
                >
                    {title}
                </h3>

                {/* DESC */}
                <p
                    className="
                        mt-5
                        leading-relaxed
                        text-gray-400
                    "
                >
                    {desc}
                </p>

                {/* TECH */}
                <div
                    className="
                        mt-7
                        flex
                        flex-wrap
                        gap-3
                    "
                >
                    {tech.map((t, i) => (
                        <motion.span
                            key={i}
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-2
                                text-xs
                                font-medium
                                text-gray-300
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:border-blue-400/30
                                hover:bg-blue-500/10
                                hover:text-blue-200
                            "
                        >
                            {t}
                        </motion.span>
                    ))}
                </div>

                {/* DIVIDER */}
                <div
                    className="
                        mt-8
                        h-px
                        w-full
                        bg-linear-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                    "
                />

                {/* ACTIONS */}
                <div
                    className="
                        mt-8
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div className="flex items-center gap-4">

                        {/* GITHUB */}
                        <a
                            href={github}
                            target="_blank"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                px-5
                                py-3
                                text-sm
                                text-gray-300
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-blue-400/30
                                hover:bg-blue-500/10
                                hover:text-white
                            "
                        >
                            <FaGithub size={17} />

                            Source Code
                        </a>

                        {/* DEMO */}
                        <a
                            href={demo}
                            target="_blank"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-2xl
                                bg-blue-500
                                px-5
                                py-3
                                text-sm
                                font-medium
                                text-white
                                transition-all
                                duration-300
                                hover:bg-blue-600
                                hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]
                            "
                        >
                            Live Preview

                            <ArrowUpRight size={17} />
                        </a>

                    </div>

                </div>
            </div>
        </motion.div>
    );
}