import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CgSpinner as Spiner } from 'react-icons/cg';
import { Spin } from 'antd';

import { MasterLayout } from '@/layouts';
import { ErrorBoundary } from '@/components';

Spin.setDefaultIndicator(
  <Spiner className="icon-spin" style={{ fontSize: '200%' }} />,
);

export default function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <HelmetProvider>
          <Router>
            <Switch>
              <Route component={MasterLayout} />
              <Redirect to="/404" />
            </Switch>
          </Router>
        </HelmetProvider>
      </div>
    </ErrorBoundary>
  );
}
