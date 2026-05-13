"use client";

import { motion } from "framer-motion";

import {
    Home,
    User,
    Layers3,
    FolderKanban,
    Mail,
} from "lucide-react";

const navItems = [
    {
        name: "Home",
        href: "#home",
        icon: Home,
    },
    {
        name: "About",
        href: "#about",
        icon: User,
    },
    {
        name: "Tech Stack",
        href: "#tech",
        icon: Layers3,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: FolderKanban,
    },
    {
        name: "Contact",
        href: "#contact",
        icon: Mail,
    },
];

export default function NavbarMobile() {

    return (
        <motion.div
            initial={{
                y: 100,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="
                fixed
                bottom-4
                left-1/2
                -translate-x-1/2
                z-999
                w-[92%]
                max-w-sm
            "
        >
            <div
                className="
                    relative
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/40
                    backdrop-blur-2xl
                    shadow-[0_0_40px_rgba(59,130,246,0.12)]
                    overflow-hidden
                "
            >
                {/* BACKGROUND GLOW */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_70%)]
                        pointer-events-none
                    "
                />

                {/* NAVIGATION */}
                <nav
                    className="
                        relative
                        z-10
                        flex
                        items-center
                        justify-between
                        px-2
                        py-2
                    "
                >
                    {navItems.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={i}
                                onClick={() => {
                                    (window as any).__lenis?.scrollTo(
                                        item.href
                                    );
                                }}
                                className="
                                    flex-1
                                "
                            >
                                <motion.div
                                    whileTap={{
                                        scale: 0.92,
                                    }}
                                    className="
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        gap-1
                                        py-3
                                        rounded-2xl
                                        text-gray-400
                                        hover:text-white
                                        hover:bg-blue-500/10
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <Icon size={18} />

                                    <span
                                        className="
                                            text-[10px]
                                            font-medium
                                        "
                                    >
                                        {item.name}
                                    </span>
                                </motion.div>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </motion.div>
    );
}