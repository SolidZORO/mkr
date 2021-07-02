import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { IconContext } from 'react-icons';
import { Spin } from 'antd';

import { AppRouter, ErrorBoundary, LoadingSpinner } from '@/components';

Spin.setDefaultIndicator(<LoadingSpinner />);

export const App = () => (
  <ErrorBoundary>
    <div className="app">
      <HelmetProvider>
        <IconContext.Provider value={{ className: 'rcicon g-rcicon' }}>
          <Router>
            <AppRouter />
          </Router>
        </IconContext.Provider>
      </HelmetProvider>
    </div>
  </ErrorBoundary>
);
