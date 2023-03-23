import * as React from 'react';
import { SVGProps, FC } from 'react';

const StarSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.144 6.628c.786-1.961 1.18-2.942 1.856-2.942.676 0 1.07.98 1.856 2.942l.037.09c.444 1.109.666 1.663 1.12 2 .452.336 1.047.39 2.236.496l.214.02c1.946.173 2.92.26 3.127.88.209.618-.514 1.276-1.96 2.59l-.481.44c-.732.665-1.098.998-1.268 1.434a2.002 2.002 0 0 0-.08.25c-.111.454-.004.937.21 1.902l.067.3c.393 1.775.59 2.662.247 3.045a1 1 0 0 1-.481.296c-.496.136-1.2-.438-2.61-1.586-.925-.754-1.388-1.131-1.919-1.216a1.997 1.997 0 0 0-.63 0c-.532.085-.994.462-1.92 1.216-1.408 1.148-2.113 1.722-2.609 1.586a1 1 0 0 1-.48-.296c-.344-.383-.147-1.27.246-3.044l.067-.301c.214-.966.321-1.448.21-1.903a2.002 2.002 0 0 0-.08-.25c-.17-.435-.536-.768-1.268-1.434l-.482-.439c-1.445-1.314-2.168-1.972-1.96-2.59.209-.62 1.182-.707 3.128-.881l.214-.02c1.19-.106 1.784-.159 2.237-.496.453-.336.675-.89 1.12-1.998l.036-.091Z"
      strokeWidth={1.4}
    />
  </svg>
);

export default StarSvg;
