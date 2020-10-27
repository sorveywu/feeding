import React, { useState } from 'react';
import { View, ScrollView, Text } from '@tarojs/components';
import dayjs from 'dayjs';
import DataControl from '../../utils/DataControl';
import CellTitle from '../../components/cellTitle';
import Notify from '../../components/vant/notify/notify';
import './index.scss';
import { SafeAreaHeight } from '../../constants/constant';

enum dataMap {
  nickname = '宝宝昵称',
  birthday = '宝宝生日',
  gender = '宝宝性别',
  bornWeight = '出生时体重',
  bornHeight = '出生时身长'
}
interface formData {
  nickname: string;
  birth: number;
  birthday?: string;
  gender: string;
  bornWeight: number;
  bornHeight: number;
}

const AddBaby = () => {
  const initialData: formData = {
    nickname: '',
    birth: dayjs().valueOf(),
    gender: '',
    bornWeight: 0,
    bornHeight: 0
  }
  const [show, setShow] = useState(false);
  const [data, setData] = useState(initialData);
  const [birth, setBirth] = useState(dayjs().valueOf());

  const onChange = e => {
    const { name } = e.currentTarget.dataset;
    data[name] = e.detail;
    setData({ ...data });
  }

  const onClick = e => {
    const { name, value } = e.currentTarget.dataset;
    data[name] = value;
    setData({ ...data });
  }

  const handleChoseBirthday = e => {
    setData({
      ...data,
      birth
    })
    setBirth(e.detail);
    setShow(false);
  }

  const onConfirm = () => {
    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        Notify({
          type: 'warning',
          safeAreaInsetTop: true,
          message: `${dataMap[key]}不能为空`
        });
        return;
      }
    }

    data.birthday = dayjs(birth).format()

    DataControl.actions.addBaby(data);
  }

  const handleBack = () => {
    Taro.navigateBack();
  }

  return <View className='container'>
    <van-nav-bar
      title='添加宝宝'
      customClass='nav-bar'
      titleClass='nav-bar-text'
    >
      <van-icon name='arrow-left' slot='left' onClick={handleBack} />
    </van-nav-bar>
    <View className='scroll-wrap'>
      <ScrollView className='scroll-container middle'>
        <View className='cell-wrap'>
          <CellTitle title='今天是2020年10月10日 星期六' color='#1E2531' />
          <van-cell-group title='基本信息'>
            <van-field
              label='宝宝昵称'
              data-name='nickname'
              value=''
              onChange={onChange}
              inputAlign='right'
            />
            <van-cell
              title='宝宝生日'
              value={dayjs(birth).format('YYYY-MM-DD')}
              isLink
              onClick={() => setShow(true)}
            />
          </van-cell-group>
          <van-radio-group data-name='medicine' value={data.gender || '0'} onChange={onChange}>
            <van-cell-group title='宝宝性别'>
              <van-cell title='男宝' clickable data-name='gender' data-value={1} onClick={onClick}>
                <van-radio slot='right-icon' checkedColor='#756bff' name={1} />
              </van-cell>
              <van-cell title='女宝' clickable data-name='gender' data-value={2} onClick={onClick}>
                <van-radio slot='right-icon' checkedColor='#756bff' name={2} />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <van-cell-group title='初生信息'>
            <van-field
              label='出生时体重'
              data-name='bornWeight'
              type='digit'
              inputAlign='right'
              value=''
              onChange={onChange}
            />
            <van-field
              label='出生时身长'
              data-name='bornHeight'
              type='digit'
              inputAlign='right'
              value=''
              onChange={onChange}
            />
          </van-cell-group>
        </View>
      </ScrollView >
    </View >
    <View className='bottom-btn-wrap' style={{ paddingBottom: `${SafeAreaHeight / 2}px` }}>
      <van-button color='#756bff' block onClick={onConfirm}>保存</van-button>
    </View>
    <van-popup
      show={show}
      position='bottom'
    >
      <van-datetime-picker
        type='date'
        value={birth}
        onCancel={() => setShow(false)}
        onConfirm={handleChoseBirthday}
      />
    </van-popup>
    <van-notify id='van-notify' />
  </View >
}

export default AddBaby;