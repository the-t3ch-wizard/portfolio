import { socials } from "@/constants/socials"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactMethods() {
  return (
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
  )
}
