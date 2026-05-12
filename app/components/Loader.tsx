"use client";

import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/space-loading.json";

export default function Loader({ isVisible }: { isVisible: boolean }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                    <div className="w-40">
                        <Lottie animationData={animationData} loop />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}