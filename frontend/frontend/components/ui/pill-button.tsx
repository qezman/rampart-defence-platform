import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type PillButtonVariant = 'primary' | 'ghost' | 'ghost-dark'

interface PillButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: PillButtonVariant
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  id?: string
}

const variantStyles: Record<PillButtonVariant, string> = {
  primary: [
    'bg-[var(--accent)] text-white',
    'hover:bg-[var(--accent-hover)]',
    'transition-colors duration-300',
  ].join(' '),
  ghost: [
    'bg-white/10 text-white',
    'hover:bg-white/16',
    'transition-colors duration-300',
  ].join(' '),
  'ghost-dark': [
    'bg-black/10 text-[var(--text-dark)]',
    'border border-black/20',
    'hover:bg-black/16',
    'transition-colors duration-300',
  ].join(' '),
}

export default function PillButton({
  children,
  href,
  onClick,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  disabled = false,
  className,
  id,
}: PillButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'rounded-[980px] px-[22px] py-3',
    'text-[17px] font-normal leading-normal',
    'cursor-pointer select-none',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    fullWidth && 'w-full',
    variantStyles[variant],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={baseStyles} id={id}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyles} id={id}>
      {children}
    </button>
  )
}
