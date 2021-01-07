import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';

import { lazy, routeKey } from './_fn';

const errorRouteList: IRouteItem[] = [
  {
    name: 'Error404',
    path: '/*',
    LazyComp: lazy(
      () =>
        import(
          /* webpackChunkName: 'Error404' */
          '@/pages/error/Error404/Error404'
        ),
    ),
    exact: true,
  },
];

export const errorRoute = errorRouteList.map((route) => (
  <Route
    key={routeKey(route)}
    path={route.path}
    name={route.name}
    exact={route.exact}
    render={() => <route.LazyComp routeProps={route} />}
  />
));
