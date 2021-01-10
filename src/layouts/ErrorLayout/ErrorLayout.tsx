import cx from 'classnames';
import React from 'react';
import { Switch } from 'react-router-dom';

import { errorRoute } from '@/routes';
import { HeaderNavbar, FooterNav } from '@/components';

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
    id="g-layout-wrapper--error"
    className={cx(
      styles['layout-wrapper'],
      { [styles['layout-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
      'g-layout-wrapper--error',
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
