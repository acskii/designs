
interface TitleProps {
    title: string;
    desc: string;
}

export default function Title( { title, desc } : TitleProps ) {
    return (
        <div className="w-full inline-flex justify-start items-start gap-10 text-theme-black">
            <div className="size- inline-flex flex-col justify-start items-start">
                <div className="px-1.5 bg-theme-green rounded-md flex flex-col justify-start items-start gap-2.5">
                <div className="justify-start text-4xl font-semibold">{title}</div>
                </div>
            </div>
            <div className="justify-starttext-lg">{desc}</div>
        </div>
    );
}