import React from 'react';
import cx from 'classnames';
import { Redirect, Route, Switch } from 'react-router';

import { errorRoute, masterRoute, testRoute } from '@/routes';
import { ICompBaseProps } from '@/interfaces';

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
      <Switch>
        <Route exact path="/empty" component={() => null} />

        {masterRoute}
        {testRoute}
        {errorRoute}

        <Redirect exact to="/404" />
      </Switch>
    </div>
  );
};
