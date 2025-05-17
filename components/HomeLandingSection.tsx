import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

const HomeLandingSection = () => {
  return (
    <section className="h-[48rem] relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/square-background.png"
        alt="Square background"
        fill
        priority
        className="object-cover z-0 opacity-5"
      />
      
      <div className="absolute top-0 h-[60rem] w-full bg-transparent flex justify-center items-start overflow-hidden rounded-md z-10">
        <div className="w-full h-full relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={500}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(1050px_700px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="py-[6rem] pt-[7rem] md:pt-[11rem] w-full h-full flex flex-col gap-15 justify-between items-start relative z-20">
        <h1 className="w-full md:w-[70%] text-4xl md:text-7xl md:leading-20 z-10 px-6 md:px-16">
          I am Ayush - A <span>web developer</span> who enjoys building <span>visually appealing</span> and <span>functional</span> websites.
        </h1>

        <h4 className="w-full md:w-[65%] leading-6 md:leading-7 text-lg md:text-2xl z-10 px-6 md:px-16">
          Currently a Junior Software Engineer, crafting the design and user experience for native products. I'm always looking for new opportunities to learn and grow.
        </h4>
      </div>
    </section>
  )
}

export default HomeLandingSection
