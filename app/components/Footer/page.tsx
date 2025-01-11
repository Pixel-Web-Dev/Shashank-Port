import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import FooterLayout from './layout'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterLayout>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-center text-white">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 hover:text-accent-color transition-colors">John Doe</h3>
            <p className="text-gray-400">Event Management Professional</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-accent-color transition-colors">About</Link></li>
              <li><Link href="#experience" className="text-gray-400 hover:text-accent-color transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-accent-color transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="text-gray-400 hover:text-accent-color transition-colors">Skills</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: shashankkumar2232@gmail.com</p>
            <p className="text-gray-400">Phone: 9693444480</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-8">
              &nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Shashank5239" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-color transform transition duration-300 hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/shashank-kumar2232/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transform transition duration-300 hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transform transition duration-300 hover:scale-110">
                <Twitter size={28} />
              </a>
              <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transform transition duration-300 hover:scale-110">
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} John Doe. All rights reserved.</p>
        </div>
      </div>
    </FooterLayout>
  )
}
