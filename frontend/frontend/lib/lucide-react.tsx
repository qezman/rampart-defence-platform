import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

function IconBase({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ChevronDown(props: IconProps) {
  return <IconBase {...props}><path d="m6 9 6 6 6-6" /></IconBase>
}

export function ChevronLeft(props: IconProps) {
  return <IconBase {...props}><path d="m15 18-6-6 6-6" /></IconBase>
}

export function ChevronRight(props: IconProps) {
  return <IconBase {...props}><path d="m9 18 6-6-6-6" /></IconBase>
}

export function ArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  )
}

export function Download(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </IconBase>
  )
}

export function RefreshCw(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 12a9 9 0 0 1 15.2-6.4L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.2 6.4L3 16" />
      <path d="M3 21v-5h5" />
    </IconBase>
  )
}

export function Settings(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12.2 2h-.4a2 2 0 0 0-2 1.7l-.1.7a2 2 0 0 1-3 1.2l-.6-.4a2 2 0 0 0-2.6.3l-.3.3a2 2 0 0 0-.3 2.6l.4.6a2 2 0 0 1-1.2 3l-.7.1a2 2 0 0 0-1.7 2v.4a2 2 0 0 0 1.7 2l.7.1a2 2 0 0 1 1.2 3l-.4.6a2 2 0 0 0 .3 2.6l.3.3a2 2 0 0 0 2.6.3l.6-.4a2 2 0 0 1 3 1.2l.1.7a2 2 0 0 0 2 1.7h.4a2 2 0 0 0 2-1.7l.1-.7a2 2 0 0 1 3-1.2l.6.4a2 2 0 0 0 2.6-.3l.3-.3a2 2 0 0 0 .3-2.6l-.4-.6a2 2 0 0 1 1.2-3l.7-.1a2 2 0 0 0 1.7-2v-.4a2 2 0 0 0-1.7-2l-.7-.1a2 2 0 0 1-1.2-3l.4-.6a2 2 0 0 0-.3-2.6l-.3-.3a2 2 0 0 0-2.6-.3l-.6.4a2 2 0 0 1-3-1.2l-.1-.7a2 2 0 0 0-2-1.7Z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  )
}

export function ShieldCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.5a1.3 1.3 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  )
}

export function Wrench(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18a2.1 2.1 0 0 0 3 3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.8-.7-.7-2.8Z" />
    </IconBase>
  )
}

export function X(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  )
}
