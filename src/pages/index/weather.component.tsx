import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Text, Image } from '@tarojs/components';

const WeatherComponent: FC = () => {
  const weather = useSelector(({ global }) => global.weather);
  const { temperature = '···', wetherImg } = weather || {};
  return <Fragment>
    <Text className='weather-num'>{temperature}</Text>
    {weather && <Text className='weather-str'>℃</Text>}
    {wetherImg && <Image className='weather-img' src={wetherImg} />}
  </Fragment>
}

export default WeatherComponent;