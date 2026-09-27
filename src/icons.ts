import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

type IconType = {
    [key: string]: React.ComponentType<{ size?: number }>;
};  

export const iconMap: IconType = {
    LinkedIn: FaLinkedinIn,
    Facebook: FaFacebookF,
    Twitter: FaTwitter,
};