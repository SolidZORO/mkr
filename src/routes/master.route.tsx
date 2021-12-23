/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

import { IRouteItem } from '@/interfaces';
import { Home } from '@/page-components/home/Home/Home';
import { MasterLayout } from '@/layouts';

import { lazy, routeKey } from './_fn';

const masterRouteList: IRouteItem[] = [
  // {
  //   name: 'AboutDarkMode',
  //   path: '/about/:name',
  //   LazyComp: lazy(() => import(/* webpackChunkName: 'AboutDarkMode' */ '@/page-components/about/AboutName/AboutName' ).then((m) => ({ default: m.AboutName }))), // prettier-ignore
  // },
  // {
  //   name: 'About',
  //   path: '/about',
  //   LazyComp: lazy(() => import(/* webpackChunkName: 'About' */ '@/page-components/about/About/About' ).then((m) => ({ default: m.About }))), // prettier-ignore
  //   exact: true,
  // },
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
    element={
      <MasterLayout>
        <route.LazyComp routeProps={route} />
      </MasterLayout>
    }
  />
));
