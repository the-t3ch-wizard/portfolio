"use client"

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MagicCard } from "@/components/ui/magic-card";

const EducationSection = () => {

  const [education, setEducation] = useState([
    {
      id: 1,
      institute: "Technocrats Institute of Technology",
      degree: "Bachelor of Technology (Computer Science)",
      location: "Bhopal, India",
      duration: {
        start: "Aug 2022",
        end: "May 2025"
      },
      marks: "80%",
      logo: "/rgpv-logo.png"
    },
  ]);

  return (
    <section className="w-full bg-background flex flex-col gap-6 pt-6 pb-8">

      <h3 className="text-2xl px-6 md:px-16">
        Education
      </h3>

      <div className="flex flex-col gap-1 px-2 md:px-[6.5rem]">
        {
          education.map((education, index) => (
            <MagicCard key={index} className="w-full px-4 md:px-6 border-x">
              <div className="w-full flex flex-wrap gap-2 border-b py-2">
                <div className="w-full flex justify-start items-center gap-6 px-2 pl-0 rounded-xl py-3">
                  <Avatar className="w-14 h-14 border-2 p-1">
                    <AvatarImage src={education.logo} />
                    <AvatarFallback>
                      {education.institute[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h4 className="text-lg font-semibold md:text-xl">
                        {education.degree}
                      </h4>
                      <h5 className="text-sm font-medium md:text-base">
                        {education.institute}
                        <span> - </span>
                        {education.location}
                      </h5>
                    </div>
                    <h6 className="text-sm md:text-base">
                      {education.duration.start} - {education.duration.end}
                    </h6>
                  </div>
                </div>
              </div>
            </MagicCard>
          ))
        }
      </div>

    </section>
  )
}

export default EducationSection
