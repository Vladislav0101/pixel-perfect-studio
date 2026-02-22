import { SVGProps } from "react";

export function TelegramIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M128 10a118 118 0 1 1 0 236 118 118 0 0 1 0-236zm41 166 13-86c1-4-1-7-3-8-3-1-7 0-13 1L65 126c-5 2-9 4-9 8 0 2 1 3 5 5l19 6c6 1 12 0 16-2l51-35c3-2 5 1 3 4l-37 35c-5 5-1 10 2 12l34 23c4 3 8 5 12 5s6-5 8-11z" />
    </svg>
  );
}
