import cx from 'classnames';
import React from 'react';
import { FiTriangle } from 'react-icons/fi';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, HugeIcon, PageContainer } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const Home: React.FC<IProps> = (props) => {
  return (
    <PageContainer
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${Home.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.routeProps.name} />

      <HugeIcon icon={<FiTriangle />} />
    </PageContainer>
  );
};
