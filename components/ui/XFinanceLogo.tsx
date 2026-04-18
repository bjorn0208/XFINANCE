export function XFinanceLogo({ className, title }: { className?: string, title?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {title && <title>{title}</title>}
      <path
        d="M20 20 L60 80 L20 100"
        stroke="var(--color-primary)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M80 40 L60 80 L100 20"
        stroke="var(--color-primary)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10 L100 110"
        stroke="var(--color-primary)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M30 110 L110 30"
        stroke="var(--color-primary)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        x="130"
        y="75"
        fill="currentColor"
        fontFamily="sans-serif"
        fontSize="48"
        fontWeight="300"
        letterSpacing="0.2em"
      >
        FINANCE
      </text>
    </svg>
  );
}
