
import { cn } from "@/lib/utils"

type LogoProps = {
  variant?: "small" | "medium" | "large" | "xl"
  className?: string
}

function Logo({ variant = "medium", className }: LogoProps) {
  const sizeClasses = {
    small: "w-10 h-10 text-[1.8rem] -tracking-[3px]",
    medium: "w-14 h-14 text-[2.5rem] -tracking-[4px]",
    large: "w-20 h-20 text-[3.5rem] -tracking-[5px]",
    xl: "w-28 h-28 text-[5rem] -tracking-[7px]"
  }

  return (
    <div 
      className={cn(
        "font-manolo-mono rounded-full flex justify-center items-center text-primary",
        sizeClasses[variant],
        className
      )}
    >
      AM
    </div>
  )
}

export default Logo
