import React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/configs';

interface IProps {
  title: React.ReactNode;
  disableSiteName?: boolean;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const HtmlMeta: React.FC<IProps> = (props) => {
  const siteName = props.disableSiteName ? '' : ` - ${config.app.NAME}`;

  return (
    <Helmet>
      <title>
        {props.title || ''}
        {siteName}
      </title>
    </Helmet>
  );
};
