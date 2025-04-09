"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-100">
        {isOpen ? <X /> : <Menu />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="absolute top-6 right-4 text-gray-100">
            <X />
          </Button>

          <nav className="flex flex-col items-center space-y-8 text-xl">
            <Link href="#about" className="text-gray-100 hover:text-green-400 transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#skills" className="text-gray-100 hover:text-green-400 transition-colors" onClick={toggleMenu}>
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-gray-100 hover:text-green-400 transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-gray-100 hover:text-green-400 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link href="#contact" className="text-gray-100 hover:text-green-400 transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="mt-4 bg-green-600 hover:bg-green-700">Resume</Button>
          </nav>
        </div>
      )}
    </div>
  )
}
