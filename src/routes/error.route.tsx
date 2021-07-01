/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';
import { Error404 } from '@/page-components/error/Error404/Error404';

import { routeKey } from './_fn';

const errorRouteList: IRouteItem[] = [
  {
    name: 'Error404',
    path: '/*',
    LazyComp: Error404,
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
