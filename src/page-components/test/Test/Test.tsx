import cx from 'classnames';
import React from 'react';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, PageWrapper } from '@/components';

import styles from './styles.module.less';

import './_css.css';
import './_less.less';

interface IProps extends IPageBaseProps {}

export const Test: React.FC<IProps> = (props) => (
  <PageWrapper className={cx(styles['comp-wrapper'], props.className)}>
    <HtmlMeta title="Test" />

    <div className="image-bg--css">css</div>
    <hr />
    <div className="image-bg--less">less</div>
    <hr />
    <div className={styles['image-bg--less-module']}>less module</div>

    <div className="test--less">TEST LESS</div>
    <div className="test--css">TEST CSS</div>
  </PageWrapper>
);
