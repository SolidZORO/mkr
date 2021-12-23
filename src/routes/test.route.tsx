/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';

import { lazy, routeKey } from './_fn';

const testRouteList: IRouteItem[] = [
  {
    name: 'Test',
    path: '/test',
    LazyComp: lazy(() => import(/* webpackChunkName: 'Test' */ '@/page-components/test/Test/Test' ).then((m) => ({ default: m.Test }))), // prettier-ignore
  },
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
    element={<route.LazyComp routeProps={route} />}
  />
));
