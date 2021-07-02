import cx from 'classnames';
import React from 'react';
import { Switch } from 'react-router-dom';

import { errorRoute } from '@/routes';
import { FooterNav, HeaderNavbar } from '@/components';

import styles from './styles.module.less';

export interface IProps {
  children: React.ReactNode;
  //
  disableHeader?: boolean;
  disableFooter?: boolean;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const ErrorLayout: React.FC<IProps> = (props) => (
  <div
    id={`g-layout--${ErrorLayout.displayName}`}
    className={cx(
      styles['comp-wrapper'],
      { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
      `g-comp--${ErrorLayout.displayName}`,
      props.className,
    )}
    style={props.style}
  >
    {props.disableHeader ? null : (
      <div className={cx(styles['layout-header'], 'g-layout-header--error')}>
        <HeaderNavbar />
      </div>
    )}

    <div
      className={cx(styles['layout-container'], 'g-layout-container--error')}
    >
      <Switch>{errorRoute}</Switch>
    </div>

    {props.disableFooter ? null : (
      <div className={cx(styles['layout-footer'], 'g-layout-footer--error')}>
        <FooterNav />
      </div>
    )}
  </div>
);
