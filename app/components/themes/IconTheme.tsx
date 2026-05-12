"use client";

import { motion } from "framer-motion";

import {
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiGithub,
    SiDocker,
    SiFigma,
    SiFirebase,
    SiRedux,
    SiPrisma,
    SiSupabase,
    SiVercel,
} from "react-icons/si";

const icons = [
    {
        Icon: SiReact,
        className: "top-[8%] left-[6%]",
        size: 56,
        color: "text-[#61DAFB]",
    },
    {
        Icon: SiTypescript,
        className: "top-[14%] right-[10%]",
        size: 46,
        color: "text-[#3178C6]",
    },
    {
        Icon: SiNodedotjs,
        className: "top-[55%] left-[10%]",
        size: 44,
        color: "text-[#339933]",
    },
    {
        Icon: SiDocker,
        className: "bottom-[12%] right-[6%]",
        size: 46,
        color: "text-[#2496ED]",
    },
    {
        Icon: SiGithub,
        className: "bottom-[8%] left-[38%]",
        size: 50,
        color: "text-white",
    },
    {
        Icon: SiFirebase,
        className: "top-[36%] right-[28%]",
        size: 34,
        color: "text-[#FFCA28]",
    },
    {
        Icon: SiRedux,
        className: "top-[72%] right-[24%]",
        size: 34,
        color: "text-[#764ABC]",
    },
    {
        Icon: SiFigma,
        className: "top-[24%] left-[22%]",
        size: 20,
        color: "text-[#F24E1E]",
    },
    {
        Icon: SiPrisma,
        className: "bottom-[34%] right-[18%]",
        size: 22,
        color: "text-white",
    },
    {
        Icon: SiSupabase,
        className: "bottom-[24%] left-[50%]",
        size: 22,
        color: "text-[#3ECF8E]",
    },
    {
        Icon: SiVercel,
        className: "top-[46%] left-[36%]",
        size: 20,
        color: "text-white",
    },
];

export default function IconTheme() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

            {/* AMBIENT ROTATING RING */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
                    absolute
                    w-225
                    h-225
                    border
                    border-blue-500/10
                    rounded-full
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                "
            />

            {/* FLOATING ICONS */}
            {icons.map(
                (
                    {
                        Icon,
                        className,
                        size,
                        color,
                    },
                    i
                ) => (
                    <motion.div
                        key={i}
                        className={`absolute ${className}`}

                        initial={{
                            opacity: 0,
                            scale: 0.7,
                            y: 40,
                        }}

                        animate={{
                            opacity: [0.2, 0.45, 0.2],
                            y: [0, -12, 0],
                            rotate: [0, 2, -2, 0],
                        }}

                        transition={{
                            duration: 6 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.1,
                        }}
                    >
                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/4
                                backdrop-blur-lg
                                p-3
                            "
                            style={{
                                boxShadow: `
                                    0 0 20px rgba(59,130,246,0.08),
                                    0 0 40px rgba(59,130,246,0.04)
                                `,
                            }}
                        >
                            <Icon
                                size={size}
                                className={`${color} opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]`}/>
                        </div>
                    </motion.div>
                )
            )}

            {/* EXTRA GLOW */}
            <div className="absolute top-[18%] left-[30%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="absolute bottom-[10%] right-[20%] w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
    );
}