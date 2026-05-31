import { cn } from '@/lib/utils/cn'

interface SectionLabelProps {
  children: React.ReactNode
  onLight?: boolean
  className?: string
}

export default function SectionLabel({ children, onLight = false, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'type-label',
        onLight
          ? 'text-[var(--accent)]'
          : 'text-[var(--accent-dark-bg)]',
        className,
      )}
    >
      {children}
    </p>
  )
}
