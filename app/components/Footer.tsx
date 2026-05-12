"use client";

import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import {
    ArrowUpRight,
    ArrowUp,
    Mail,
} from "lucide-react";

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className="
                mt-20
                border-t
                border-white/10
                bg-black
            "
        >
            <div
                className="
                max-w-6xl
                mx-auto
                px-6
                py-8
                flex
                flex-col
                md:flex-row
                items-center
                justify-between
                gap-5
                "
            >

                {/* LEFT */}
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Reeyyyh
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        © 2026 All rights reserved.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    <a
                        href="https://github.com/Reeyyyh"
                        target="_blank"
                        className="
                    text-gray-500
                    hover:text-white
                    transition-colors
                    "
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://www.instagram.com/rreeyy_hn/"
                        target="_blank"
                        className="
                    text-gray-500
                    hover:text-pink-400
                    transition-colors
                    "
                    >
                        <FaInstagram size={18} />
                    </a>

                    {/* <a
                        href="https://www.linkedin.com/in/mohamad-raihan-1011b825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        className="
                    text-gray-500
                    hover:text-blue-400
                    transition-colors
                    "
                    >
                        <FaLinkedin size={18} />
                    </a> */}

                    <button
                        onClick={scrollToTop}
                        className="
                    ml-2
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-white
                    hover:border-blue-400/30
                    transition-all
                    "
                    >
                        <ArrowUp size={16} />
                    </button>

                </div>
            </div>
        </footer>
    );
}