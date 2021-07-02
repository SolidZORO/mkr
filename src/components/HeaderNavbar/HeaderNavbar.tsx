import React from 'react';
import cx from 'classnames';
import { Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiPercent, FiTriangle } from 'react-icons/fi';
import { ICompBaseProps } from '@/interfaces';

import styles from './style.module.less';

interface IProps extends ICompBaseProps {}

export const HeaderNavbar: React.FC<IProps> = (props) => {
  const { pathname } = useLocation();

  const navs = [
    { to: '/', icon: <FiTriangle />, exact: true },
    { to: '/about', icon: <FiPercent />, exact: true },
    { to: '/about/darkmode', icon: <FiMoon />, exact: true },
  ];

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${HeaderNavbar.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      {navs.map((nav) => (
        <Link
          to={nav.to}
          key={nav.to}
          className={cx(styles['nav-link'], {
            [styles['nav-link--active']]: pathname === nav.to,
          })}
        >
          <Button type="ghost" className={styles['nav-button']}>
            {nav.icon}
          </Button>
        </Link>
      ))}
    </div>
  );
};
