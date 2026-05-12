"use client";

import { motion, useScroll, useTransform, } from "framer-motion";

import { useRef } from "react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

type Props = {
    loading: boolean;
    sidebarOpen: boolean;
};

export default function HeroSection({
    loading,
    sidebarOpen,
}: Props) {

    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: loading ? undefined : ref,
        offset: ["start start", "end start"],
    });

    // PARALLAX
    const yBgFar = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yBgMid = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const yBgNear = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
    const scaleMid = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            ref={ref}
            className="
                relative
                h-screen
                flex
                items-center
                justify-center
                overflow-hidden
            "
        >
            {/* BACKGROUND */}
            <HeroBackground
                loading={loading}
                sidebarOpen={sidebarOpen}
                yBgFar={yBgFar}
                yBgMid={yBgMid}
                yBgNear={yBgNear}
                scaleMid={scaleMid}
                />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 z-20" />

            {/* CONTENT ONLY SHIFT */}
            
                <HeroContent
                    yContent={yContent}
                    opacity={opacity}
                    loading={loading}
                />
            
        </section>
    );
}