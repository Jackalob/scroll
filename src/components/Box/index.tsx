import React, { memo } from 'react';

import STYLE from './style.module.scss';

function Box({
  children,
  className = '',
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return <div className={`${STYLE.wrapper} ${className}`}>{children}</div>;
}

export default memo(Box);
