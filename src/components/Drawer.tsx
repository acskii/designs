import { LuMinus, LuPlus } from "react-icons/lu";

interface DrawerProps {
    number: string;
    title: string;
    desc: string;
    isOpen: boolean;
    onToggle: () => void;
}

export default function Drawer({ number, title, desc, isOpen, onToggle } : DrawerProps) {
    return (
        <div
            className={`cursor-pointer w-full flex flex-col items-start justify-start gap-2.5 pt-10.25 pb-10.25 px-15 border border-solid border-theme-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] overflow-hidden transition-colors ${
                isOpen ? "bg-theme-green" : "bg-[#F3F3F3]"
            }`}
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse step" : "Expand step"}
        >
            <div className="w-full flex flex-row items-center justify-between gap-88 overflow-hidden">
                <div className="flex flex-row items-center justify-start gap-6.25">
                    <span className="text-theme-black font-bold text-[60px]">
                        {number}
                    </span>
                    <p className="text-theme-black text-[30px] font-semibold">
                        {title}
                    </p>
                </div>
                <span className="rounded-full bg-[#F3F3F3] border border-[#191A23] font-bold">
                    {isOpen ? (
                        <LuMinus size={58} className="text-theme-black" strokeWidth={1.5} />
                    ) : (
                        <LuPlus size={58} className="text-theme-black" strokeWidth={1.5} />
                    )}
                </span>
            </div>

            {isOpen && (
                <>
                    <div className="w-full h-0 border-b border-solid border-theme-black" />
                    <p className="text-theme-black text-lg">
                        {desc}
                    </p>
                </>
            )}
        </div>
    );
}