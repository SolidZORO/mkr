import React from 'react';
import cx from 'classnames';

import styles from './style.module.less';

interface IProps {
  icon: any;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const HugeIcon: React.FC<IProps> = (props) => {
  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${HugeIcon.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      {props.icon}
    </div>
  );
};
