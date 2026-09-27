interface TitleProps {
    title: string;
    desc: string;
}

export default function Title( { title, desc } : TitleProps ) {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-10 text-theme-black">
            <div className="p-1.5 bg-theme-green rounded-md text-center">
                <span className="text-2xl lg:text-4xl font-semibold">{title}</span>
            </div>
            <span className="text-md md:text-lg text-wrap">{desc}</span>
        </div>
    );
}