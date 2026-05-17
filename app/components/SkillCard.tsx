"use client";

import { motion } from "framer-motion";

export default function SkillCard({
    name,
    icon: Icon,
    color,
}: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
            }}
            viewport={{ once: true }}
            className="
                flex
                flex-col
                items-center
            "
        >

            {/* HEXAGON */}
            <div
                className="
                    relative
        w-16
        h-16
        sm:w-20
        sm:h-20
        md:w-32
        md:h-32
        flex
        items-center
        justify-center
                "
            >

                {/* BORDER */}
                <div
                    className="
                        absolute
                        inset-0
                        p-1
                        bg-linear-to-br
                        from-blue-500/40
                        via-cyan-400/20
                        to-white/5
                    "
                    style={{
                        clipPath:
                            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                    }}
                >

                    {/* INNER */}
                    <div
                        className="
                            w-full
                            h-full
                            flex
                            items-center
                            justify-center
                            bg-black/80
                            backdrop-blur-xl
                        "
                        style={{
                            clipPath:
                                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                        }}
                    >

                        {/* ICON */}
                        <Icon
                            className={`
                                text-xl
        sm:text-2xl
        md:text-4xl
        ${color}
                            `}
                        />

                    </div>
                </div>
            </div>

            {/* NAME */}
            <p
                className="
                    mt-2
        md:mt-4
        text-[10px]
        sm:text-xs
        md:text-sm
        font-medium
        text-gray-400
                "
            >
                {name}
            </p>

        </motion.div>
    );
}