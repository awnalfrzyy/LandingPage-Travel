"use client";
import Image from "next/image";
import Button from "@/components/ui/buttom";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import SpinLogo from "@/components/landingpage/spinlogo";
import TopNavbar from "@/components/landingpage/topNavbar";
import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/card";
import TestimonialMarquee from "@/components/landingpage/testimonial";
import Footer from "@/components/landingpage/footer";

export default function Home() {
  // Animation variants with improved timing
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const stats = [
    { number: "200+", text: "Guided Tours Annually", align: "items-start" },
    { number: "95%", text: "Satisfied Clients", align: "items-start" },
    { number: "1000+", text: "5 Star Reviews", align: "items-end" },
    { number: "800+", text: "Trusted Partners", align: "items-end" },
  ];

  const images = [
    { src: "/models/pexels-pixabay-38238.jpg", span: "md:col-span-2" },
    { src: "/models/pexels-asadphoto-1268855.jpg", span: "md:col-span-2" },
  ];

  const DataCard = [
    {
      title: "Adventure Tours",
      desc: "Experience thrilling adventures in breathtaking locations with our expert guides and premium safety equipment.",
      img: "/models/pexels-aronvisuals-1643130.jpg",
    },
    {
      title: "Cultural Experiences",
      desc: "Immerse yourself in local cultures through authentic experiences, traditional cuisine, and meaningful connections.",
      img: "/models/pexels-aronvisuals-1643130.jpg",
    },
    {
      title: "Luxury Escapes",
      desc: "Indulge in premium accommodations and exclusive experiences tailored for the discerning traveler.",
      img: "/models/pexels-aronvisuals-1643130.jpg",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Improved responsive design */}
      <div className="relative w-full h-screen min-h-[600px]">
        <Image
          src="/models/bg.jpg"
          alt="Travel destination background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute top-0 left-0 w-full z-50">
          <TopNavbar />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 sm:mb-8 max-w-[900px] leading-tight"
          >
            Your gateway to unforgettable{" "}
            <span className="font-medium text-[#d9d9d9d9]">Journeys</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 sm:mb-12 max-w-[800px] leading-relaxed opacity-90"
          >
            Embark on adventures that inspire, explore destinations that
            captivate, and create memories that last a lifetime. Your journey
            starts here!
          </motion.p>
          <motion.div initial="hidden" animate="show" variants={fadeIn}>
            <Button className="flex gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" variant="primary">
              Get In Touch <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Main Content - Enhanced spacing and responsive design */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="w-full max-w-7xl mx-auto bg-white py-16 sm:py-20 lg:py-24 min-h-screen text-black">
          {/* Heading Section - Improved responsive layout */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 sm:gap-12 lg:gap-16"
          >
            <motion.div variants={fadeIn} className="flex flex-col gap-4 sm:gap-6 lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                The Heart of Your Journey
              </h1>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                Experience unforgettable journeys with us, where every
                destination feels like home and every moment becomes a treasured memory.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed">
                At Golbeaterk, we believe that every journey is more than a
                destination – its a story waiting to be told.{" "}
                <span className="text-gray-500 font-light">
                  Our passion is to inspire, guide, and connect travelers
                </span>{" "}
                with extraordinary experiences around the world.
              </h2>
            </motion.div>
          </motion.div>
          {/* Enhanced Grid Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <motion.div
              variants={fadeIn}
              className={`relative h-[220px] sm:h-[280px] lg:h-[320px] ${images[0].span} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <Image
                src={images[0].src}
                alt="Beautiful travel destination showcasing natural landscapes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className={`rounded-xl sm:rounded-2xl bg-gray-50/80 backdrop-blur-sm flex flex-col ${stat.align} justify-center p-4 sm:p-6 lg:p-8 hover:bg-gray-100/80 transition-colors duration-300`}
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-snug">
                  {stat.text}
                </p>
              </motion.div>
            ))}
            <motion.div
              variants={fadeIn}
              className={`relative h-[220px] sm:h-[280px] lg:h-[320px] ${images[1].span} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <Image
                src={images[1].src}
                alt="Stunning travel photography of exotic destinations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
          {/* Destinations Section - Enhanced responsive design */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mt-20 sm:mt-28 lg:mt-36"
          >
            <motion.div
              variants={fadeIn}
              className="relative w-full h-[280px] sm:h-[350px] lg:w-[55%] lg:h-[400px] xl:h-[450px]"
            >
              <Image
                src="/models/pexels-pixabay-38238.jpg"
                alt="Top travel destination for 2024"
                fill
                className="object-cover rounded-xl sm:rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="lg:w-[45%] flex flex-col justify-center gap-6 sm:gap-8"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Top Destinations to Explore in 2024
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                Discover the most captivating destinations of 2024, where
                adventure, culture, and natural beauty converge. From hidden gems
                to iconic landmarks, let us guide you to experiences that will
                transform your perspective and create lasting memories.
              </p>
              <Button variant="secondary" className="w-fit text-base sm:text-lg px-6 py-3">
                Explore Destinations
              </Button>
            </motion.div>
          </motion.div>
          {/* Partner Section - Improved spacing */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mt-20 sm:mt-28 lg:mt-36"
          >
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16">
              Our Trusted Partners
            </h2>
            <SpinLogo />
          </motion.div>
          {/* Services Section - Enhanced with better content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-20 sm:mt-28 lg:mt-36 max-w-full mx-auto"
          >
            <motion.div variants={fadeIn} className="flex flex-col gap-6 sm:gap-8">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl max-w-4xl leading-tight">
                Tailored Experiences for Every Type of Traveler
              </h2>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
                  Whether you re seeking heart-pumping adventures, cultural immersion,
                  or luxurious relaxation, we craft personalized travel experiences
                  that match your unique style and preferences. Every journey is
                  designed to exceed your expectations.
                </p>
                <Button variant="secondary" className="shrink-0 text-base sm:text-lg px-6 py-3">
                  View All Services
                </Button>
              </div>
            </motion.div>
            {/* Enhanced Card Grid */}
            <motion.div variants={staggerContainer} className="mt-12 sm:mt-16 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {DataCard.map((item, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                      className="w-full h-[450px] sm:h-[480px] lg:h-[520px] hover:transform hover:scale-105 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <div className="backdrop-blur-sm mt-20 sm:mt-28 lg:mt-36 py-16 sm:py-20 lg:py-24">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="text-black text-center mb-12 sm:mb-16 lg:mb-20"
              >
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 lg:mb-8">
                  What Our Travelers Say
                </h2>
                <p className="font-medium text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our travelers are at the heart of everything we do, and their
                  stories inspire us to create even more extraordinary experiences
                  for future adventurers.
                </p>
              </motion.div>
              <TestimonialMarquee />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Testimonial Section - Enhanced spacing */}
    </div>
  );
}