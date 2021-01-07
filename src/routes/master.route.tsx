import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';

import Home from '@/pages/home/Home/Home';

import { lazy, routeKey } from './_fn';

const masterRouteList: IRouteItem[] = [
  {
    name: 'AboutDarkMode',
    path: '/about/:name',
    LazyComp: lazy(() => import('@/pages/about/AboutDarkMode/AboutDarkMode')),
  },
  {
    name: 'About',
    path: '/about',
    LazyComp: lazy(() => import('@/pages/about/About/About')),
    exact: true,
  },
  {
    name: 'Home',
    path: '/',
    LazyComp: Home,
    exact: true,
  },
];

export const masterRoute = masterRouteList.map((route) => (
  <Route
    key={routeKey(route)}
    path={route.path}
    name={route.name}
    exact={route.exact}
    render={() => <route.LazyComp routeProps={route} />}
  />
));
