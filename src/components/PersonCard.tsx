/*
    TODO:
    - Add image mask as in design
*/

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
      className="w-full sm:w-96.75 min-h-82.75 flex flex-col items-start justify-start gap-2.5 pt-10 pb-10 px-8.75 bg-white border border-solid border-theme-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] overflow-hidden transition-all duration-300 ease-out hover:bg-theme-gray hover:scale-[0.98] hover:shadow-[0px_3px_0px_0px_#191A23]"
    >
        <div className="flex flex-col items-start justify-start gap-7 w-full">
            <div className="flex flex-row items-start justify-start self-stretch w-full">
                <div className="flex flex-1 flex-row items-end justify-start gap-5 pr-19">
                    <div className="shrink-0">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="block w-25.75 h-25.75 object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col pb-2">
                        <span className="text-theme-black text-lg font-medium whitespace-nowrap">
                            {member.name}
                        </span>
                        <span className="text-theme-black text-sm whitespace-nowrap">
                            {member.role}
                        </span>
                    </div>
                </div>
                <SocialIcon social="LinkedIn" theme="black" href="#" />
            </div>

            <div className="w-full h-0 border-b border-solid border-theme-black" />

            <p className="text-theme-black text-lg">
                {member.bio}
            </p>
        </div>
    </div>
  );
}