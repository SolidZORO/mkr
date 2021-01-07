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

export default function TestLazyLoadingSpin(props: IProps) {
  return (
    <PageContainer className={cx(styles['comp-wrapper'], props.className)}>
      <HtmlMeta title={props.routeProps.name} />

      <LazyLoadingSpin fullscreen />
      <LazyLoadingSpin style={{ color: 'red' }} />
    </PageContainer>
  );
}
