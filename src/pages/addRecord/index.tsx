import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import Notify from '../../components/vant/notify/notify';
import DataControl from '../../utils/DataControl';
import CellTitle from '../../components/cellTitle';
import dayjs from 'dayjs'

import './index.scss';

enum MedicineType {
  NONE = 0,
  AD = 1,
  D3 = 2,
}

interface formData {
  type: number,
  recordAt: string,
  height: number;
  weight: number;
  temperature: number;
  medicine: MedicineType;
}

const AddRecord = () => {
  const initialData: formData = {
    recordAt: dayjs().format(),
    type: 10,
    height: 0,
    weight: 0,
    temperature: 0,
    medicine: MedicineType.D3
  }

  const [data, setData] = useState(initialData);

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

  const onConfirm = () => {
    DataControl.actions.addRecord(data);
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
              value=''
              placeholder='今天长高了没'
              onChange={onChange}
            />
            <van-field
              label='体重'
              data-name='weight'
              value=''
              placeholder='要养胖胖的哦'
              onChange={onChange}
            />
            <van-field
              label='体温'
              data-name='temperature'
              value=''
              placeholder='做一个小暖男'
              onChange={onChange}
            />
          </van-cell-group>

          <van-radio-group data-name='medicine' value={data.medicine || '0'} onChange={onChange}>
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

export default AddRecord;