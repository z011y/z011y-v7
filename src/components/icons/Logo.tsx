import { useContext } from 'react';
import type { SVGProps } from "react"

import { ThemeContext } from 'src/contexts/theme';

const Logo = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useContext(ThemeContext);

  return (
    <svg
      width="2rem"
      height="2rem"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z"
        fill={theme === 'dark' ? '#000' : '#F3F3F3'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.666 12.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21.334 12.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10.666 23.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21.334 23.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#849DFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.281 10.286c0-.526.406-.953.907-.953h3.624c.5 0 .906.427.906.953s-.405.952-.906.952h-3.624c-.5 0-.907-.426-.907-.952ZM20 13.143l-6.719 7.061L12 18.857l6.718-7.061L20 13.143Zm-2.188 9.524h-3.624c-.5 0-.907-.427-.907-.953s.406-.952.907-.952h3.624c.5 0 .906.426.906.952s-.405.953-.906.953Z"
        fill="#849DFF"
      />
      <path
        d="M6.667 16A1.333 1.333 0 1 1 4 16a1.333 1.333 0 0 1 2.667 0ZM17.333 26.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM28 16a1.333 1.333 0 1 1-2.667 0A1.333 1.333 0 0 1 28 16ZM17.333 5.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
        fill="#849DFF"
      />
    </svg>
  )
}
export default Logo
