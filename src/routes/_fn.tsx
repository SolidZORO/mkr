import _ from 'lodash';
import React from 'react';
import lazyLib from '@loadable/component';

import { IRouteItem } from '@/interfaces';

import { LoadingSpinner } from '@/components';

export const lazy = (component: any) =>
  lazyLib(component, { fallback: <LoadingSpinner size="small" lazy /> });

export const routeKey = (route: IRouteItem) =>
  route.children ? `group-${route.name}` : route.path;

export interface IRouteRender {
  route: any;
  layoutComp: React.ReactNode;
}

export const routeRender = (opts: IRouteRender) => {
  const routeProps = _.omit(opts?.route, ['LazyComp', 'icon']);

  return (
    // @ts-ignore
    <opts.layoutComp routeProps={routeProps} mainComp={opts.route.LazyComp} />
  );
};
