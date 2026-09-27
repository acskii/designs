/*
  TODO:
  - Link on learn more
  - Carousal on more than 3 case studies
*/

import { LuArrowUpRight } from "react-icons/lu";
import Divivder from "../components/Divider";

interface CaseStudiesProps {
  studies: string[];
}

export default function CaseStudies({ studies } : CaseStudiesProps) {
  return (
    <section className="w-full h-auto flex flex-col items-start justify-start gap-2.5">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-16 py-10 lg:py-17.5 px-6 sm:px-10 lg:px-15 bg-theme-dark rounded-[45px]">
        {studies.length === 0 && (
            <p className="text-white text-lg">
                No Case Studies
            </p>
        )}
        
        {studies.map((content, index) => (
            <>
            <div className="flex flex-col items-start justify-start gap-5">
              <p className="text-white text-lg">{content}</p>
              <div className="flex flex-row items-center justify-start gap-3.75">
                <span className="text-theme-green text-xl flex items-center gap-3">
                  Learn more
                  <LuArrowUpRight size={30} />
                </span>
              </div>
            </div>
            {index < studies.length - 1 && <Divivder />}
            </>
        ))}
      </div>
    </section>
  );
}