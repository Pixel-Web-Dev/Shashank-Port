'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const experienceData = [
    {
      position: "Event Manager ",
      company: "E-Cell, LPU",
      duration: "Mar 2024 - Present",
      location: "Office",
      responsibilities: [
       ` "•	Enhanced problem-solving skills by managing logistics and resolving on-the-spot issues during events.
       •	Acquired skills in collaboration and teamwork while coordinating with multiple departments and volunteers.\•	Strengthened analytical skills by evaluating event success and deriving actionable insights for improvement.",`
        
      ]
    },  
    {
      position: "AI Trainer ",
      company: "Outlier",
      duration: "Sep 2024 - Nov 2024",
      location: "Remote",
      responsibilities: [
        `"•	Enhanced programming and debugging skills through hands-on AI projects and training sessions.
•	Learned to customize AI models and algorithms to solve domain-specific problems.
•	Learned how to assess training outcomes and adapt learning modules based on feedback.
"`
        
      ]
    },
    {
      position: "Freelance Web Developer and Designer ",
      company: "PixelDev (Self-Started Freelance Initiative)",
      duration: "Oct 2024 - Present",
      location: "Remote",
      responsibilities: [
        `"•	Mastered web development technologies, including front-end and back-end frameworks.
•	Built expertise in UI/UX design, ensuring responsive and user-centric web solutions.
•	Developed problem-solving skills through troubleshooting and resolving real-world technical issues.
",`
        
      ]
    }
  ]

  return (
    <section id="experience" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover-glow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-8 h-8 text-sky-400 mr-4" />
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                      <p className="text-sky-300">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{exp.duration}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

