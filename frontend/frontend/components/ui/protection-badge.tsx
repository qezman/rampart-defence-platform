import { cn } from '@/lib/utils/cn'

interface ProtectionBadgeProps {
  level: string
  className?: string
}

export default function ProtectionBadge({ level, className }: ProtectionBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[980px]',
        'bg-[var(--accent)] text-white',
        'px-3 py-[3px]',
        'text-[11px] font-medium leading-normal tracking-[0.08em] uppercase',
        className,
      )}
    >
      {level} Certified
    </span>
  )
}
