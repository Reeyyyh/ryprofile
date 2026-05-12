"use client";

import { motion, MotionValue } from "framer-motion";
import IconTheme from "../themes/IconTheme";

type Props = {
    loading: boolean;
    sidebarOpen: boolean;
    yBgFar: MotionValue<string>;
    yBgMid: MotionValue<string>;
    yBgNear: MotionValue<string>;
    scaleMid: MotionValue<number>;
};

export default function HeroBackground({
    loading,
    sidebarOpen,
    yBgFar,
    yBgMid,
    yBgNear,
    scaleMid,
}: Props) {
    return (
        <>
            {/* VIDEO BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`
        w-full
        h-full
        object-cover
        duration-700
        ease-out
        brightness-[0.60]
        contrast-125
        saturate-125
        ${sidebarOpen ? "object-[center_-230px]" : "object-[center_-260px]"}
    `}
                >
                    <source
                        src="/webm/blackhole.webm"
                        type="video/webm"
                    />
                </video>

            </div>
      
            {/* TECH ECOSYSTEM */}
            <motion.div
                style={{
                    y: yBgMid,
                    scale: scaleMid,
                }}
                className="absolute inset-0 z-50 pointer-events-none"
            >
                {!loading && <IconTheme />}
            </motion.div>

            {/* LEFT BLUE NEBULA */}
            <motion.div
                style={{ y: yBgFar }}
                className="
                    absolute
                    inset-0
                    z-20
                    opacity-50
                "
            >
                <div
                    className="
                        w-full
                        h-full
                        bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.35),transparent_55%)]
                    "
                />
            </motion.div>

            {/* RIGHT CYAN GLOW */}
            <motion.div
                style={{ y: yBgNear }}
                className="
                    absolute
                    inset-0
                    z-25
                    opacity-50
                "
            >
                <div
                    className="
                        w-full
                        h-full
                        bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.18),transparent_45%)]
                    "
                />
            </motion.div>

            {/* DARK FILM OVERLAY */}
            <div className="absolute inset-0 bg-black/30 z-20" />

            {/* CENTER LIGHT */}
            <motion.div
                style={{ y: yBgNear }}
                className="
                    absolute
                    inset-0
                    z-40
                    pointer-events-none
                "
            >
                <div
                    className="
                        w-full
                        h-full
                        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]
                    "
                />
            </motion.div>

            {/* EXTRA CINEMATIC VIGNETTE */}
            <div
                className="
                    absolute
                    inset-0
                    z-40
                    pointer-events-none
                    bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.55)_100%)]
                "
            />
        </>
    );
}