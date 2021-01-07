import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';

import { lazy, routeKey } from './_fn';

const testRouteList: IRouteItem[] = [
  {
    name: 'TestLazyLoadingSpin',
    path: '/test/lazy-loading-spin',
    LazyComp: lazy(
      () => import('@/pages/test/TestLazyLoadingSpin/TestLazyLoadingSpin'),
    ),
  },
];

export const testRoute = testRouteList.map((route) => (
  <Route
    key={routeKey(route)}
    path={route.path}
    name={route.name}
    exact={route.exact}
    render={() => <route.LazyComp routeProps={route} />}
  />
));
