import React, { FC } from 'react';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';

import './index.scss';

type Props = {
  title: string;
  color?: string; // 字体颜色
  wideMode?: string;  // 是否宽屏模式，默认false，边距为20,
}

const CellTitle: FC<Props> = ({ title, wideMode = false, color = '#969799' }) => {
  const className = classNames('cell-title-container', { wideMode });
  return <View className={className} style={{ color: color }}>
    <Text>{title}</Text>
  </View>
}

export default CellTitle;