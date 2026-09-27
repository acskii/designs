import ServiceCard from "../components/ServiceCard";


export default function Services() {
    return (
        <div className="w-full grid grid-cols-2 gap-10">
            <ServiceCard
                bg="light"
                titleLines={["Search engine", "optimization"]}
                illustrationSrc="static/magnifying_glass_service.png"
            />
            <ServiceCard
                bg="lime"
                titleBg="white"
                titleLines={["Pay-per-click", "advertising"]}
                illustrationSrc="static/mouse_click_service.png"
            />
            <ServiceCard
                bg="dark"
                titleBg="white"
                titleLines={["Social Media", "Marketing"]}
                illustrationSrc="static/emoji_window_service.png"
            />
            <ServiceCard
                bg="light"
                titleLines={["Email", "Marketing"]}
                illustrationSrc="static/send_messages_service.png"
            />
            <ServiceCard
                bg="lime"
                titleBg="white"
                titleLines={["Content", "Creation"]}
                illustrationSrc="static/content_creation_service.png"
            />
            <ServiceCard
                bg="dark"
                titleLines={["Analytics and ", "Tracking"]}
                illustrationSrc="static/analytic_windows_service.png"
            />
        </div>
    );
}