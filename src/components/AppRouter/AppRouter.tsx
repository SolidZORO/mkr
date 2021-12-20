import React from 'react';
import cx from 'classnames';
import { Route, Routes } from 'react-router-dom';

import { errorRoute, masterRoute, testRoute } from '@/routes';
import { ICompBaseProps } from '@/interfaces';
import { Error404 } from '@/page-components/error/Error404/Error404';

import styles from './styles.module.less';

interface IProps extends ICompBaseProps {}

export const AppRouter: React.FC<IProps> = (props) => {
  return (
    <div
      id="g-fixed-view-wrapper"
      className={cx(
        styles['comp-wrapper'],
        styles['comp-style--transition'],
        {
          [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode,
        },
        props.className,
        `g-comp--${AppRouter.displayName}`,
      )}
      style={props.style}
    >
      <Routes>
        <Route path="/empty" element={() => null} />
        <Route path="/404" element={<Error404 />} />

        {masterRoute}
        {testRoute}
        {errorRoute}
      </Routes>
    </div>
  );
};
