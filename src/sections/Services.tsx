import ServiceCard from "../components/ServiceCard";


export default function Services() {
    return (
        <div className="w-full grid grid-cols-2 gap-10">
            <ServiceCard
                bg="light"
                titleLines={["Search engine", "optimization"]}
                illustrationSrc="src/assets/magnifying_glass_service.png"
            />
            <ServiceCard
                bg="lime"
                titleBg="white"
                titleLines={["Pay-per-click", "advertising"]}
                illustrationSrc="src/assets/mouse_click_service.png"
            />
            <ServiceCard
                bg="dark"
                titleBg="white"
                titleLines={["Social Media", "Marketing"]}
                illustrationSrc="src/assets/emoji_window_service.png"
            />
            <ServiceCard
                bg="light"
                titleLines={["Email", "Marketing"]}
                illustrationSrc="src/assets/send_messages_service.png"
            />
            <ServiceCard
                bg="lime"
                titleBg="white"
                titleLines={["Content", "Creation"]}
                illustrationSrc="src/assets/content_creation_service.png"
            />
            <ServiceCard
                bg="dark"
                titleLines={["Analytics and ", "Tracking"]}
                illustrationSrc="src/assets/analytic_windows_service.png"
            />
        </div>
    );
}