export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="agmp-logo" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#7dd3fc" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#0b63d6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#agmp-logo)" />
      {/* stylized windshield + rising chart */}
      <path
        d="M11 13.5c0-.8.6-1.5 1.4-1.7 2.4-.5 4.9-.8 7.6-.8s5.2.3 7.6.8c.8.2 1.4.9 1.4 1.7v5.8c0 3.6-3 6.4-6.6 6.4h-4.8c-3.6 0-6.6-2.8-6.6-6.4v-5.8Z"
        fill="rgba(5,7,15,0.22)"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11 15.5h18M20 11v14"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M15 30l3.5-4 3 2.5 5-6"
        stroke="#05070f"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
