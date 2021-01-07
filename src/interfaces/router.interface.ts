import { match } from 'react-router-dom';
import * as H from 'history';

export interface IRouteItem {
  name: string;
  path: string;
  //
  icon?: any;
  exact?: boolean;
  children?: IRouteItem[];
  alwaysDarkMode?: boolean;
  LazyComp?: any;
}

export interface IRouteProps extends IRouteItem {
  match?: match<any>;
  location?: H.Location<any>;
}

export interface IPageProps {
  routeProps: IRouteItem;
}
