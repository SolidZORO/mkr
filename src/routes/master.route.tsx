/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';
import { Home } from '@/page-components/home/Home/Home';
import { MasterLayout } from '@/layouts';

import { lazy, routeKey, routeRender } from './_fn';

const masterRouteList: IRouteItem[] = [
  {
    name: 'AboutDarkMode',
    path: '/about/:name',
    LazyComp: lazy(() => import(/* webpackChunkName: 'AboutDarkMode' */ '@/page-components/about/AboutName/AboutName' ).then((m) => ({ default: m.AboutName }))), // prettier-ignore
  },
  {
    name: 'About',
    path: '/about',
    LazyComp: lazy(() => import(/* webpackChunkName: 'About' */ '@/page-components/about/About/About' ).then((m) => ({ default: m.About }))), // prettier-ignore
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...route}
    key={routeKey(route)}
    render={(renderProps) =>
      routeRender({
        route,
        renderProps,
        layoutComp: MasterLayout,
      })
    }
  />
));
