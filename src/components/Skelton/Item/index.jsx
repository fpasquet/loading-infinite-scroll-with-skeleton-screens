import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const SkeletonItem = ({ style, className }) => (
  <span className={classNames('skeleton-item', className)} style={style} />
);

export default SkeletonItem;
