import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Spin } from 'antd';

import { AppRouter, ErrorBoundary, LoadingSpinner } from '@/components';

Spin.setDefaultIndicator(<LoadingSpinner />);

export const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <Router>
        <AppRouter />
      </Router>
    </HelmetProvider>
  </ErrorBoundary>
);
