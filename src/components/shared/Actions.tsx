import { css, cx } from '@emotion/css';
import React, { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

export default function Actions({ children, className }: PropsWithChildren<Props>): JSX.Element {
  return <div className={cx(style.actions, className)}>{children}</div>;
}

const style = {
  actions: css`
    display: inline-block;
    padding: 2 0;
    justify-content: flex-end;
    min-height: 60px;
    float: right;
  `,
};
