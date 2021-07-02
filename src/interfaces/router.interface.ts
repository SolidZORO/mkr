import { match } from 'react-router';
import * as H from 'history';

export interface IRouteItem {
  name: string;
  path: string;
  //
  when?: 'forward' | 'back' | 'always'; // default 'forward'
  auth?: boolean;
  exact?: boolean;
  icon?: any;
  children?: IRouteItem[];
  bodyClassName?: string;
  alwaysDarkMode?: boolean;
  LazyComp?: any;
}

// declare type ILocation = Pick<RouteComponentProps, 'location'>;

export interface IRouteProps extends IRouteItem {
  match?: match<any>;
  location?: H.Location<any>;
}
