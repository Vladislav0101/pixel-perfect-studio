import { SVGProps } from "react";

export function EmailIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...props}
    >
      <rect x="2.5" y="4" width="13" height="10" rx="2" />
      <path d="M3 5l6 5 6-5" />
    </svg>
  );
}
