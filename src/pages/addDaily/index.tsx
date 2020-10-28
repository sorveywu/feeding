import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { useSelector } from 'react-redux';
import { View, ScrollView } from '@tarojs/components';
import dayjs from 'dayjs';
import { RecordType } from '../../constants/entity.constant';
import DataControl from '../../utils/DataControl';
import CellTitle from '../../components/cellTitle';

import './index.scss';

enum MedicineType {
  Unknown = 0,
  AD = 1,
  D3 = 2,
}

const asyncLoading = (duration = 1000) => new Promise((res, rej) => {
  Taro.showLoading({ title: '加载中' })
  setTimeout(() => {
    Taro.hideLoading();
    res(true)
  }, duration)
})

interface formData {
  type: number,
  recordAt: string,
  height: number;
  weight: number;
  temperature: number;
  medicine: MedicineType;
}

const AddDaily = () => {
  const initialData: formData = {
    recordAt: dayjs().format(),
    type: RecordType.Daily,
    height: 0,
    weight: 0,
    temperature: 0,
    medicine: MedicineType.Unknown
  }

  const dailyOrigin = useSelector(({ record }) => record.daily);
  const daily = dailyOrigin ? Object.assign(initialData, dailyOrigin) : initialData;
  const [data, setData] = useState(daily);

  const onChange = e => {
    const { name } = e.currentTarget.dataset;
    data[name] = +e.detail;
    setData({ ...data });
  }

  const onClick = e => {
    const { name, value } = e.currentTarget.dataset;
    data[name] = value;
    setData({ ...data });
  }

  const onConfirm = async () => {
    await DataControl.actions.addDailyRecord(data);
    setTimeout(async () => {
      // 重新获取每日信息
      await DataControl.actions.getDaily();
      await asyncLoading();
      Taro.navigateBack();
    }, 1000)
  }

  const handleBack = () => {
    Taro.navigateBack();
  }

  return <View className='container'>
    <van-nav-bar
      title='每日记录'
      customClass='nav-bar'
      titleClass='nav-bar-text'
    >
      <van-icon name='arrow-left' slot='left' onClick={handleBack} />
    </van-nav-bar>
    <View className='scroll-wrap'>
      <ScrollView className='scroll-container middle'>
        <View className='cell-wrap'>
          <CellTitle title='今天是2020年10月10日 星期六' color='#1E2531' />
          <van-cell-group title='宝宝日常'>
            <van-field
              label='身高'
              data-name='height'
              value={data.height}
              placeholder='今天长高了没'
              inputAlign='right'
              onChange={onChange}
            />
            <van-field
              label='体重'
              data-name='weight'
              value={data.weight}
              placeholder='要养胖胖的哦'
              inputAlign='right'
              onChange={onChange}
            />
            <van-field
              label='体温'
              data-name='temperature'
              value={data.temperature}
              placeholder='做一个小暖男'
              inputAlign='right'
              onChange={onChange}
            />
          </van-cell-group>

          <van-radio-group data-name='medicine' value={data.medicine} onChange={onChange}>
            <van-cell-group title='今日服用'>
              <van-cell title='AD' clickable data-name='medicine' data-value={1} onClick={onClick}>
                <van-radio slot='right-icon' checkedColor='#756bff' name={1} />
              </van-cell>
              <van-cell title='D3' clickable data-name='medicine' data-value={2} onClick={onClick}>
                <van-radio slot='right-icon' checkedColor='#756bff' name={2} />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </View>
      </ScrollView >
    </View >
    <View className='btn-wrap'>
      <van-button color='#756bff' block openType='getUserInfo' onClick={onConfirm}>保存</van-button>
    </View>
  </View >
}

export default AddDaily;