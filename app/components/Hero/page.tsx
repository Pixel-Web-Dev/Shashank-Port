'use client'

import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import HeroLayout from './layout'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <HeroLayout>
      <motion.div className="text-center z-10 px-4">
        <div className="mb-8 relative inline-block group">
          <div className="absolute -inset-1 hover-glow blur opacity-75 
          transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative">
            <Image
              src="/images/pic.jpeg"
              alt="Shashank Kumar"
              width={200}
              height={200}
              className="rounded-full border-4 border-white/10 shadow-lg backdrop-blur-sm transform transition duration-500 
              group-hover:scale-105 hover-glow"
              priority
            />
            </div>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
        Shashank Kumar
        </h1>
        <div className="h-16 mb-6">
          <TypeAnimation
            sequence={[
              'Computer Science & Engineering Student',
              2000,
              'Full Stack Developer',
              2000,
              'UI/UX Enthusiast',
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl text-gray-300 animate-fade-in-up animation-delay-200"
            repeat={Infinity}
          />
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/Shashank5239" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
              <div className="relative bg-white/10 p-3 rounded-full transform transition duration-500 group-hover:scale-110 
              group-hover:bg-white/20">
              <Github className="w-6 h-6" />
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/in/shashank-kumar2232/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative bg-white/10 p-3 rounded-full transform transition duration-500 group-hover:scale-110 
            group-hover:bg-white/20">
              <Linkedin className="w-6 h-6" />
            </div>
          </a>
        </div>
        <a 
          href="#contact" 
          className="relative inline-flex group items-center justify-center"
        >
          <button className="relative hover-glow px-8 py-4 bg-white text-[#354F52] rounded-full font-semibold transform 
          transition duration-500 hover:scale-105 hover:bg-opacity-90">
            Get in Touch
          </button>
        </a>
      </motion.div>
    </HeroLayout>
  )
}

