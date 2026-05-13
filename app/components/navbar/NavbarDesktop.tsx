"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
    Home,
    User,
    Layers3,
    FolderKanban,
    Mail,
    Menu,
    X,
} from "lucide-react";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

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

export default function NavbarDesktop({
    open,
    setOpen,
}: Props) {

    return (
        <motion.aside
            initial={{
                x: -80,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
            }}
            className="
    fixed
    top-5
    left-5
    bottom-5
    rounded-4xl
    border
    border-white/10
    bg-black/40
    backdrop-blur-2xl
    shadow-[0_0_50px_rgba(59,130,246,0.12)]
    overflow-hidden
    z-999
"
        >
            <motion.div
                animate={{
                    width: open ? 260 : 88,
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                }}
                className="
                    relative
                    h-full
                    border-r
                    border-white/10
                    bg-black/40
                    backdrop-blur-2xl
                    shadow-[0_0_50px_rgba(59,130,246,0.12)]
                    overflow-hidden
                "
            >
                {/* BACKGROUND GLOW */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_55%)]
                        pointer-events-none
                    "
                />

                {/* TOP */}
                <div
                    className="
        relative
        z-10
        p-5
    "
                >
                    {open ? (
                        <div className="flex items-center justify-between">
                            {/* TITLE */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -10,
                                }}
                                className="
                    text-white
                    font-semibold
                    text-lg
                    tracking-wide
                    whitespace-nowrap
                "
                            >
                                Reeyyyh
                            </motion.div>

                            {/* CLOSE */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setOpen(false)}
                                className="
                    w-10
                    h-10
                    rounded-xl
                    border
                    border-white/10
                    bg-white/3
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-center
                    text-gray-300
                    hover:text-white
                    hover:bg-blue-500/10
                    transition
                "
                            >
                                <X size={18} />
                            </motion.button>
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            {/* OPEN */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setOpen(true)}
                                className="
                    w-10
                    h-10
                    rounded-xl
                    border
                    border-white/10
                    bg-white/3
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-center
                    text-gray-300
                    hover:text-white
                    hover:bg-blue-500/10
                    transition
                "
                            >
                                <Menu size={18} />
                            </motion.button>
                        </div>
                    )}
                </div>

                {/* NAVIGATION */}
                <nav
                    className="
                        relative
                        z-10
                        mt-8
                        flex
                        flex-col
                        gap-2
                        px-4
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
                                className="w-full"
                            >
                                <motion.div
                                    whileHover={{
                                        x: 4,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                        px-4
                                        py-3
                                        rounded-2xl
                                        text-gray-400
                                        hover:text-white
                                        hover:bg-blue-500/10
                                        border
                                        border-transparent
                                        hover:border-blue-400/10
                                        transition-all
                                        duration-300
                                        cursor-pointer
                                    "
                                >
                                    <Icon
                                        size={20}
                                    />

                                    <AnimatePresence>
                                        {open && (
                                            <motion.span
                                                initial={{
                                                    opacity: 0,
                                                    x: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    x: -10,
                                                }}
                                                className="
                                                    whitespace-nowrap
                                                    text-sm
                                                "
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </button>
                        );
                    })}
                </nav>
            </motion.div>
        </motion.aside>
    );
}