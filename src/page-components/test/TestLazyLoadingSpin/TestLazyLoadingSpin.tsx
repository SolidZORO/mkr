import cx from 'classnames';
import React from 'react';

import { IPageProps } from '@/interfaces';
import { HtmlMeta, PageContainer, LazyLoadingSpin } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const TestLazyLoadingSpin: React.FC<IProps> = (props) => {
  return (
    <PageContainer
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${TestLazyLoadingSpin.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.routeProps.name} />

      <LazyLoadingSpin fullscreen />
      <LazyLoadingSpin style={{ color: 'red' }} />
    </PageContainer>
  );
};
