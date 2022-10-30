import React from 'react';
import STYLE from './style.module.scss';

function Box({
  children,
  className,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return <div className={`${className} ${STYLE.wrapper}`}>{children}</div>;
}

export default Box;
