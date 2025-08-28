"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type CardProps = {
    title: string
    desc: string
    img: string
    className?: string
}

export default function Card({ title, desc, img, className }: CardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`relative rounded-xl overflow-hidden cursor-pointer ${className}`}
        >
            <Image
                src={img}
                alt={title}
                fill
                className="object-cover brightness-50"
            />

            {/* Overlay text */}
            <div className="absolute bottom-2.5 left-0 right-0 bg-transparent p-3 text-white">
                <h1 className="font-semibold text-3xl">{title}</h1>
                <p className="text-xs">{desc}</p>
            </div>
        </motion.div>
    )
}
