"use client";

import { motion } from "framer-motion";
import FallbackImage from "@/components/ui/fallback-image";
import { IMAGE_FALLBACKS } from "@/lib/utils/image-fallbacks";
import type { TeamMember } from "@/types/team";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col"
    >
      <div
        className="w-full aspect-square mb-5 rounded-card overflow-hidden relative"
        style={{
          background: "linear-gradient(145deg, #1e2535 0%, #111 100%)",
        }}
      >
        <FallbackImage
          src={member.image}
          fallbackSrc={IMAGE_FALLBACKS.team}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        />
      </div>

      <p className="type-title-3 text-[var(--text-white)] mb-1">
        {member.name}
      </p>
      <p className="type-label text-[var(--accent-dark-bg)] mb-3">
        {member.title}
      </p>
      <p className="type-caption text-[var(--text-secondary)] leading-relaxed">
        {member.bio}
      </p>
    </motion.div>
  );
}
