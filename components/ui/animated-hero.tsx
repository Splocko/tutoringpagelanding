"use client"
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import { Button } from "@/components/ui/button";

interface HeroProps {
  setIsModalOpen: (open: boolean) => void;
}

function Hero({ setIsModalOpen }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Maths", "Science", "Physics", "Biology", "Computer Science", "11+", "AQA", "Edexcel", "Other Exam Boards"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Reuno UI inspired background using MeshGradient layers */}
      <div className="absolute inset-0 z-0 bg-black">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
          speed={0.3}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-85"
          colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
          speed={0.2}
          // @ts-expect-error - library accepts string "true" for wireframe
          wireframe="true"
        />
      </div>
      <div className="relative z-10 flex gap-8 min-h-screen items-center justify-center flex-col text-center px-6 py-16 text-white">
          {/* Announcement banner: compact inline on mobile, floating on desktop */}
          <div className="w-full flex justify-center sm:hidden">
            <AnnouncementBanner
              message="Limited offer: Free taster session for your child"
              cta="Contact now"
              onCtaClick={() => setIsModalOpen(true)}
              className="max-w-[20rem] text-xs"
            />
          </div>
          <div className="hidden sm:block absolute top-20 sm:top-24 left-1/2 -translate-x-1/2">
            <AnnouncementBanner
              message="Limited offer: Free taster session for your child"
              cta="Contact now"
              onCtaClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter font-regular">
              GCSE & 11+ Tutoring
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-primary"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white/80 max-w-2xl mx-auto">
              I'm a tutor who achieved outstanding GCSE grades and I'm here to help you do the same. Focused,
              friendly, and effective tutoring to help you achieve your target grades. One-to-one and group sessions
              available online.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl font-medium rounded-xl soft-glow"
            >
              Contact Me
            </Button>
          </div>
        </div>
    </section>
  );
}

export { Hero };
