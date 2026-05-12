import { MapPin, Code2, Layers, Palette, Sparkles, MailIcon } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="
                                        relative
                                        max-w-6xl
                                        mx-auto
                                        mt-36
                                        px-6
                                    "
        >
            {/* GRID BACKGROUND */}
            <div
                className="
                                            absolute inset-0 -z-10 opacity-20
                                            bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
                                            bg-size-[60px_60px]
                                        "
            />

            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    About Me
                </h2>
            </div>

            {/* MAIN GRID */}
            <div className="grid lg:grid-cols-[35%_65%] gap-8 items-stretch">

                {/* LEFT CARD */}
                <div
                    className="
                                                relative
                                                rounded-3xl
                                                border border-white/10
                                                bg-white/5
                                                backdrop-blur-sm
                                                p-10
                                                overflow-hidden
                                                min-h-full
                                            "
                >
                    {/* ANIMATED GLOW ORBIT */}
                    <motion.div
                        className="
                                absolute
                                inset-0
                                pointer-events-none
                            "
                        animate={{
                            rotate: 360,
                            scale: [1, 1.03, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* TOP GLOW */}
                        <div
                            className="
                                    absolute
                                    -top-20
                                    left-1/2
                                    -translate-x-1/2
                                    w-40
                                    h-40
                                    bg-blue-500/20
                                    blur-3xl
                                    rounded-full
                                "
                        />

                        {/* BOTTOM GLOW */}
                        <div
                            className="
                                    absolute
                                    -bottom-20
                                    left-1/2
                                    -translate-x-1/2
                                    w-40
                                    h-40
                                    bg-cyan-500/20
                                    blur-3xl
                                    rounded-full
                                "
                        />
                    </motion.div>

                    {/* CONTENT */}
                    <div className="relative z-10 text-center h-full flex flex-col justify-center">

                        <div
                            className="
                                                        w-24 h-24 mx-auto
                                                        rounded-2xl
                                                        bg-linear-to-br from-blue-500/20 to-cyan-500/10
                                                        border border-blue-400/20
                                                        flex items-center justify-center
                                                        text-3xl font-bold
                                                        shadow-lg shadow-blue-500/10
                                                    "
                        >
                            R
                        </div>

                        <h3 className="mt-6 text-xl font-semibold">
                            Reeyyyh
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Full-stack Developer
                        </p>

                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                            <MapPin size={16} className="text-red-400" />
                            <span>Malang, Indonesia</span>
                        </div>

                        {/* SOCIALS */}
                        <div className="mt-6 flex items-center justify-center gap-3">

                            <a
                                href="https://github.com/Reeyyyh"
                                target="_blank"
                                className="
                                    w-10 h-10
                                    rounded-xl
                                    border border-white/10
                                    bg-white/5
                                    flex items-center justify-center
                                    text-gray-400
                                    hover:text-white
                                    hover:border-blue-400/30
                                    hover:bg-blue-500/10
                                    transition-all
                                    duration-300
                                "
                            >
                                <FaGithub size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/rreeyy_hn/"
                                target="_blank"
                                className="
                                    w-10 h-10
                                    rounded-xl
                                    border border-white/10
                                    bg-white/5
                                    flex items-center justify-center
                                    text-gray-400
                                    hover:text-pink-400
                                    hover:border-pink-400/30
                                    hover:bg-pink-500/10
                                    transition-all
                                    duration-300
                                "
                            >
                                <FaInstagram size={18} />
                            </a>

                            {/* LINKEDIN */}
                            {/* <a
                                href="https://www.linkedin.com/in/mohamad-raihan-1011b825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                className="
                                    w-10 h-10
                                    rounded-xl
                                    border border-white/10
                                    bg-white/5
                                    flex items-center justify-center
                                    text-gray-400
                                    hover:text-blue-400
                                    hover:border-blue-400/30
                                    hover:bg-blue-500/10
                                    transition-all duration-300
                                "
                            >
                                <FaLinkedin size={18} />
                            </a> */}

                            {/* EMAIL */}
                            <a
                                href="mailto:ryhntry@gmail.com"
                                className="
                                    w-10 h-10
                                    rounded-xl
                                    border border-white/10
                                    bg-white/5
                                    flex items-center justify-center
                                    text-gray-400
                                    hover:text-red-400
                                    hover:border-red-400/30
                                    hover:bg-red-500/10
                                    transition-all duration-300
                                "
                            >
                                <MailIcon size={20} />
                            </a>

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6 h-full">

                    {/* ABOUT CARD */}
                    <div
                        className="
                                                    relative
                                                    rounded-3xl
                                                    border border-white/10
                                                    bg-white/5
                                                    backdrop-blur-sm
                                                    p-10
                                                    flex-1
                                                "
                    >
                        <h3 className="text-xl font-semibold text-white">
                            Tentang Saya
                        </h3>

                        <p className="text-gray-300 mt-4 leading-relaxed">
                            Saya seorang full-stack developer yang fokus pada web modern,
                            scalable system, dan UI yang smooth. Saya suka membangun
                            interface yang tidak hanya fungsional, tapi juga terasa hidup
                            saat digunakan.
                        </p>
                    </div>

                    {/* ICON ROW */}
                    <div className="grid grid-cols-4 gap-3">

                        {[
                            { icon: Code2, label: "Frontend" },
                            { icon: Layers, label: "Backend" },
                            { icon: Palette, label: "UI/UX" },
                            { icon: Sparkles, label: "Clean" },
                        ].map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={i}
                                    className="
                                                                relative
                                                                flex flex-col items-center justify-center
                                                                rounded-2xl
                                                                border border-white/10
                                                                bg-white/5
                                                                py-6
                                                                hover:bg-blue-500/5
                                                                hover:border-blue-400/30
                                                                transition-all
                                                                duration-300
                                                                group
                                                            "
                                >
                                    {/* FLOAT ICON */}
                                    <div
                                        className="
                                                                    absolute -top-3
                                                                    bg-black/40
                                                                    border border-white/10
                                                                    p-1.5
                                                                    rounded-full
                                                                    group-hover:border-blue-400/30
                                                                    transition
                                                                "
                                    >
                                        <Icon
                                            size={14}
                                            className="
                                                                        text-blue-400
                                                                        group-hover:scale-110
                                                                        transition
                                                                    "
                                        />
                                    </div>

                                    <span className="text-[11px] text-gray-300 mt-4">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}