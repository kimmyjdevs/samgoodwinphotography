// Small stroke-based inline icons, matching the Instagram icon already
// inlined in Footer.jsx (1.5 stroke width, currentColor).

const BASE_PROPS = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function TrophyIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5a2 2 0 0 0 2 3.5M16 5h3a2 2 0 0 1-2 3.5" />
      <path d="M12 13v3M9 20h6M10 20v-2.5a2 2 0 0 1 4 0V20" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  )
}

export function CameraIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  )
}

export function PlaneIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
      <path d="m12.5 13.5 3-3" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="M12 3.5 14.5 9l6 .8-4.3 4.1 1 6-5.2-2.8-5.2 2.8 1-6-4.3-4.1 6-.8L12 3.5Z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  )
}

export function ChevronLeftIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  )
}

export function ChevronRightIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  )
}
