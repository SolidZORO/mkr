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

export const AboutDarkMode: React.FC<IProps> = (props) => {
  useDarkMode();

  const { name } = useParams<{ name?: string }>();

  return (
    <PageContainer
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${AboutDarkMode.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={`${name}`} />

      <HugeIcon icon={<FiMoon />} className={styles['huge-icon']} />

      <div className={styles['params-info']}>
        <code>{name}</code>
      </div>
    </PageContainer>
  );
};
