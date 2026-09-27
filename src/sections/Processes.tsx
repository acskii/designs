import { useState } from "react";
import Drawer from "../components/Drawer";

interface Process {
    number: string;
    title: string;
    desc: string;
}

interface ProcessesProps {
    processes: Process[];
}

export default function Processes({ processes } : ProcessesProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="w-full flex flex-col items-start justify-start gap-7.5">
            {processes.map((p, index) => (
                <Drawer
                key={index}
                number={p.number}
                title={p.title}
                desc={p.desc}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}