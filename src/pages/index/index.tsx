import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { useSelector } from 'react-redux';
import { View, Text, Image, ScrollView, MovableArea, MovableView } from '@tarojs/components';
import { getAge, getDate } from '../../utils/dateFormat';
import CellTitle from '../../components/cellTitle';
import DataControl from '../../utils/DataControl';
import { getToken } from '../../utils/tokenUtil';
import WeatherComponent from './weather.component';
import LatestComp from './latest/index';

import './index.scss'

import penImg from '../../assets/images/tab/pen.png';
import naipingImg from '../../assets/images/naiping.png';
import tiwenImg from '../../assets/images/wenduji.png';
import boyImg from '../../assets/images/boy.png';
import yaoImg from '../../assets/images/yao.png';
import tizhongImg from '../../assets/images/tizhong.png';

const IndexPage = () => {
  const { month, date } = getDate();
  const currentBaby = useSelector(({ global }) => global.currentBaby);
  const currentBabyId = useSelector(({ global }) => global.currentBabyId);
  const userInfo = useSelector(({ global }) => global.userInfo);
  const daily = useSelector(({ record }) => record.daily);

  const { birthday } = currentBaby || {}
  let age: number | string = '--';
  birthday && (age = getAge(birthday));

  useEffect(() => {
    const token = getToken();
    if (!token) {
      DataControl.goLogin();
      return;
    }
    const fetchData = async () => {
      await DataControl.actions.getWeather();
      await DataControl.actions.init();
      await DataControl.actions.getDaily();
      await DataControl.actions.getRecordOfToday();
      await DataControl.actions.getLatestRecord();
    }
    fetchData()
  }, []);

  useEffect(() => {
    if (userInfo) {
      if (!currentBabyId) {
        Taro.showModal({
          content: '您还没有添加宝宝，赶紧添加您的宝宝吧',
          showCancel: false,
          success: () => {
            Taro.navigateTo({ url: '/pages/index/index' })
          }
        })
      }
    }
  }, [currentBabyId, userInfo]);

  const addDailyRecord = () => {
    Taro.navigateTo({
      url: '/pages/addDaily/index'
    })
  }

  return <View className='container'>
    <van-nav-bar
      title='记一笔'
      customClass='nav-bar'
      titleClass='nav-bar-text'
    />
    <View className='header' onClick={addDailyRecord}>
      <View className='header-left'>
        <Text className='date-day'>{date}</Text>
        <Text className='date-month'>{month}月</Text>
      </View>
      <View className='header-mid'>
        <View className='column'>
          <View className='column-item'><Text>{age}</Text><Image className='header-icon' src={boyImg} /></View>
          <View className='column-item'><Image className='header-icon' src={yaoImg} /><Text>AD</Text></View>
        </View>
        <View className='column'>
          <View className='column-item'><Text>{daily ? daily.weight : '--'}</Text><Image className='header-icon' src={tizhongImg} /></View>
          <View className='column-item'><Image className='header-icon' src={tiwenImg} /><Text>{daily ? daily.temperature : '--'}</Text></View>
        </View>
      </View>
      <View className='header-right'>
        <WeatherComponent />
      </View>
    </View>

    <LatestComp />

    <CellTitle title='今日记录'></CellTitle>

    <View className='scroll-wrap'>
      <ScrollView scrollY className='scroll-container'>
        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>配方奶</Text></View>
            <View className='flow-desc'><Text>120ml</Text></View>
          </View>

          <View className='flow-line'></View>
        </View>
        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>母乳亲喂</Text></View>
            <View className='flow-desc'><Text>120ml</Text></View>
          </View>
          <View className='flow-line'></View>
        </View>

        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>小便</Text></View>
            <View className='flow-desc'><Text>少量</Text></View>
          </View>
          <View className='flow-line'></View>
        </View>

        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>大便</Text></View>
            <View className='flow-desc'><Text>褐色</Text></View>
          </View>
          <View className='flow-line'></View>
        </View>

        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>第一项</Text></View>
            <View className='flow-desc'><Text>质量一般</Text></View>
          </View>
          <View className='flow-line'></View>
        </View>

        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>第一项</Text></View>
            <View className='flow-desc'><Text>质量一般</Text></View>
          </View>
          <View className='flow-line'></View>
        </View>

        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>第一项</Text></View>
            <View className='flow-desc'><Text>质量一般</Text></View>
          </View>
          <View className='flow-line'></View>
        </View>

        <View className='flow-item'>
          <View className='flow-header'>
            <View className='flow-icon'>
              <Image src={naipingImg} />
            </View>
            <View className='flow-time'>
              <Text>15分钟前</Text>
              <Text>(2020-09-30 15:33:11)</Text>
            </View>
          </View>

          <View className='flow-content'>
            <View className='flow-name'><Text>第一项</Text></View>
            <View className='flow-desc'><Text>质量一般</Text></View>
          </View>
        </View>
      </ScrollView>
    </View>

    <MovableArea className='movable-area'>
      <MovableView className='movable-view' direction='vertical' style='bottom: 0px; top: none;'>
        <Image className='movable-icon' src={penImg} />
      </MovableView>
    </MovableArea>
  </View>
}

export default IndexPage;
