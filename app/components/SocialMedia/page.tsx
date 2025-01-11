import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import SocialMediaLayout from './layout'

export default function SocialMedia() {
  return (
    <SocialMediaLayout>
      <a href="https://github.com/Shashank5239" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F] 
      // p-2 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-125">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/shashank-kumar2232/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F] 
      // p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-125">
        <Linkedin size={24} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F]
      //  p-2 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-125">
        <Twitter size={24} />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F] 
      // p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-125">
        <Instagram size={24} />
      </a>
    </SocialMediaLayout>
  )
}

