'use client'

import { motion } from 'framer-motion'
import { Code, Book, Lightbulb } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const aboutSections = [
    {
      icon: <Code className="w-8 h-8 text-sky-400" />,
      title: "Technical Skills",
      content: "Proficient in Python, JavaScript, and C++. Experienced with React, Node.js. Passionate about AI, machine learning, and blockchain technologies.",
      skills: ['Python', 'JavaScript', 'C++', 'React', 'Node.js', 'Git']
    },
    {
      icon: <Book className="w-8 h-8 text-sky-400" />,
      title: "Education",
      content: "Currently pursuing a BTech in Computer Science at Lovely Professional University. Relevant coursework: Data Structures, and Web Development.",
      highlight: "GPA: 7.8/10"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-sky-400" />,
      title: "Soft Skills",
      content: "Communication, Team Work, Leadership, Time management, Problem Solving, Critical Thinking"
    }
  ]

  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover-glow h-full backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{section.content}</p>
                  {section.skills && (
                    <div className="flex flex-wrap gap-2">
                      {section.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-sky-500 bg-opacity-20 rounded-full text-sky-300 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {section.highlight && (
                    <p className="text-sky-300 font-semibold mt-4">{section.highlight}</p>
                  )}
                  {section.extra && (
                    <p className="text-gray-400 mt-4">{section.extra}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild className="rounded-full bg-sky-900 hover:bg-sky-600 text-white p-5 animate-bounce duration-1000">
            <a href="/path-to-your-cv.pdf" download>Download CV</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

