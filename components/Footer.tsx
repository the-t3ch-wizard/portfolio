import React from 'react'
import Logo from '@/components/logo'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {

  const socials = [
    {
      label: "GitHub",
      url: "https://github.com/the-t3ch-wizard/"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ayushkumarmaurya01/"
    },
    {
      label: "Twitter",
      url: "https://x.com/the_t3ch_wizard/"
    },
  ]

  return (
    <div className="w-full bg-secondary p-6 md:px-40 flex flex-col gap-6 py-10">
      
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-6">
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="md:hidden">
          <Logo variant="small" />
        </div>

        <div className="md:w-[35%] flex flex-col gap-6">
          <div className="w-full flex flex-col">
            <h1 className="text-3xl md:text-4xl">
              Let&apos;s talk
            </h1>
            <Link href="/contact" className="flex gap-2 items-center group hover:text-primary/50 transition-all duration-500 ease-out w-fit cursor-pointer">
              <h3 className="text-4xl md:text-5xl">
                Hit me up!
              </h3>
              <ArrowRight className="size-12 -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-out" />
            </Link>
          </div>

          <div className="w-full flex flex-col gap-1">
          {
            socials.map((social, index) => (
              <Link key={index} href={social.url} target="_blank" className="flex justify-between items-center group text-xl hover:text-primary/50 transition-all duration-500 ease-out">
                {social.label}
                <ArrowRight className="size-6 -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-out" />
              </Link>
            ))
          }
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center text-primary/40 pt-7">
        <p className="text-sm">
          &copy; 2025 Ayush Kumar Maurya
        </p>
      </div>

    </div>
  )
}

export default Footer
