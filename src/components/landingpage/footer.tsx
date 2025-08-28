import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* About Us */}
                <div>
                    <h2 className="text-xl font-bold mb-4">TravelEase</h2>
                    <p className="text-gray-200 text-sm leading-relaxed">
                        TravelEase adalah platform perjalanan modern yang membantu Anda menemukan destinasi terbaik,
                        memesan tiket, hotel, hingga membuat itinerary perjalanan secara mudah. Kami hadir untuk
                        memastikan pengalaman liburan Anda lebih praktis, aman, dan menyenangkan.
                    </p>
                </div>

                {/* Destinations */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Destinasi Populer</h3>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li>Bali, Indonesia</li>
                        <li>Bangkok, Thailand</li>
                        <li>Tokyo, Jepang</li>
                        <li>Paris, Prancis</li>
                        <li>Dubai, UEA</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li>Pemesanan Tiket Pesawat</li>
                        <li>Booking Hotel & Villa</li>
                        <li>Paket Wisata Custom</li>
                        <li>Itinerary Planner</li>
                        <li>Rental Transportasi</li>
                    </ul>
                </div>

                {/* Contact + Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-200 mb-2">
                        <MapPin size={18} /> mars
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-200 mb-2">
                        <Phone size={18} /> +62 812-9999-0000
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-200 mb-4">
                        <Mail size={18} /> support@travelease.com
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between border-t border-white pt-6">
                <p className="text-sm text-gray-300">
                    © 2025 TravelEase. All rights reserved. | Syarat & Ketentuan | Kebijakan Privasi
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-yellow-400"><Facebook /></a>
                    <a href="#" className="hover:text-yellow-400"><Instagram /></a>
                    <a href="#" className="hover:text-yellow-400"><Twitter /></a>
                    <a href="#" className="hover:text-yellow-400"><Youtube /></a>
                </div>
            </div>
        </footer>
    );
}
