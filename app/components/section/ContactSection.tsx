"use client";

import { motion } from "framer-motion";

import {
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

import {
    Mail,
    ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="
                relative
                max-w-6xl
                mx-auto
                mt-32
                px-6
                pb-4
            "
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10 pointer-events-none">

                <div
                    className="
                        absolute
                        top-0
                        left-1/4
                        w-80
                        h-80
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        right-1/4
                        w-80
                        h-80
                        rounded-full
                        bg-cyan-500/10
                        blur-3xl
                    "
                />

            </div>

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
                        md:text-6xl
                        font-bold
                        tracking-tight
                        text-white
                    "
                >
                    Let&apos;s Build
                    <span
                        className="
                            block
                            bg-linear-to-r
                            from-blue-400
                            bg-blue-500
                            bg-clip-text
                            text-transparent
                        "
                    >
                        Something Great
                    </span>
                </h2>

                <p
                    className="
                        mt-6
                        max-w-2xl
                        mx-auto
                        text-gray-400
                        leading-relaxed
                    "
                >
                    Open for freelance opportunities, collaborations,
                    and building modern digital experiences with
                    clean UI and scalable architecture.
                </p>

            </motion.div>

            {/* CONTENT */}
            <div
                className="
                    mt-20
                    grid
                    md:grid-cols-[1.2fr_0.8fr]
                    gap-8
                "
            >

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="
                        relative
                        overflow-hidden
                        rounded-4xl
                        border
                        border-white/10
                        bg-white/3
                        backdrop-blur-sm
                        p-8
                    "
                >

                    {/* INNER GLOW */}
                    <div
                        className="
                            absolute
                            top-0
                            right-0
                            w-64
                            h-64
                            rounded-full
                            bg-blue-500/10
                            blur-3xl
                        "
                    />

                    {/* AVAILABILITY */}
                    <div
                        className="
                            relative
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-emerald-400/20
                            bg-emerald-500/10
                            px-4
                            py-2
                            text-sm
                            text-emerald-300
                        "
                    >

                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                        Available for freelance

                    </div>

                    {/* TITLE */}
                    <h3
                        className="
                            relative
                            mt-8
                            text-3xl
                            md:text-4xl
                            font-bold
                            leading-tight
                            text-white
                        "
                    >
                        Have an idea,
                        <br />
                        let&apos;s turn it into reality.
                    </h3>

                    {/* DESC */}
                    <p
                        className="
                            relative
                            mt-6
                            max-w-xl
                            text-gray-400
                            leading-relaxed
                        "
                    >
                        I enjoy building modern web applications with
                        smooth interactions, responsive layouts,
                        and scalable backend systems.
                    </p>

                    {/* EMAIL CARD */}
                    <a
                        href="mailto:ryhntry@gmail.com"
                        className="
                            relative
                            mt-10
                            flex
                            items-center
                            gap-4
                            rounded-3xl
                            border
                            border-white/10
                            bg-black/30
                            px-6
                            py-5
                            transition-all
                            duration-300
                            hover:border-blue-400/30
                            hover:bg-blue-500/5
                        "
                    >

                        {/* ICON */}
                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-blue-500/10
                                flex
                                items-center
                                justify-center
                                text-blue-400
                            "
                        >
                            <Mail size={22} />
                        </div>

                        {/* TEXT */}
                        <div className="flex-1">

                            <p className="text-sm text-gray-500">
                                Email Me
                            </p>

                            <p className="mt-1 text-white">
                                ryhntry@gmail.com
                            </p>

                        </div>

                        <ArrowUpRight
                            size={20}
                            className="text-gray-400"
                        />

                    </a>

                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="
                        flex
                        flex-col
                        gap-6
                    "
                >

                    {/* CARD 1 */}
                    <div
                        className="
                            rounded-4xl
                            border
                            border-white/10
                            bg-white/3
                            backdrop-blur-sm
                            p-7
                        "
                    >

                        <p className="text-sm text-gray-500">
                            Response Time
                        </p>

                        <h3
                            className="
                                mt-3
                                text-2xl
                                font-semibold
                                text-white
                            "
                        >
                            Within 24 Hours
                        </h3>

                    </div>

                    {/* CARD 2 */}
                    <div
                        className="
                            rounded-4xl
                            border
                            border-white/10
                            bg-white/3
                            backdrop-blur-sm
                            p-7
                        "
                    >

                        <p className="text-sm text-gray-500">
                            Specialization
                        </p>

                        <h3
                            className="
                                mt-3
                                text-2xl
                                font-semibold
                                text-white
                            "
                        >
                            Frontend & Fullstack Web
                        </h3>

                    </div>

                    {/* SOCIAL CARD */}
                    <div
                        className="
                            rounded-4xl
                            border
                            border-white/10
                            bg-white/3
                            backdrop-blur-sm
                            p-7
                        "
                    >

                        <p className="text-sm text-gray-500">
                            Social Links
                        </p>

                        <div className="mt-6 flex items-center gap-4">

                            {/* GITHUB */}
                            <a
                                href="https://github.com/Reeyyyh"
                                target="_blank"
                                className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-black/30
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-400
                                    transition-all
                                    duration-300
                                    hover:text-white
                                    hover:border-blue-400/30
                                    hover:bg-blue-500/10
                                "
                            >
                                <FaGithub size={20} />
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-black/30
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-400
                                    transition-all
                                    duration-300
                                    hover:text-pink-400
                                    hover:border-pink-400/30
                                    hover:bg-pink-500/10
                                "
                            >
                                <FaInstagram size={20} />
                            </a>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}