import PersonCard from "../components/PersonCard";

interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  socialIcon: string;
}

interface TeamProps {
    members: TeamMember[];
}

export default function Team({ members } : TeamProps) {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                {members.map((member) => (
                <PersonCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
}