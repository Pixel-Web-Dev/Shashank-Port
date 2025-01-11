'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({ success: false, error: false, loading: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ success: false, error: false, loading: true });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'yaha par likh accesss code gadhe', // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus({ success: true, error: false, loading: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, error: true, loading: false });
      }
    } catch (error) {
      setStatus({ success: false, error: true, loading: false });
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  }

  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center font-poppins text-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <motion.div
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-6">Let's Connect</h3>
            <p className="mb-8 text-white">
              I'm always open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out if you have any questions or want to work together!
            </p>
            <div className="space-y-4">
              <div className="flex items-center hover:text-sky-400">
                <Mail className="w-6 h-6 mr-4 text-white" />
                <span>shashankkumar2232@gmail.com</span>
              </div>
              <div className="flex items-center hover:text-sky-400">
                <Phone className="w-6 h-6 mr-4 text-white" />
                <span>+91 96934-44480</span>
              </div>
              {/* <div className="flex items-center hover:text-sky-400">
                <MapPin className="w-6 h-6 mr-4 text-white" />
                <span>San Francisco, CA</span>
              </div> */}
            </div>
            {/* <div className="mt-8 flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
                <Github size={24} />
              </a>
            </div> */}
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="w-full bg-black/40 max-w-md mx-auto border-none backdrop-blur-md rounded-lg 
            hover:shadow-[0_0_25px_10px_rgba(96,165,250,0.3)] duration-500">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-purple-200">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-md focus:outline-none text-black placeholder-sky-900"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-200">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-md focus:outline-none text-black placeholder-sky-900"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-purple-200">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white rounded-md focus:outline-none text-black placeholder-sky-900"
                      placeholder="Your message here..."
                    />
                  </motion.div>

                  {status.success && (
                    <p className="text-green-500 text-center">Your message was sent successfully!</p>
                  )}
                  {status.error && (
                    <p className="text-red-500 text-center">Something went wrong. Please try again later.</p>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={status.loading}
                      className="w-full bg-gradient-to-r from-sky-900 text-white py-3 px-6 rounded-md transition 
                      duration-300 flex items-center justify-center text-lg font-sans shadow-lg"
                    >
                      {status.loading ? 'Sending...' : 'Send Message'}
                      <Send size={20} className="ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

