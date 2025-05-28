"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { motion } from "framer-motion";
import {
  Instagram, Twitter, Youtube, Linkedin, ArrowRight
} from 'lucide-react';
import ScrollAnimation from "../components/ScrollAnimation";
import React from "react";
import Modal from "@/components/Modal";
import ContactForm from "../components/Contactform";

const neueMachina = localFont({
  src: '../public/fonts/NeueMachina-InktrapUltrabold.otf'
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})


export default function CreatorsSection() {
  const [brands, setBrands] = useState(0);
  const [campaigns, setCampaigns] = useState(0);
  const [creators, setCreators] = useState(0);
  const [roi, setRoi] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);


  const creatorsDetails = [
    {
      name: "Alekya Harika",
      image: "/images/image3creator.png",
      bgColor: "#8446E7",
      hoverBg: "/images/image2hover.png",
    },
    {
      name: "Pranavi Manukonda",
      image: "/images/image4creator.png",
      bgColor: "#DD5A37",
      hoverBg: "/images/hoverImage.png",
    },
    {
      name: "Alekya Harika",
      image: "/images/image3creator.png",
      bgColor: "#CD0369",
      hoverBg: "/images/image4hover.png",
    },
    {
      name: "Pranavi Manukonda",
      image: "/images/image4creator.png",
      bgColor: "#0BA8BF",
      hoverBg: "/images/image3hover.png",
    },
    {
      name: "Alekya Harika",
      image: "/images/image3creator.png",
      bgColor: "#8446E7",
      hoverBg: "/images/image2hover.png",
    },
    {
      name: "Pranavi Manukonda",
      image: "/images/image4creator.png",
      bgColor: "#DD5A37",
      hoverBg: "/images/hoverImage.png",
    },
    {
      name: "Alekya Harika",
      image: "/images/image3creator.png",
      bgColor: "#CD0369",
      hoverBg: "/images/image4hover.png",
    },
    {
      name: "Pranavi Manukonda",
      image: "/images/image4creator.png",
      bgColor: "#0BA8BF",
      hoverBg: "/images/image3hover.png",
    },
   
    
  ];


  const clientsDetails = [
    {
      name: "Meesho",
      logo: "/images/meesho.png",
      bgColor: "#2D0A31"
    },
    {
      name: "Federal Bank",
      logo: "/images/fedralBank.png",
      bgColor: "#FFFFFF"
    },
    {
      name: "Myntra",
      logo: "/images/myntra.png",
      bgColor: "#E95FA5"
    },
    {
      name: "ACT Fibernet",
      logo: "/images/act.png",
      bgColor: "#FFFFFF"
    },
    {
      name: "Joyalukkas",
      logo: "/images/joyalukkas.png",
      bgColor: "#8B1D3D"
    },
    {
      name: "UpGrad",
      logo: "/images/upgrad.png",
      bgColor: "#2D0A31"
    },
    {
      name: "Physics Wallah",
      logo: "/images/PW.jpg",
      bgColor: "#FFFFFF"
    },
    {
      name: "Domino's",
      logo: "/images/dominonew.jpg",
      bgColor: "#FFFFFF"
    },
    {
      name: "GradRight",
      logo: "/images/gradright2.png",
      bgColor: "#FFFFFF"
    },
    {
      name: "KFC",
      logo: "/images/kfc.png",
      bgColor: "#FFFFFF"
    },
    {
      name: "Amazon",
      logo: "/images/amazonnewlogo.jpg",
      bgColor: "#FFFFFF"
    },
    {
      name: "NxtWave",
      logo: "/images/nxtwave.jpg",
      bgColor: "#FFFFFF"
    },
    {
      name: "KnowledgeHut",
      logo: "/images/knowledgehut.jpg",
      bgColor: "#FFFFFF"
    },
    {
      name: "Pocket FM",
      logo: "/images/pocketfm.webp",
      bgColor: "#FFFFFF"
    },
    {
      name: "Technopaint",
      logo: "/images/technopaint.png",
      bgColor: "#FFFFFF"
    },
    {
      name: "Jio",
      logo: "/images/jio.jpg",
      bgColor: "#FFFFFF"
    },
    {
      name: "Hotstar",
      logo: "/images/hotstar.avif",
      bgColor: "#FFFFFF"
    },
  ];


  const collaborations = [
    {
      name: "Tamada Media",
      logo: "/images/tamada.png"
    },
    {
      name: "Chai Bisket",
      logo: "/images/chai.png"
    },
    {
      name: "Aha",
      logo: "/images/aha.png"
    },
    {
      name: "Silly Monks",
      logo: "/images/sillyMonks.png"
    },
    {
      name: "Tamada Media",
      logo: "/images/tamada.png"
    },
    {
      name: "Chai Bisket",
      logo: "/images/chai.png"
    },
    {
      name: "Aha",
      logo: "/images/aha.png"
    },
    {
      name: "Silly Monks",
      logo: "/images/sillyMonks.png"
    },
    {
      name: "Tamada Media",
      logo: "/images/tamada.png"
    },
    {
      name: "Chai Bisket",
      logo: "/images/chai.png"
    },
    {
      name: "Aha",
      logo: "/images/aha.png"
    },
    {
      name: "Silly Monks",
      logo: "/images/sillyMonks.png"
    },
  ];

  useEffect(() => {
    const targets = {
      brands: 100,
      campaigns: 650,
      creators: 10000,
      roi: 100
    };

    const duration = 5000; // 2 seconds duration
    const steps = 50; // number of steps
    const interval = duration / steps;

    const startTime = Date.now();

    const timer = setInterval(() => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setBrands(Math.floor(progress * targets.brands));
      setCampaigns(Math.floor(progress * targets.campaigns));
      setCreators(Math.floor(progress * targets.creators));
      setRoi(Math.floor(progress * targets.roi));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <ScrollAnimation>
        <section className="flex flex-col md:flex-row items-center justify-center py-8 sm:py-24 w-full px-4 sm:px-12 bg-black relative z-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 flex flex-col justify-center items-start"
          >
            <div className={`${neueMachina.className} mb-6`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left">
                Revolutionize your <br />
                Marketing Campaign <br />
                with <span className="text-yellow-400">Creators</span>.
              </h1>
            </div>
            <button onClick={() => setShowForm(true)} className={`${neueMachina.className} mt-6 flex items-center gap-2 h-12 px-7 rounded-md bg-black text-white text-lg font-medium border border-black hover:scale-105 transition-all duration-300 hover:bg-yellow-400 hover:text-black border-b-2 border-r-2 border-b-[#FDD300] border-r-[#FDD300] whitespace-nowrap`}>
              Explore Now<ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
          {/* Right: Illustration */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/sign.svg"
              alt="Creators Workspace Illustration"
              width={2000}
              height={1200}
              className="object-contain w-full h-auto mt-8"
              priority
            />
          </motion.div>
        </section>
      </ScrollAnimation>

      <div className="relative w-full overflow-hidden bg-black -mt-16 z-20 h-28 flex items-center">
        {/* Top tilted line */}
        <div
          className="absolute w-[400%] transform -rotate-1 left-[-150%] right-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 35%, #ffffff 35%, #ffffff 65%, transparent 65%, transparent 100%)',
            height: '1px',
            top: '15%',
            zIndex: 1,
            animation: 'slideLeft 20s linear infinite'
          }}
        />
        {/* Bottom tilted line */}
        <div
          className="absolute w-[400%] transform -rotate-1 left-[-150%] right-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 35%, #ffffff 35%, #ffffff 65%, transparent 65%, transparent 100%)',
            height: '1px',
            top: '85%',
            zIndex: 1,
            animation: 'slideLeft 20s linear infinite'
          }}
        />
        {/* Tilted text */}
        <div className={`${neueMachina.className} text-white text-xl md:text-3xl lg:text-4xl font-clash-display font-bold tracking-wider text-center transform -rotate-1 overflow-hidden w-full`}>
          <div className="relative flex justify-center">
            <div className="whitespace-nowrap animate-scroll">
              Connect – Collaborate – Create &nbsp;&nbsp; * &nbsp;&nbsp; Connect – Collaborate – Create &nbsp;&nbsp; * &nbsp;&nbsp; Connect – Collaborate – Create &nbsp;&nbsp; * &nbsp;&nbsp; Connect – Collaborate – Create &nbsp;&nbsp; *
            </div>
            <div className="whitespace-nowrap animate-scroll" aria-hidden="true">
              Connect – Collaborate – Create &nbsp;&nbsp; * &nbsp;&nbsp; Connect – Collaborate – Create &nbsp;&nbsp; * &nbsp;&nbsp; Connect – Collaborate – Create &nbsp;&nbsp; * &nbsp;&nbsp; Connect – Collaborate – Create &nbsp;&nbsp; *
            </div>
          </div>
        </div>
      </div>


      {/* Ecosystem Section */}
      <ScrollAnimation>
        <section id="about" className="relative w-full md:min-h-screen py-10 md:py-12 mt-24 px-4 flex items-center justify-center">
          {/* Smiley Emoji with floating animation */}
          <motion.div
            className="absolute top-4 left-4 sm:top-10 sm:left-10"
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/images/smileyIcon.svg"
              alt="Smiley Face"
              width={40}
              height={40}
              className="w-10 h-10 md:w-[160px] md:h-[160px]"
            />
          </motion.div>

          {/* Central Diagram */}
          <div className="relative w-full max-w-5xl">
            {/* Semi-circular segments with scale and rotate animation */}
            <motion.div
              className="relative flex justify-center"
              initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                rotate: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                rotate: {
                  duration: 0.8,
                  ease: [0.2, 0.65, 0.3, 0.9] // Custom spring-like easing
                }
              }}
            >
              <Image
                src="/images/creatorSectionCenter.png"
                alt="Creators Ecosystem"
                width={1200}
                height={700}
                className="w-full max-w-[120%] sm:max-w-[100%] md:max-w-[90%] mx-auto object-contain"
              />
            </motion.div>

            {/* Decorative Stars with floating and shine animation */}
            <motion.div
              className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
                rotate: [0, 15, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/starIcon.png"
                  alt="Decorative Stars"
                  width={50}
                  height={50}
                  className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="w-full py-10 px-4">
          <div className="mx-auto max-w-7xl">
            {/* Title */}
            <h2 className={`${neueMachina.className} text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 leading-tight`}>
              We help brands Connect better to their audience with{" "}
              <span className="text-yellow-400">Creator</span> Culture
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: brands, label: "Brands", color: "#A881E7" },
                { value: campaigns, label: "Campaigns", color: "#EA5FA5" },
                { value: creators / 1000, label: "Creator Community", suffix: "k+", color: "#F2944D" },
                { value: roi, label: "Assured ROI", suffix: "%", color: "#6DDBEB" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 sm:p-6 flex flex-col justify-center items-center rounded-lg"
                  style={{ backgroundColor: stat.color }}
                >
                  <div className={`${neueMachina.className} text-2xl sm:text-3xl md:text-5xl mb-1 sm:mb-2`}>
                    {stat.value}{stat.suffix || '+'}
                  </div>
                  <div className={`${poppins.className} text-lg sm:text-xl md:text-2xl`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>


      {/* Services Section */}
      <ScrollAnimation>
        <section id="services" className="w-full py-12 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 text-center md:text-left">
              <Image
                src="/images/rocketSection.png"
                alt="Paper Plane Icon"
                width={80}
                height={80}
                className="w-12 md:w-20"
              />
              <h2 className={`${neueMachina.className} text-2xl sm:text-3xl md:text-5xl text-white`}>
                Our Expert Services
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Cards */}
              {[
                {
                  title: "Influencer Marketing",
                  description:
                    "We help you get the true ROI (return on influencer) through a data-driven selection process and culture-relevant activation.",
                  bgColor: "bg-[#EA5FA5]",
                  imgSrc: "/images/image1.png",
                  imgAlt: "Influencer Marketing",
                },
                {
                  title: "UGC Campaigns",
                  description:
                    "User-Generated Content Campaigns, which are marketing initiatives that rely on content created by a brand's audience rather than the brand itself.",
                  bgColor: "bg-[#F2944D]",
                  imgSrc: "/images/image2.png",
                  imgAlt: "UGC Campaigns",
                },
                {
                  title: "Meme Campaigns",
                  description:
                    "From creating brand new digital IPs to ideating a campaign and getting it executed, we can do anything and we're insanely good at it.",
                  bgColor: "bg-[#A881E7]",
                  imgSrc: "/images/image3.png",
                  imgAlt: "Meme Campaigns",
                },
                {
                  title: "Content On Demand",
                  description:
                    "Source the top content from the top creators in the country. Our team has a network of exceptionally talented content creators.",
                  bgColor: "bg-[#6DDBEB]",
                  imgSrc: "/images/image4.png",
                  imgAlt: "Content On Demand",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${service.bgColor} rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6`}
                >
                  <div className="w-32 sm:w-1/2 flex justify-center">
                    <Image
                      src={service.imgSrc}
                      alt={service.imgAlt}
                      width={150}
                      height={150}
                      className="w-24 sm:w-32 md:w-40"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 text-center sm:text-left">
                    <h3 className={`${neueMachina.className} text-2xl md:text-4xl text-white font-bold mb-4`}>
                      {service.title}
                    </h3>
                    <p className="text-black text-sm font-normal md:text-base mb-4">{service.description}</p>
                    <button onClick={() => setShowForm(true)} className={`${neueMachina.className} bg-black text-white px-6 py-3 flex rounded-md items-center justify-center gap-2 transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105`}>
                      Enquire Now <span className="text-xl">→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>


      {/* Brand Registration Banner */}
      <section className="w-full py-16 bg-[#F2944D]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center md:text-left">
          {/* Heading */}
          <h2 className={`${neueMachina.className} text-2xl sm:text-3xl md:text-5xl text-white`}>
            Do you have a Brand?
          </h2>

          {/* Button */}
          <button  onClick={() => setShowForm(true)} className={`${neueMachina.className} bg-black text-white cursor-pointer w-full sm:w-80 px-4 py-4 text-xl sm:text-3xl flex items-center gap-2 justify-center relative transition-all duration-300 hover:bg-white hover:text-black hover:scale-105`}>
            Register Here
            <Image
              src="/images/cursorImage.png"
              alt="Cursor"
              width={40}
              height={40}
              className="absolute -bottom-2 -right-2 sm:w-10 sm:h-10 transition-transform duration-300 hover:rotate-12"
            />
          </button>
        </div>
      </section>


      {/* Campaign Spotlight Section */}
      <ScrollAnimation>
        <section id="campaigns" className="w-full py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            {/* Header with Smiley */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 text-center md:text-left">
              <h2 className={`${neueMachina.className} text-3xl sm:text-4xl md:text-5xl text-white`}>
                Campaign Spotlight
              </h2>
              <Image
                src="/images/loveSmily.png"
                alt="Smiley Emoji"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Description Text */}
            <p className={`${poppins.className} text-white text-center text-md sm:text-lg md:text-xl max-w-4xl mx-auto mb-16`}>
              Celebrate our journey of innovation and collaboration! Explore our past campaigns,
              each a testament to our commitment to excellence and creativity. Join us as we
              continue to redefine possibilities together.
            </p>

            {/* Campaign Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* UpGrad Card - Larger */}
              <motion.div
                className="rounded-3xl col-span-1 md:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/upgradImage.png"
                  alt="UpGrad Campaign"
                  width={800}
                  height={500}
                  className="w-full rounded-2xl"
                  style={{ objectFit: 'contain', height: 'auto' }}
                />
              </motion.div>

              {/* Amazon and Joyalukkas Cards */}
              <motion.div
                className="rounded-3xl flex flex-col gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image
                    src="/images/amazonImage.png"
                    alt="Amazon Campaign"
                    width={400}
                    height={240}
                    className="w-full rounded-2xl"
                    style={{ objectFit: 'contain', height: 'auto' }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src="/images/kajolImage.png"
                    alt="Joyalukkas Campaign"
                    width={400}
                    height={240}
                    className="w-full rounded-2xl"
                    style={{ objectFit: 'contain', height: 'auto' }}
                  />
                </motion.div>
              </motion.div>

              {/* Myntra Card */}
              <motion.div
                className="rounded-3xl h-[331px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/myntraImage.png"
                  alt="Myntra Campaign"
                  width={395}
                  height={331}
                  className="w-full h-[331px] rounded-2xl"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>

              {/* Spotify Card */}
              <motion.div
                className="rounded-3xl col-span-1 md:col-span-2 h-[331px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/spotifyImage.png"
                  alt="Spotify Campaign"
                  width={800}
                  height={331}
                  className="w-full h-[331px] rounded-2xl"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>


      {/* Creator Family Section */}
      <ScrollAnimation>
        <section id="creators" className="w-full py-12 px-4 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header with Emoji */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4 text-center md:text-left">
              <Image
                src="/images/loveEmojiCreators.png"
                alt="Heart Eyes Emoji"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <h2 className={`${neueMachina.className} text-3xl sm:text-4xl md:text-5xl  text-white`}>
                Our Creator Family
              </h2>
            </div>

            <p className="text-white text-center md:text-center text-base text-md sm:text-lg md:text-xl max-w-2xl mx-auto  mb-8">
              Meet the vibrant creators who inspire, entertain, and connect with millions everyday.
              Together, we celebrate creativity and the power of authentic storytelling.
            </p>

            {/* Creators Grid with Animation */}
            <div className="w-full overflow-x-auto md:overflow-visible">
              <div className="flex gap-6 md:grid md:grid-cols-4 md:gap-6 md:w-full flex-nowrap w-max md:w-full">
                {creatorsDetails.map((creator, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center min-w-[260px] md:min-w-0"
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <div className="relative w-full flex justify-center group">
                        {/* Wavy BG: hidden by default, appears on hover */}
                        {creator.hoverBg && (
                          <div
                            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                            style={{
                              backgroundImage: `url('${creator.hoverBg}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          />
                        )}
                        <Image
                          src={creator.image}
                          alt={creator.name}
                          width={300}
                          height={400}
                          className="mx-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 rounded-2xl relative z-10"
                        />
                        {/* Name Tag Overlay */}
                        <div
                          className={`${poppins.className} absolute left-1/2 -translate-x-1/2 bottom-4 px-6 h-14 rounded-full text-white font-normal text-base shadow-lg transition-all duration-300 group-hover:-translate-y-2 flex items-center justify-center text-center whitespace-nowrap z-20`}
                          style={
                            hoveredIdx === idx
                              ? { backgroundColor: 'black', color: 'white' }
                              : { backgroundColor: creator.bgColor, color: 'white' }
                          }
                        >
                          {creator.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>



          </div>
        </section>
      </ScrollAnimation>


      <section className="w-full py-16 bg-[#F2944D] mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center md:text-left">
          {/* Heading */}
          <h2 className={`${neueMachina.className} text-2xl sm:text-3xl md:text-5xl text-white`}>
            Join our Creator Family
          </h2>

          {/* Button */}
          <button  onClick={() => setShowForm(true)} className={`${neueMachina.className} bg-black text-white cursor-pointer w-full sm:w-80 px-4 py-4 text-xl sm:text-3xl flex items-center gap-2 justify-center relative transition-all duration-300 hover:bg-white hover:text-black hover:scale-105`}>
            Register Here
            <Image
              src="/images/cursorImage.png"
              alt="Cursor"
              width={40}
              height={40}
              className="absolute -bottom-2 -right-2 sm:w-10 sm:h-10 transition-transform duration-300 hover:rotate-12"
            />
          </button>
        </div>
      </section>
 
       {/* Join Creator Family Section */}
       <section className="w-full py-12 px-4 bg-black overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
        

          {/* Our Clients Section */}
          <div id="clients">
            <h2 className={`${neueMachina.className} text-2xl sm:text-3xl md:text-5xl text-center mb-10 md:mb-16`}>
              Our Clients
            </h2>

            {/* Clients Logo Grid */}

            <div className="relative w-full flex items-center">
              <motion.div
                className="flex space-x-5 md:space-x-10 min-w-max"
                animate={{ x: ["0%", "-30%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
              >


                {clientsDetails.map((client, index) => (
                  <div key={index} className="p-2 sm:p-6 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-20 sm:w-28 md:w-36 aspect-square object-cover rounded-2xl"
                    />
                  </div>
                ))}

              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* Platforms and Languages Section */}
      <section className="w-full bg-black py-10 px-2 sm:py-16 sm:px-4">
        <div className="w-full h-[6px] bg-[#FFC057] mb-8 sm:mb-12"></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Headings */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8 sm:mb-12 gap-2 md:gap-0">
            <h2 className="font-bold text-white text-2xl xs:text-3xl sm:text-4xl md:text-6xl" style={{ fontFamily: 'neueMachina, sans-serif' }}>
              4+ Platform
            </h2>
            <div className="my-2 md:my-0 md:mx-8 h-px md:h-16 w-16 md:w-px bg-white" />
            <h2 className="font-bold text-white text-2xl xs:text-3xl sm:text-4xl md:text-6xl" style={{ fontFamily: 'neueMachina, sans-serif' }}>
              6+ Language
            </h2>
          </div>
          {/* Platform Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            <img src="/images/insta.png" alt="Instagram" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-lg" />
            <img src="/images/twitter.png" alt="X" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" />
            <img src="/images/youtube.png" alt="YouTube" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-lg" />
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-lg" />
          </div>
          {/* Languages */}
          <div className="flex flex-wrap items-center justify-center gap-y-2">
            {["Hindi", "English", "Kannada", "Tamil", "Telugu", "Malayalam"].map((lang, idx, arr) => (
              <React.Fragment key={lang}>
                <span className="font-bold text-white text-base xs:text-lg sm:text-xl md:text-2xl px-2 sm:px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {lang}
                </span>
                {idx < arr.length - 1 && (
                  <span className="h-4 w-px bg-yellow-400 mx-1 sm:mx-3 inline-block align-middle" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="w-full h-[6px] bg-[#FFC057] mb-8 mt-8 sm:mb-12 sm:mt-12"></div>
      </section>
      <div className="max-w-8xl mx-auto mb-10 sm:mb-20">
          {/* Title */}
          <h2 className={`${neueMachina.className} text-2xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-16`}>
            Our Collaborations
          </h2>

          {/* Collaboration Logos Grid */}
          <div className="relative w-full flex items-center overflow-hidden">
            <motion.div
              className="flex space-x-4 sm:space-x-8 md:space-x-12 min-w-max"
              animate={{ x: ["0%", "-30%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {collaborations.map((collab, index) => (
                <div
                  key={index}
                  className="p-1 sm:p-2 flex items-center justify-center w-[100px] h-[60px] sm:w-[120px] sm:h-[80px] md:w-[160px] md:h-[100px]"
                >
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>


       
        </div>
      <section
        className="w-full bg-black py-16 px-4 flex flex-col items-center justify-center min-h-[85vh]"
        style={{
          backgroundImage: 'url("/images/iconsbgnew.svg")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className={`${neueMachina.className} text-white font-bold text-4xl md:text-5xl text-center mb-10`}>
          Let&apos;s Connect
        </h2>
        {/* Pills Row 1 */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full max-w-2xl">
          {/* Phone */}
          <div className="flex-1 flex items-center justify-center cursor-pointer gap-3 transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105 rounded-full px-6 py-4 font-bold text-lg text-black text-center" style={{ backgroundColor: "#A881E7" }}>
            <img src="/images/calllogo.svg" alt="call" className="w-8 h-8" />
            <span className={`${poppins.className} text-center font-bold`}>+9191909768401</span>
          </div>
          {/* Email */}
          <div className="flex-1 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105 gap-3 rounded-full px-6 py-4 font-bold text-lg text-black text-center" style={{ backgroundColor: "#EA5FA5" }}>
            <img src="/images/messagelogo.svg" alt="email" className="w-8 h-8" />
            <span className={`${poppins.className} text-center font-bold`}>Brands@aafix.com</span>
          </div>
        </div>
        {/* Pills Row 2 */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 w-full max-w-2xl">
          {/* Location */}
          <div className="flex-1 flex items-center justify-center cursor-pointer gap-3 transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105 rounded-full px-6 py-4 font-bold text-lg text-black text-center" style={{ backgroundColor: "#F2944D" }}>
            <img src="/images/locationlogo.svg" alt="location" className="w-8 h-8" />
            <span className={`${poppins.className} text-center font-bold`}>Hyderabad</span>
          </div>
          {/* WhatsApp */}
          <div className="flex-1 flex items-center justify-center cursor-pointer gap-3 transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105 rounded-full px-6 py-4 font-bold text-lg text-black text-center" style={{ backgroundColor: "#6DDBEB" }}>
            <img src="/images/whatsapplogo.svg" alt="whatsapp" className="w-8 h-8" />
            <span className={`${poppins.className} text-center font-bold`}>Whatsapp</span>
          </div>
        </div>
        {/* Gradient Subheading */}
        <h3 className={`${neueMachina.className} text-3xl md:text-5xl font-bold text-center mb-8`} style={{
          background: "linear-gradient(90deg, #6DDBEB 0%, #F86681 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",

        }}>
          Be our <span style={{
            background: "linear-gradient(90deg, #F86681 0%, #F2944D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Creators family</span>
        </h3>
        {/* Big Gradient Pill */}
        <div className="flex justify-center w-full mt-10">
          <a
            href="mailto:hiring@joincreators.in"
            className="flex items-center gap-4 transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105 rounded-full px-10 py-5 font-bold text-2xl md:text-3xl"
            style={{
              background: "linear-gradient(90deg, #FF4F70 0%, #EA90A1 100%)",
              color: "black",
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            hiring@joincreators.in
            <span className="bg-black text-white rounded-full p-3 ml-2 flex items-center justify-center">
              <svg width="28" height="28" fill="none"><path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#fff" /></svg>
            </span>
          </a>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="w-full bg-[#F2944D] text-black">
        <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo, Socials, Contact */}
          <div>
            <Image
              src="/images/creatorsLogo.png"
              alt="Creators Logo"
              width={180}
              height={54}
              className="mb-6"
            />
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="hover:opacity-80"><Instagram /></a>
              <a href="#" className="hover:opacity-80"><Twitter /></a>
              <a href="#" className="hover:opacity-80"><Youtube /></a>
              <a href="#" className="hover:opacity-80"><Linkedin /></a>
            </div>
            <div className="space-y-2 text-sm text-black/80 mt-6">
              <div className="flex items-center gap-2 text-black">
              <img src="/images/messagelogo.svg" alt="email" className="w-4 h-4" />
              Brands@affix.com
              </div>
              <div className="flex items-center gap-2">
              <img src="/images/calllogo.svg" alt="call" className="w-4 h-4" />
              +91 9089 768 401
              </div>
              <div className="flex items-start gap-2">
              <img src="/images/locationlogo.svg" alt="location" className="w-4 h-4" />
              <span>
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className={`${neueMachina.className} text-xl mb-4`}>Company</h3>
            <nav className={`${poppins.className} flex flex-col space-y-3`}>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className={`${neueMachina.className} text-xl mb-4`}>Services</h3>
            <nav className={`${poppins.className} flex flex-col space-y-3`}>
              <a href="#services" className="hover:text-yellow-400 transition-colors">Our Expert Services</a>
              <a href="#campaigns" className="hover:text-yellow-400 transition-colors">Campaign Spotlight</a>
              <a href="#creators" className="hover:text-yellow-400 transition-colors">Our Creator Family</a>
              <a href="#clients" className="hover:text-yellow-400 transition-colors">Our Clients</a>
              <a href="#collaborations" className="hover:text-yellow-400 transition-colors">Our Collaborations</a>
            </nav>
          </div>

          {/* Policies */}
          <div>
            <h3 className={`${neueMachina.className} text-xl mb-4`}>Policies</h3>
            <nav className={`${poppins.className} flex flex-col space-y-3`}>
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              {/* Add more policy links if needed */}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full bg-[#FFB800] py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center text-black text-sm text-center">
            <span className={`${poppins.className}`}>Copyright © 2024 Brands@affix.com</span>
          </div>
        </div>
      </footer>

      <Modal open={showForm} onClose={() => setShowForm(false)}>
        <ContactForm />
      </Modal>


    </div>
  );
}