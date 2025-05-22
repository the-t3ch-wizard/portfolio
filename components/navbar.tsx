"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // Check if we're at the top
        setIsAtTop(window.scrollY < 10)
        
        // If we're scrolling down, hide the navbar
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setIsVisible(false)
        }
        // If we're scrolling up, show the navbar
        else if (window.scrollY < lastScrollY) {
          setIsVisible(true)
        }

        // Update the last scroll position
        setLastScrollY(window.scrollY)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", controlNavbar)

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "fixed px-5 md:px-16 top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isAtTop ? "bg-transparent" : "shadow-sm bg-clip-padding backdrop-filter backdrop-blur-sm"
      )}
    >
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost" className="justify-center hover:bg-transparent dark:hover:bg-transparent text-lg relative group" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/">
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom rounded-md"></span>
            </Link>
          </Button>
          <Button asChild variant="ghost" className="justify-center hover:bg-transparent dark:hover:bg-transparent text-lg relative group" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/work">
              <span className="relative z-10">Work</span>
              <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom rounded-md"></span>
            </Link>
          </Button>
          <Button asChild variant="ghost" className="justify-center hover:bg-transparent dark:hover:bg-transparent text-lg relative group" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/about">
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom rounded-md"></span>
            </Link>
          </Button>
          <Button asChild variant="ghost" className="justify-center hover:bg-transparent dark:hover:bg-transparent text-lg relative group overflow-hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/contact">
              <span className="relative z-10 group-hover:translate-y-0 transition-transform duration-300">Contact</span>
              <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom rounded-md"></span>
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:rotate-3 transition-transform">
                <Menu className="h-8 w-8 size-1" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-7">
              <div className="flex flex-col space-y-4 mt-10">
                <Button asChild variant="ghost" className="justify-center border-b border-l hover:translate-x-1 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/">
                    Home
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="justify-center border-b border-l hover:translate-x-1 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/work">
                    Work
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="justify-center border-b border-l hover:translate-x-1 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/about">
                    About
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="justify-center border-b border-l hover:translate-x-1 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/contact">
                    Contact
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
