import React from 'react';
import { Button } from 'antd';

import cssModuleStyles from './styles-css.module.css';
import lessModuleStyles from './styles-less.module.less';

import './styles-less.less';
import './styles-css.css';

export default function DemoButton() {
  return (
    <div className={lessModuleStyles['comp-wrapper']}>
      <h2>Antd:</h2>
      <Button type="primary" ghost size="large">
        Antd
      </Button>

      <div className="line" />

      <h2>CSS:</h2>
      <button type="button" className="css-button">
        CSS
      </button>
      <button type="button" className={cssModuleStyles['css-module-button']}>
        CSS Modules
      </button>

      <div className="line" />

      <h2>Less:</h2>

      <button type="button" className="less-button">
        Less
      </button>
      <button type="button" className={lessModuleStyles['less-module-button']}>
        Less Modules
      </button>
    </div>
  );
}
