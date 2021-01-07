import React from 'react';
import loadable from '@loadable/component';

import { IRouteItem } from '@/interfaces';

import { LazyLoadingSpin } from '@/components';
// import { MasterLayout } from '@/layouts';

export const lazy = (comp: any) =>
  loadable(comp, {
    fallback: <LazyLoadingSpin style={{ fontSize: '70%' }} />,
  });

export const routeKey = (route: IRouteItem) =>
  route.children ? `group-${route.name}` : route.path;

// export const routeRender = (route: IRouteItem) => ({
//   component:
//     typeof route.LazyComp === 'function'
//       ? () => <MasterLayout>{route.LazyComp}</MasterLayout>
//       : undefined,
//   render:
//     typeof route.LazyComp === 'object'
//       ? () => (
//           <MasterLayout>
//             <route.LazyComp />
//           </MasterLayout>
//         )
//       : undefined,
// });
