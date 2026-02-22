import { SVGProps } from "react";

export function WhatsAppIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path
        d="M15 3A12 12 0 0 0 4.7 21.2L3.1 27l6-1.6A12 12 0 1 0 15 3zm-4.1 6.4h.6c.2 0 .4 0 .6.5l1 2.2v.5l-.3.5-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.2 1.7 2 1 1 2 1.4 2.3 1.5.3.2.5.1.7 0 .2-.3.7-1 1-1.2.1-.3.3-.3.6-.2l2 1 .6.3-.2 1.4c-.2.7-1.4 1.4-2 1.5-.5 0-1 .2-3.5-.8-3-1.2-5-4.3-5.1-4.5a5.8 5.8 0 0 1-1.2-3c0-1.5.7-2.2 1-2.5.3-.3.6-.4.8-.4z"
        transform="scale(8.53333)"
      />
    </svg>
  );
}
