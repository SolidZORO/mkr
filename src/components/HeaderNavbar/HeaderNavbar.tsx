import React from 'react';
import cx from 'classnames';
import { Button } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import { FiPercent, FiMoon, FiTriangle } from 'react-icons/fi';

import styles from './style.module.less';

interface IProps {
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const HeaderNavbar: React.FC<IProps> = (props) => {
  const navs = [
    { to: '/', icon: <FiTriangle />, exact: true },
    { to: '/about', icon: <FiPercent />, exact: true },
    { to: '/about/darkmode', icon: <FiMoon />, exact: true },
  ];

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode },
        props.className,
      )}
      style={props.style}
    >
      {navs.map((nav) => (
        <Link exact to={nav.to} key={nav.to} className={styles['nav-link']}>
          <Button type="ghost" className={styles['nav-button']}>
            {nav.icon}
          </Button>
        </Link>
      ))}
    </div>
  );
};
