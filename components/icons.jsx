import { Github, Moon, SunMedium, Twitter } from "lucide-react";

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  gitHub: Github,
  google: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19.76 10.77l-.09-.35h-7.44v3.16h4.45a4.45 4.45 0 01-4.36 3.34 5.21 5.21 0 01-3.5-1.39A5 5 0 017.33 12a5.14 5.14 0 011.46-3.53 5 5 0 013.48-1.37 4.55 4.55 0 013 1.16L17.47 6a7.88 7.88 0 00-5.27-2 8.14 8.14 0 00-5.77 2.35 8.15 8.15 0 00-.09 11.21 8.37 8.37 0 006 2.44 7.45 7.45 0 005.41-2.27 8 8 0 002.08-5.54 9.88 9.88 0 00-.07-1.42z"></path>
    </svg>
  ),
  spinner: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
