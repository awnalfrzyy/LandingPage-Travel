'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    "/models/logo/pngegg.png",
    "/models/logo/pngegg(1).png",
    "/models/logo/pngegg(2).png",
    "/models/logo/pngegg(3).png",
];

export default function SpinLogo() {
    return (
        <div className="overflow-hidden w-full bg-white py-6">
            <motion.div
                className="flex gap-10"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            >
                {/* render 2x supaya looping mulus */}
                {[...logos, ...logos].map((logo, i) => (
                    <Image
                        key={i}
                        src={logo}
                        alt={`logo-${i}`}
                        width={280}
                        height={280}
                        className="object-contain"
                    />
                ))}
            </motion.div>
        </div>
    );
}
