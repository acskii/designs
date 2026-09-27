import ServiceCard from "../components/ServiceCard";


export default function Services() {
    return (
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-10">
            <ServiceCard
                bg="light"
                titleLines={["Search engine", "optimization"]}
                imgSrc="static/magnifying_glass_service.png"
            />
            <ServiceCard
                bg="lime"
                titleBg="white"
                titleLines={["Pay-per-click", "advertising"]}
                imgSrc="static/mouse_click_service.png"
            />
            <ServiceCard
                bg="dark"
                titleBg="white"
                titleLines={["Social Media", "Marketing"]}
                imgSrc="static/emoji_window_service.png"
            />
            <ServiceCard
                bg="light"
                titleLines={["Email", "Marketing"]}
                imgSrc="static/send_messages_service.png"
            />
            <ServiceCard
                bg="lime"
                titleBg="white"
                titleLines={["Content", "Creation"]}
                imgSrc="static/content_creation_service.png"
            />
            <ServiceCard
                bg="dark"
                titleLines={["Analytics and ", "Tracking"]}
                imgSrc="static/analytic_windows_service.png"
            />
        </div>
    );
}