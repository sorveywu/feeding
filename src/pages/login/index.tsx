import React, { FC } from 'react';
import { View } from '@tarojs/components';
import DataControl from '../../utils/DataControl';

const Login: FC = () => {
  const bindGetUserInfo = () => {
    DataControl.actions.login();
  }

  return <View className='container'>
    <van-nav-bar
      title='用户登录'
      customClass='nav-bar'
      titleClass='nav-bar-text'
    />
    <View className='btn-wrap'>
      <van-button color='#756bff' block openType='getUserInfo' bindGetUserInfo={bindGetUserInfo}>点击登录</van-button>
    </View>
  </View>
}

export default Login;