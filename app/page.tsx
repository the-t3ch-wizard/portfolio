import { SparklesCore } from "@/components/ui/sparkles";
import { Squares } from "@/components/ui/squares-background";

export default function Home() {
  return (
    <div className="">

      <section className="h-[51rem]">
        <div className="absolute top-0 h-[40rem] w-full bg-transparent flex justify-center items-start overflow-hidden rounded-md">
          <div className="w-full h-full relative ">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[12px] w-full blur-xl" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-full blur-md" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[20px] w-1/2 blur-2xl" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[4px] w-1/2 blur-lg" />

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
        
        <Squares 
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
          className="absolute top-0 left-0 w-full h-[51rem]"
        />

        <div className="w-full h-full flex flex-col gap-15 justify-center items-start md:px-16">

          <h1 className="w-[70%] text-7xl z-10 leading-20">
            I am Ayush - A <span>web developer</span> who enjoys building <span>visually appealing</span> and <span>functional</span> websites.
          </h1>

          <h4 className="w-[65%] text-2xl z-10">
            Currently a Junior Software Engineer, crafting the design and user experience for native products. I'm always looking for new opportunities to learn and grow.
          </h4>
        </div>
      </section>

      <section className="h-[51rem] bg-background">
        {/* section 2 */}
      </section>

    </div>
  );
}
