/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';

import { lazy, routeKey } from './_fn';

const testRouteList: IRouteItem[] = [
  {
    name: 'TestLazyLoadingSpin',
    path: '/test/lazy-loading-spin',
    LazyComp: lazy(() => import(/* webpackChunkName: 'TestLazyLoadingSpin' */ '@/page-components/test/TestLazyLoadingSpin/TestLazyLoadingSpin' ).then((m) => ({ default: m.TestLazyLoadingSpin }))), // prettier-ignore
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
