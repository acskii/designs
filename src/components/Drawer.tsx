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
            className={`cursor-pointer w-full flex flex-col gap-2.5 pt-10.25 pb-10.25 px-6 md:px-15 border border-theme-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] overflow-hidden transition-colors ${
                isOpen ? "bg-theme-green" : "bg-theme-gray"
            }`}
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse step" : "Expand step"}
        >
            <div className="w-full flex items-center justify-center md:justify-between md:gap-88 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-6.25">
                    <span className="text-theme-black font-bold text-2xl md:text-[60px]">
                        {number}
                    </span>
                    <p className="text-theme-black text-center text-[18px] md:text-[30px] font-semibold">
                        {title}
                    </p>
                </div>
                <span className="hidden md:block rounded-full bg-theme-gray text-theme-black border border-theme-dark font-bold">
                    {isOpen ? <LuMinus size={58} /> : <LuPlus size={58} />}
                </span>
            </div>

            {isOpen && (
                <>
                    <div className="w-full h-0 border-b border-solid border-theme-black" />
                    <p className="text-theme-black text-lg">{desc}</p>
                </>
            )}
        </div>
    );
}