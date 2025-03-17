"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { Instagram , Twitter , Youtube , Linkedin } from 'lucide-react';

const neueMachina = localFont({
  src: '../public/fonts/NeueMachina-InktrapUltrabold.otf'
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function CreatorsSection() {
  const [brands, setBrands] = useState(0);
  const [campaigns, setCampaigns] = useState(0);
  const [creators, setCreators] = useState(0);
  const [roi, setRoi] = useState(0);


const creatorsDetails = [
  {
    name: "Deepthi Sunaina",
    title: "The Showstopper",
    image: "/images/creator1.png",
    bgColor: "#E95FA5"
  },
  {
    name: "Shanmukh Jaswanth",
    title: "Master of Disguise",
    image: "/images/creator2.png",
    bgColor: "#F2944D"
  },
  {
    name: "Alekhya Harika",
    title: "Emotional Powerhouse",
    image: "/images/creator3.png",
    bgColor: "#A880E7"
  },
  {
    name: "Pranavi Manukonda",
    title: "Scene-Stealer",
    image: "/images/creator4.png",
    bgColor: "#6DDBEB"
  },
  {
    name: "Deepthi Sunaina",
    title: "The Showstopper",
    image: "/images/creator1.png",
    bgColor: "#E95FA5"
  },
  {
    name: "Shanmukh Jaswanth",
    title: "Master of Disguise",
    image: "/images/creator2.png",
    bgColor: "#F2944D"
  },
  {
    name: "Alekhya Harika",
    title: "Emotional Powerhouse",
    image: "/images/creator3.png",
    bgColor: "#A880E7"
  },
  {
    name: "Pranavi Manukonda",
    title: "Scene-Stealer",
    image: "/images/creator4.png",
    bgColor: "#6DDBEB"
  }
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
  }
];

const platforms = [
  {
    name: "Instagram",
    icon: "/images/insta.png"
  },
  {
    name: "Twitter",
    icon: "/images/twitter.png"
  },
  {
    name: "YouTube",
    icon: "/images/youtube.png"
  },
  {
    name: "LinkedIn",
    icon: "/images/linkedin.png"
  }
];

const languages = [
  "Hindi",
  "English",
  "Kannada",
  "Tamil",
  "Malayalam",
  "Telugu"
];

const collaborations = [
  {
    name: "Amada Media",
    logo: "/images/amada.png"
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
  }
];

  useEffect(() => {
    const targets = {
      brands: 100,
      campaigns: 650,
      creators: 10000,
      roi: 100
    };

    const duration = 2000; // 2 seconds duration
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
      <section className={`${neueMachina.className} flex flex-col md:flex-row items-center justify-between px-2 py-12 max-w-7xl mx-auto`}>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl  mb-6 leading-tight">
            Revolutionize your Marketing Campaign with{" "}
            <span className="text-yellow-400">Creators</span>.
          </h1>

        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/images/creatorHomeImage.png"
            alt="Creators Workspace Illustration"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>
      </section>

      {/* Tilted Banner Section */}
      <div className="relative w-full overflow-hidden bg-black py-12">
        {/* Top tilted line */}
        <div
          className="absolute w-[300%] transform -rotate-3 left-[-100%] right-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 35%, #ffffff 35%, #ffffff 65%, transparent 65%, transparent 100%)',
            height: '2px',
            top: '30%',
            zIndex: 1,
            animation: 'slideLeft 20s linear infinite'
          }}
        />
        {/* Bottom tilted line */}
        <div
          className="absolute w-[300%] transform -rotate-3 left-[-100%] right-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 35%, #ffffff 35%, #ffffff 65%, transparent 65%, transparent 100%)',
            height: '2px',
            top: '70%',
            zIndex: 1,
            animation: 'slideLeft 20s linear infinite'
          }}
        />
        {/* Tilted text */}
        <div className={`${neueMachina.className} text-white text-4xl font-clash-display font-bold tracking-wider text-center transform -rotate-3`}>
          Connect - Collaborate - Create * Connect - Collaborate - Create *
        </div>
      </div>

      {/* Ecosystem Section */}
      <section id="about" className="relative w-full h-[100vh] py-20 px-4 flex items-center justify-center">
        {/* Smiley Emoji */}
        <div className="absolute top-10 left-10">
          <Image
            src="/images/smileIcon.png"
            alt="Smiley Face"
            width={160}
            height={160}
          />
        </div>

        {/* Central Diagram */}
        <div className="relative w-full max-w-6xl">
          {/* Semi-circular segments */}
          <div className="relative flex justify-center">
            <Image
              src="/images/creatorSectionCenter.png"
              alt="Creators Ecosystem"
              width={1200}
              height={400}
              className="mx-auto"
            />
          </div>

          {/* Decorative Stars */}
          <div className="absolute bottom-10 right-10">
            <Image
              src="/images/starIcon.png"
              alt="Decorative Stars"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-10 px-4">
        <div className=" mx-auto">
          <h2 className={`${neueMachina.className} text-4xl md:text-5xl text-center mb-12`}>
            We help brands Connect better to their audience with{" "}
            <span className="text-yellow-400">Creator</span> Culture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="text-center p-6 h-54 flex flex-col justify-center items-center" style={{ backgroundColor: '#A881E7' }}>
              <div className={`${neueMachina.className} text-4xl md:text-6xl mb-2`}>
                {brands}+
              </div>
              <div className={`${poppins.className} text-xl md:text-3xl`}>Brands</div>
            </div>

            <div className="text-center p-6 h-54 flex flex-col justify-center items-center" style={{ backgroundColor: '#EA5FA5' }}>
              <div className={`${neueMachina.className} text-4xl md:text-6xl mb-2`}>
                {campaigns}+
              </div>
              <div className={`${poppins.className} text-xl md:text-3xl`}>Campaigns</div>
            </div>

            <div className="text-center p-6 h-54 flex flex-col justify-center items-center" style={{ backgroundColor: '#F2944D' }}>
              <div className={`${neueMachina.className} text-4xl md:text-6xl mb-2`}>
                {creators / 1000}k+
              </div>
              <div className={`${poppins.className} text-xl md:text-3xl`}>Creator Community</div>
            </div>

            <div className="text-center p-6 h-54 flex flex-col justify-center items-center" style={{ backgroundColor: '#6DDBEB' }}>
              <div className={`${neueMachina.className} text-4xl md:text-6xl mb-2`}>
                {roi}%
              </div>
              <div className={`${poppins.className} text-xl md:text-3xl`}>Assured ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8 mb-12">
            <Image
              src="/images/rocketSection.png"
              alt="Paper Plane Icon"
              width={100}
              height={100}
            />
            <h2 className={`${neueMachina.className} text-4xl md:text-6xl text-white`}>
              Our Expert Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Influencer Marketing Card */}
            <div className="rounded-3xl bg-[#EA5FA5] p-8 flex items-center">
              <div className="w-1/2">
                <Image
                  src="/images/image1.png"
                  alt="Influencer Marketing"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-1/2">
                <h3 className={`${neueMachina.className} text-4xl text-white mb-4 font-bold`}>Influencer Marketing</h3>
                <p className="text-black mb-6">
                  We help you get the true ROI (return on influencer) through a data-driven selection process and culture-relevant activation.
                </p>
                <button className="bg-black cursor-pointer text-white px-6 py-3  flex items-center gap-2 transition-transform duration-300  hover:bg-white hover:text-black hover:scale-105">
                  Enquire Now <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* UGC Campaigns Card */}
            <div className="rounded-3xl bg-[#F2944D] p-8 flex items-center">
              <div className="w-1/2">
                <Image
                  src="/images/image2.png"
                  alt="UGC Campaigns"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-1/2">
                <h3 className={`${neueMachina.className} text-4xl text-white mb-4 font-bold`}>UGC Campaigns</h3>
                <p className="text-black mb-6">
                  User-Generated Content Campaigns, which are marketing initiatives that rely on content created by a brand&apos;s audience rather than the brand itself.
                </p>
                <button className="bg-black cursor-pointer text-white px-6 py-3 flex items-center gap-2 transition-transform duration-300  hover:bg-white hover:text-black hover:scale-105">
                  Enquire Now <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Meme Campaigns Card */}
            <div className="rounded-3xl bg-[#A881E7] p-8 flex items-center">
              <div className="w-1/2">
                <Image
                  src="/images/image3.png"
                  alt="Meme Campaigns"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-1/2">
                <h3 className={`${neueMachina.className} text-4xl text-white mb-4 font-bold`}>Meme Campaigns</h3>
                <p className="text-black mb-6">
                  From creating brand new digital IPs to ideating a campaign and getting it executed, we can do anything and we&apos;re insanely good at it.
                </p>
                <button className="bg-black cursor-pointer text-white px-6 py-3 flex items-center gap-2 transition-transform duration-300  hover:bg-white hover:text-black hover:scale-105">
                  Enquire Now <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Content On Demand Card */}
            <div className="rounded-3xl bg-[#6DDBEB] p-8 flex items-center">
              <div className="w-1/2">
                <Image
                  src="/images/image4.png"
                  alt="Content On Demand"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-1/2">
                <h3 className={`${neueMachina.className} text-4xl text-white mb-4 font-bold`}>Content On Demand</h3>
                <p className="text-black mb-6">
                  Source the top content from the top creators in the country. Our team has a network of exceptionally talented content creators.
                </p>
                <button className="bg-black cursor-pointer text-white px-6 py-3 flex items-center gap-2 transition-transform duration-300  hover:bg-white hover:text-black hover:scale-105">
                  Enquire Now <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Registration Banner */}
      <section className="w-full py-16 bg-[#F2944D]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-16 px-4">
          <h2 className={`${neueMachina.className} text-4xl md:text-6xl text-white`}>
            Do you have a Brand?
          </h2>
          <button className={`${neueMachina.className} bg-black text-white cursor-pointer w-80 px-2 py-4 text-3xl flex items-center gap-2 justify-center relative transition-all duration-300 hover:bg-white hover:text-black hover:scale-105`}>
            Register Here
            <Image
              src="/images/cursorImage.png"
              alt="Cursor"
              width={50}
              height={50}
              className="absolute -bottom-2 -right-2 transition-transform duration-300 hover:rotate-12"
            />
          </button>
        </div>
      </section>

      {/* Campaign Spotlight Section */}
      <section id="campaigns" className="w-full py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header with Smiley */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <h2 className={`${neueMachina.className} text-5xl md:text-6xl text-white`}>
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
          <p className={`${poppins.className} text-white text-center text-lg max-w-4xl mx-auto mb-16`}>
            Celebrate our journey of innovation and collaboration! Explore our past campaigns, 
            each a testament to our commitment to excellence and creativity. Join us as we 
            continue to redefine possibilities together.
          </p>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
      {/* UpGrad Card - Larger */}
            <div className="rounded-3xl col-span-1 md:col-span-2">
        <Image
          src="/images/upgradImage.png"
          alt="UpGrad Campaign"
                width={800}
                height={500}
                className="w-full rounded-2xl"
                style={{ objectFit: 'contain', height: 'auto' }}
              />
      </div>

      {/* Amazon Course Card */}
            <div className="rounded-3xl flex flex-col gap-4">
              <div>
        <Image
          src="/images/amazonImage.png"
          alt="Amazon Campaign"
                  width={400}
                  height={240}
                  className="w-full rounded-2xl"
                  style={{ objectFit: 'contain', height: 'auto' }}
                />
              </div>
              <div>
          <Image
          src="/images/kajolImage.png"
          alt="Joyalukkas Campaign"
                  width={400}
                  height={240}
                  className="w-full rounded-2xl"
                  style={{ objectFit: 'contain', height: 'auto' }}
        />
        </div>
      </div>

      {/* Myntra Card */}
            <div className="rounded-3xl h-[331px]">
        <Image
          src="/images/myntraImage.png"
          alt="Myntra Campaign"
                width={395}
                height={331}
                className="w-full h-[331px] rounded-2xl"
                style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Spotify Card */}
            <div className="rounded-3xl col-span-1 md:col-span-2 h-[331px]">
        <Image
          src="/images/spotifyImage.png"
          alt="Spotify Campaign"
                width={800}
                height={331}
                className="w-full h-[331px] rounded-2xl"
                style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
        </div>
      </section>

      {/* Creator Family Section */}
      <section id="creators" className="w-full py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header with Emoji */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Image
              src="/images/loveSmily.png"
              alt="Heart Eyes Emoji"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <h2 className={`${neueMachina.className} text-4xl md:text-6xl text-white`}>
              Our Creator Family
            </h2>
          </div>

          {/* Creators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {creatorsDetails.map((creator, index) => (
              <div 
                key={index}
                className="relative p-6  transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: creator.bgColor }}

              >
                {/* White Container with Double Border Effect */}
                <div className="relative bg-white p-6 ">
                  {/* Outer white border effect */}
                  <div className="absolute inset-0 bg-white  -m-3"></div>
                  
                  {/* Content Container */}
                  <div className="relative">
                    {/* Image Container */}
                    <div 
                      className="overflow-hidden"
                      style={{ backgroundColor: creator.bgColor }}
                    >
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        width={400}
                        height={400}
                        className="w-full aspect-square object-cover grayscale"
                        priority
                      />
                    </div>
                    
                    {/* Text Content */}
                    <div className="mt-6 text-left">
                      <p 
                        className={`${poppins.className} text-base font-medium mb-1`}
                        style={{ color: creator.bgColor }}
                      >
                        {creator.title}
                      </p>
                      <h3 className={`${poppins.className} text-base text-black`}>
                        {creator.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Creator Family Section */}
      <section className="w-full py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className={`${neueMachina.className} text-5xl md:text-6xl text-center mb-16`}>
            Join our <span className="text-yellow-400">Creator</span> family
          </h2>

          {/* Register Button */}
          <div className="flex justify-center mb-32">
            <button 
              className="text-white cursor-pointer rounded-full px-12 py-4 flex items-center gap-4 group hover:opacity-90 transition-all duration-300"
              style={{ background: 'linear-gradient(90deg, #FF4F70 0%, #EA90A1 100%)' }}
            >
              <span className={`${neueMachina.className} text-2xl`}>Register Here</span>
              <div className="bg-white rounded-full p-3 group-hover:translate-x-1 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#FF4F70"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Our Clients Section */}
          <div>
            <h2 className={`${neueMachina.className} text-5xl md:text-6xl text-center mb-16`}>
              Our Clients
            </h2>
            
            {/* Clients Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {clientsDetails.map((client, index) => (
                <div 
                  key={index}
                  className="rounded-2xl  aspect-square flex items-center justify-center"
                  style={{ backgroundColor: client.bgColor }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={150}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms and Languages Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Border Line */}
          <div className="w-full h-[10px] bg-[#FFC057] mb-20"></div>

          {/* Platforms */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20">
            <h2 className={`${neueMachina.className} text-4xl md:text-6xl text-white whitespace-nowrap`}>
              4+ Platform
            </h2>
            <div className="flex items-center gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="ml-auto">
              <Image
                src="/images/starIcon.png"
                alt="Sparkles"
                width={100}
                height={100}
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Languages */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <h2 className={`${neueMachina.className} text-4xl md:text-6xl text-white whitespace-nowrap`}>
              6+ Language
            </h2>
            <div className="flex flex-wrap gap-4">
              {languages.map((language, index) => (
                <span 
                  key={index} 
                  className={`${neueMachina.className} text-lg md:text-xl`}
                >
                  {index > 0 && <span className="text-[#FFB800] mx-2">|</span>}
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Border Line */}
          <div className="w-full h-[10px] bg-[#FFC057] mt-20"></div>
        </div>
      </section>

      {/* Our Collaborations Section */}
      <section id="collaborations" className="w-full bg-black py-20 px-4" style={{
        backgroundImage: 'url("/images/bgCollaborate.svg.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: '800px',
      
      }}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`${neueMachina.className} text-5xl md:text-6xl text-center mb-16`}>
            Our Collaborations
          </h2>

          {/* Collaborations Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {collaborations.map((collab, index) => (
              <div 
                key={index}
                className="p-6 flex items-center justify-center"
              >
                <Image
                  src={collab.logo}
                  alt={collab.name}
                  width={200}
                  height={80}
                  className="w-full h-auto object-contain filter "
                />
              </div>
            ))}
          </div>
          <div id="contact" className="w-full h-[10px] bg-[#FFC057] mt-20"></div>
        </div>
        
     

      {/* Let's Connect Section */}
     
      <div  className="max-w-7xl mx-auto mt-32 mb-32">
        <h2 className={`${neueMachina.className} text-5xl md:text-6xl text-center mb-24`}>
          Let&apos;s Connect
        </h2>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Phone Number */}
          <div 
            className="flex items-center gap-6 bg-[#6DDBEB] rounded-full px-12 py-6 w-full md:w-auto hover:opacity-90 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 10.999H22C22 5.869 18.127 2 13 2V4C17.024 4 20 6.975 20 10.999Z" fill="black"/>
              <path d="M13 8C15.103 8 17 9.897 17 12H19C19 8.795 16.206 6 13 6V8ZM16.422 13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898 11.933 8.05198 11.361L10.511 8.96698C10.6975 8.78612 10.8062 8.53982 10.8142 8.28007C10.8222 8.02032 10.7289 7.76773 10.554 7.57598L6.85898 3.51298C6.68402 3.32165 6.44086 3.20265 6.18113 3.18133C5.92139 3.16001 5.66263 3.23829 5.45798 3.40098L3.29798 5.28698C3.12509 5.46051 3.0222 5.69145 3.00798 5.93598C2.99198 6.18698 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.598 18.541C20.7608 18.3362 20.8391 18.0772 20.8177 17.8173C20.7963 17.5574 20.6771 17.3142 20.485 17.139L16.422 13.443Z" fill="black"/>
            </svg>
            <span className={`${neueMachina.className} text-2xl text-black`}>+919190898768401</span>
          </div>

            {/* Email */}
            <div 
            className="flex items-center gap-6 bg-[#6DDBEB] rounded-full px-12 py-6 w-full md:w-auto hover:opacity-90 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="black"/>
            </svg>
            <span className={`${neueMachina.className} text-2xl text-black`}>Brands@affix.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#1E1E1E] text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Logo and Navigation */}
          <div className="mb-16">
            <Image
              src="/images/creatorsLogo.png"
              alt="Creators Logo"
              width={200}
              height={60}
              className="mb-12"
            />
            
            {/* Company Section */}
            <div className="space-y-8">
              <h3 className={`${neueMachina.className} text-3xl mb-6`}>
                Company
              </h3>
              <nav className={`${poppins.className} flex flex-col space-y-4`}>
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={scrollToSection('about')}
                >
                  About Us
                </a>
                <a 
                    href="#services" 
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={scrollToSection('services')}
                  >
                    Our Expert Services
                  </a>
                <a 
                    href="#campaigns" 
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={scrollToSection('campaigns')}
                  >
                    Campaign Spotlight
                  </a>
                <a 
                    href="#creators" 
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={scrollToSection('creators')}
                  >
                    Our Creator Family
                  </a>
                <a 
                    href="#clients" 
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={scrollToSection('clients')}
                  >
                    Our Clients
                  </a>
                <a 
                    href="#collaborations" 
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={scrollToSection('collaborations')}
                  >
                    Our Collaborations
                  </a>
                <a 
                    href="#contact" 
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={scrollToSection('contact')}
                  >
                    Contact Us
                  </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full bg-[#FFB800] py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright and Privacy */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <span className={`${poppins.className} text-black`}>
                  Copyright © 2024 House of Affix Media Pvt.Ltd
                </span>
                <a href="#" className={`${poppins.className} text-black hover:opacity-80`}>
                  Privacy Policy
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <span className={`${poppins.className} text-black`}>
                  Email: Brands@affix.com
                </span>
                <span className={`${poppins.className} text-black`}>
                  Phone: +919089768401
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6">
                <a href="#" className="hover:opacity-80 text-black transition-opacity">
                    <Instagram />
                </a>
                <a href="#" className="hover:opacity-80 text-black transition-opacity">
                  <Twitter />
                </a>
                <a href="#" className="hover:opacity-80 text-black transition-opacity">
                  <Youtube />
                </a>
                <a href="#" className="hover:opacity-80 text-black transition-opacity">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}