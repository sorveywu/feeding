import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, ScrollView } from '@tarojs/components';
import { getAge, getDate } from '../../utils/dateFormat';
import CellTitle from '../../components/cellTitle';
import DataControl from '../../utils/DataControl';
import { getToken } from '../../utils/tokenUtil';
import WeatherComponent from './weather.component';

import './index.scss'

const IndexPage = () => {
  const { month, date } = getDate();
  const userInfo = useSelector(({ global }) => global.userInfo);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      DataControl.goLogin();
      return;
    }
    const fetchData = async () => {
      await DataControl.actions.getWeather();
      await DataControl.actions.init();
    }
    fetchData()
  }, []);


  return <View className='container'>
    <van-nav-bar
      title='首页'
      customClass='nav-bar'
      titleClass='nav-bar-text'
    />
    <View className='header'>
      <View className='header-left'>
        <Text className='date-day'>{date}</Text>
        <Text className='date-month'>{month}月</Text>
      </View>
      <View className='header-right'>
        <WeatherComponent />
      </View>
    </View>

    <CellTitle title='今日记录'></CellTitle>

    <View className='scroll-wrap'>
      <ScrollView scrollY className='scroll-container'>

      </ScrollView>
    </View>
  </View>
}

export default IndexPage;
