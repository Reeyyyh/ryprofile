"use client";

import {
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

// icon SVG
import { LaravelDark } from "@/app/icons/Laravel";
import { TailwindcssDark } from "@/app/icons/Tailwind";
import { NextjsDark } from "@/app/icons/Next";
import { MysqlDark } from "@/app/icons/MySql";

type Props = {
    yContent: MotionValue<string>;
    opacity: MotionValue<number>;
    loading: boolean;
};

export default function HeroContent({
    yContent,
    opacity,
    loading,
}: Props) {
    const glow = "rgba(255,255,255,0.18)";

    /* MOUSE PARALLAX */
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 40,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 40,
        damping: 20,
    });

    const icons = [
        {
            Component: NextjsDark,
            size: "w-28 h-28",
            className:
                "absolute top-[8%] right-[12%] z-30",
            floatY: 14,
            rotate: 4,
            depth: 1.8,
        },
        {
            Component: LaravelDark,
            size: "w-24 h-24",
            className:
                "absolute top-[35%] left-[12%] z-20",
            floatY: 10,
            rotate: -3,
            depth: 1.5,
        },
        {
            Component: TailwindcssDark,
            size: "w-24 h-24",
            className:
                "absolute bottom-[18%] right-[5%] z-10",
            floatY: 16,
            rotate: 5,
            depth: 1.1,
        },
        {
            Component: MysqlDark,
            size: "w-20 h-20",
            className:
                "absolute bottom-[6%] left-[32%] z-0",
            floatY: 8,
            rotate: -4,
            depth: 0.8,
        },
    ];

    return (
        <motion.div
            style={{ y: yContent, opacity }}
            className="relative z-50 max-w-7xl mx-auto px-6"
        >
            <div className="grid md:grid-cols-2 items-center min-h-180 gap-10">

                {/* LEFT SIDE - HERO TEXT */}
                <div className="relative z-40 max-w-2xl">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                            loading
                                ? {}
                                : {
                                    opacity: 1,
                                    y: 0,
                                }
                        }
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="space-y-7"
                    >
                        {/* LABEL */}
                        <div
                            className="
                                                            inline-flex
                                                            items-center
                                                            gap-2
                                                            px-4
                                                            py-2
                                                            rounded-full
                                                            border
                                                            border-white/10
                                                            bg-white/5
                                                            backdrop-blur-md
                                                            text-sm
                                                            text-gray-300
                                                                "
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

                            Fullstack Web Developer
                        </div>

                        {/* TITLE */}
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                            Crafting{" "}

                            <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.9)]">
                                modern web
                            </span>{" "}

                            experiences
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
                            Membangun aplikasi web yang cepat,
                            scalable, dan interaktif menggunakan
                            teknologi modern seperti Next.js,
                            Laravel, dan MySQL.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4 pt-2">

                            {/* EXPLORE */}
                            <button
                                onClick={() => {
                                    (window as any).__lenis?.scrollTo(
                                        "#about"
                                    );
                                }}
                                className="
                                    px-7
                                    py-3
                                    rounded-xl
                                    bg-blue-600
                                    hover:bg-blue-700
                                    transition
                                    shadow-[0_0_35px_rgba(59,130,246,0.35)]
                                "
                            >
                                Explore
                            </button>

                            {/* CONTACT */}
                            <button
                                onClick={() => {
                                    (window as any).__lenis?.scrollTo(
                                        "#contact"
                                    );
                                }}
                                className="
                                            px-7
                                            py-3
                                            rounded-xl
                                            border
                                            border-white/15
                                            bg-white/5
                                            backdrop-blur-sm
                                            hover:bg-white/10
                                            transition
                                        "
                            >
                                Contact
                            </button>

                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE - FLOATING ICON WORLD */}
                <div
                    className="relative h-150 hidden md:block"
                    onMouseMove={(e) => {
                        const rect =
                            e.currentTarget.getBoundingClientRect();

                        const x =
                            e.clientX - rect.left;

                        const y =
                            e.clientY - rect.top;

                        const moveX =
                            (x / rect.width - 0.5) * 60;

                        const moveY =
                            (y / rect.height - 0.5) * 60;

                        mouseX.set(moveX);
                        mouseY.set(moveY);
                    }}
                >
                    {/* GLOW BACKGROUND */}
                    <div
                        className="
                                                                absolute
                                                                inset-0
                                                                rounded-full
                                                                blur-3xl
                                                                opacity-30
                                                                bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)]
                                                            "
                    />

                    {/* ICONS */}
                    {icons.map(
                        (
                            {
                                Component,
                                size,
                                className,
                                floatY,
                                rotate,
                                depth,
                            },
                            i
                        ) => {

                            const x = useTransform(
                                smoothX,
                                (v) => v * depth
                            );

                            const y = useTransform(
                                smoothY,
                                (v) => v * depth
                            );

                            return (
                                <motion.div
                                    key={i}
                                    className={`${className} pointer-events-none`}
                                    style={{
                                        x,
                                        y,
                                    }}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.5,
                                        y: 100,
                                    }}
                                    animate={
                                        loading
                                            ? {}
                                            : {
                                                opacity: 1,
                                                scale: 1,
                                                y: 0,
                                            }
                                    }
                                    transition={{
                                        duration: 1,
                                        delay:
                                            i * 0.2 + 0.5,
                                        ease: "easeOut",
                                    }}
                                >
                                    {/* FLOATING */}
                                    <motion.div
                                        animate={{
                                            y: [
                                                0,
                                                -floatY,
                                                0,
                                            ],
                                            rotate: [
                                                0,
                                                rotate,
                                                -rotate,
                                                0,
                                            ],
                                        }}
                                        transition={{
                                            duration: 5 + i,
                                            repeat:
                                                Infinity,
                                            ease:
                                                "easeInOut",
                                        }}
                                    >
                                        {/* CARD */}
                                        <div
                                            className="
                                                                                    rounded-[28px]
                                                                                    p-5
                                                                                    border
                                                                                    border-white/5
                                                                                    bg-white/5
                                                                                    backdrop-blur-xl
                                                                                "
                                            style={{
                                                boxShadow: `
                                                                                        0 0 30px rgba(255,255,255,0.04),
                                                                                        0 0 60px rgba(59,130,246,0.08)
                                                                                    `,
                                            }}
                                        >
                                            <Component
                                                className={`${size} opacity-90 hover:scale-110 transition duration-500`}
                                                style={{
                                                    filter: `
                                                                                            drop-shadow(0 0 12px ${glow})
                                                                                            drop-shadow(0 0 30px rgba(59,130,246,0.25))
                                                                                        `,
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        }
                    )}

                    {/* AMBIENT GLOW */}
                    <div className="absolute top-[18%] left-[35%] w-28 h-28 rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="absolute bottom-[20%] right-[25%] w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" />
                </div>
            </div>
        </motion.div>
    );
}