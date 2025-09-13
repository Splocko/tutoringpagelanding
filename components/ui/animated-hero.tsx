import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="w-full bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto">
        <div className="flex gap-8 py-24 lg:py-48 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
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

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
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
      </div>
    </div>
  );
}

export { Hero };
