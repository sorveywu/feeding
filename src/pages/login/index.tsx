import React, { FC } from 'react';
import { View } from '@tarojs/components';
import DataControl from '../../utils/DataControl';

const Login: FC = () => {
  const bindGetUserInfo = async () => {
    const { success } = await DataControl.actions.login();
    if (success) {
      DataControl.goHomePage();
    }
  }

  return <View className='container'>
    <van-nav-bar
      title='用户登录'
      customClass='nav-bar'
      titleClass='nav-bar-text'
    />
    <View className='btn-wrap' style=' box-sizing: border-box; position: absolute; width: 100%; bottom: 0;'>
      <van-button color='#756bff' block openType='getUserInfo' onGetUserInfo={bindGetUserInfo}>点击登录</van-button>
    </View>
  </View>
}

export default Login;