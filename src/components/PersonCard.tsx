import SocialIcon from "./SocialIcon";

interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  socialIcon: string;
}

interface PersonCardProps {
  member: TeamMember;
}

export default function PersonCard({ member }: PersonCardProps) {
  return (
    <div
      className="w-full min-h-82.75 flex flex-col gap-2.5 pt-10 pb-10 px-6 md:px-8.75 bg-white border border-theme-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] overflow-hidden transition-all duration-300 ease-out hover:bg-theme-gray hover:scale-[0.98] hover:shadow-[0px_3px_0px_0px_#191A23]"
    >
        <div className="flex flex-col gap-7 w-full">
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-5 md:pr-19">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="block w-25.75 h-25.75 object-cover rounded-full"
                    />
                    <div className="flex flex-col pb-2">
                        <span className="text-theme-black text-lg font-medium">
                            {member.name}
                        </span>
                        <span className="text-theme-black text-sm">
                            {member.role}
                        </span>
                    </div>
                </div>
                <SocialIcon social="LinkedIn" theme="black" href="#" />
            </div>

            <div className="w-full h-0 border-b border-theme-black" />
            <p className="text-theme-black text-md md:text-lg">{member.bio}</p>
        </div>
    </div>
  );
}