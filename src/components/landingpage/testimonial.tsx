"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils" // atau "@/utils/cn" sesuai struktur projectmu

const testimonials = [
    {
        stars: 5,
        text: "Layanan sangat memuaskan! Desainnya modern, sesuai kebutuhan bisnis saya, dan langsung bisa diimplementasikan tanpa banyak revisi.",
        name: "Andi",
    },
    {
        stars: 4,
        text: "UI sangat mudah dipahami, developer jadi lebih cepat kerja. Walaupun ada beberapa detail kecil yang perlu disesuaikan, overall sangat membantu.",
        name: "Budi",
    },
    {
        stars: 5,
        text: "Komunikasi enak, hasil desain rapi banget, dan selalu terbuka untuk feedback. Prosesnya jadi terasa lebih ringan dan profesional.",
        name: "Citra",
    },
    {
        stars: 4,
        text: "Animasi halus, user experience meningkat drastis. Kalau ditambah dokumentasi lebih detail pasti akan semakin sempurna.",
        name: "Dewi",
    },
    {
        stars: 5,
        text: "Suka banget sama hasil akhirnya, simple tapi elegan. Desainnya bikin aplikasi terlihat lebih premium dan nyaman digunakan.",
        name: "Eko",
    },
    {
        stars: 5,
        text: "Cepat, responsif, dan profesional. Semua permintaan saya ditanggapi dengan baik, hasilnya bahkan lebih bagus dari ekspektasi. Highly recommended!",
        name: "Farah",
    },
]

export default function TestimonialMarquee() {
    return (
        <div className="overflow-hidden w-full bg-transparent py-10">
            <motion.div
                className="flex gap-6"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            >
                {[...testimonials, ...testimonials].map((t, i) => (
                    <div
                        key={i}
                        className={cn(
                            "min-h-[300px] max-w-sm bg-white rounded-xl shadow-md p-4 text-center flex flex-col items-center justify-center",
                            "min-w-[280px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px]",
                            t.stars === 5 && "border-2 border-yellow-400" // highlight kalau 5 ⭐
                        )}
                    >
                        {/* Stars */}
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {Array.from({ length: t.stars }).map((_, idx) => (
                                <Star
                                    key={idx}
                                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                />
                            ))}
                        </div>

                        {/* Text */}
                        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-3">
                            {t.text}
                        </p>

                        {/* Name */}
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                            – {t.name}
                        </h3>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
