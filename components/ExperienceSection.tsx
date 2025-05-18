"use client"

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MagicCard } from "@/components/ui/magic-card";

const ExperienceSection = () => {

  const [experiences, setExperiences] = useState([
    {
      "id": 2,
      "company": "Capgemini",
      "logo": "/capgemini-logo.png",
      "position": "Software engineer",
      "location": "Bangaluru, India",
      "duration": {
        "start": "May 2025",
        "end": "Present"
      },
      "responsibilities": [
        "Currently a full stack java developer for Capgemini."
      ]
    },
    {
      "id": 1,
      "company": "Medorn Ventures",
      "logo": "/medorn-logo.png",
      "position": "Full Stack Developer",
      "location": "Bhopal, India",
      "duration": {
        "start": "July 2024",
        "end": "Dec 2024"
      },
      "responsibilities": [
        "Enhanced user-centric experiences across a range of Medorn projects, including MR reporting software and HRMS software, using MERN stack.",
        "Gained extensive experience by migrating, optimizing, and improving backend services."
      ]
    }
  ]);

  return (
    <section className="w-full bg-background flex flex-col gap-6 pt-6 pb-8">

      <h3 className="text-2xl px-6 md:px-16">
        Experience
      </h3>

      <div className="flex flex-col gap-1 md:px-10">
      <Accordion type="single" collapsible className="w-full">
      {
        experiences.map((experience, index) => (
            <AccordionItem value={`item-${experience.id}`} key={index} className="w-full border-0 px-2 md:px-16">
              <MagicCard className="w-full px-4 md:px-0 border-b md:border-0">
                <AccordionTrigger className="w-full md:px-7 cursor-pointer hover:no-underline">
                  <div className="w-full flex flex-wrap gap-2">
                    <div className="w-full flex justify-start items-center gap-6 px-2 pl-0 rounded-xl py-3">
                      <Avatar className="w-14 h-14 border-2 p-1">
                        <AvatarImage src={experience.logo} />
                        <AvatarFallback>
                          {experience.company[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-2">
                        <div>
                          <h4 className="text-lg font-semibold md:text-xl">
                            {experience.position}
                          </h4>
                          <h5 className="text-sm font-medium md:text-base">
                            {experience.company}
                            <span> - </span>
                            {experience.location}
                          </h5>
                        </div>
                        <h6 className="text-sm md:text-base">
                          {experience.duration.start} - {experience.duration.end}
                        </h6>
                      </div>
                    </div>
                    {/* <Separator className="w-full bg-primary/40 mt-3 mb-5" /> */}
                  </div>
                </AccordionTrigger>
              </MagicCard>
              <AccordionContent className="px-6 rounded-xl bg-secondary/40">
                <div className="w-full flex flex-col gap-2">
                  {
                    experience.responsibilities.map((responsibility, index) => (
                      <div className="flex gap-2">
                        -
                        <p key={index} className="text-primary/90 md:text-lg leading-5 md:leading-7">
                          {responsibility}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </AccordionContent>
            </AccordionItem>
        ))
      }
      </Accordion>
      </div>

    </section>
  )
}

export default ExperienceSection
