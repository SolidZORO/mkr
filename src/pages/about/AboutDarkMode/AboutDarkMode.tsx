import cx from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';
import { FiMoon } from 'react-icons/fi';

import { IPageProps } from '@/interfaces';
import { useDarkMode } from '@/hooks';
import { HtmlMeta, PageContainer, HugeIcon } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export default function AboutDarkMode(props: IProps) {
  useDarkMode();

  const { name } = useParams<{ name?: string }>();

  return (
    <PageContainer className={cx(styles['comp-wrapper'], props.className)}>
      <HtmlMeta title={`${name}`} />

      <HugeIcon icon={<FiMoon />} className={styles['huge-icon']} />

      <div className={styles['params-info']}>
        <code>{name}</code>
      </div>
    </PageContainer>
  );
}
