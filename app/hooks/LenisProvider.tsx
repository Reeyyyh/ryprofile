"use client";

import { ReactNode, useEffect } from "react";

import Lenis from "lenis";

export default function LenisProvider({
    children,
}: {
    children: ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,

            smoothWheel: true,

            duration: 1.8,

            wheelMultiplier: 0.8,

            touchMultiplier: 1.2,
        });

        // CUSTOM GLOBAL
        (window as any).__lenis = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}