import type { TeamMember } from "@/types/team";

export const team: TeamMember[] = [
  {
    id: "charles-okonkwo",
    name: "Charles Okonkwo",
    title: "Chief Executive Officer",
    bio: "Former Special Forces officer with 22 years of operational and procurement experience across West and Central Africa. Founded Rampart in 2004 with a mandate to bring European certification standards to Sub-Saharan armoured vehicle engineering.",
    image: "/images/team/charles-okonkwo.jpg",
  },
  {
    id: "sarah-mwangi",
    name: "Sarah Mwangi",
    title: "Director of Operations",
    bio: "Programme manager with a background in military logistics and supply chain. Manages all client delivery timelines, workshop scheduling, and sub-contractor quality oversight. 15 years experience coordinating large-scale vehicle programmes across Africa and the Gulf.",
    image: "/images/team/sarah-mwangi.jpg",
  },
  {
    id: "daniel-bamidele",
    name: "Daniel Bamidele",
    title: "Head of Engineering",
    bio: "EN 287-certified master welder and structural engineer with 18 years in armoured vehicle manufacture and repair. Leads all ballistic integration and quality certification programmes. Responsible for zero failed ballistic tests across 500+ vehicle deliveries.",
    image: "/images/team/daniel-bamidele.jpg",
  },
  {
    id: "akram-abdelaziz",
    name: "Dr. Akram Abdelaziz",
    title: "Ballistic Testing & Certification Advisor",
    bio: "External certification advisor with 25 years in European ballistic testing laboratories. Oversees compliance with EN 1063, STANAG 4569, and VPAM standards. Conducts independent ballistic verification on all Rampart-certified deliveries.",
    image: "/images/team/akram-abdelaziz.jpg",
  },
];

export function getAllTeamMembers(): TeamMember[] {
  return team;
}
