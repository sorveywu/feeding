import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image } from '@tarojs/components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

import naipingImg from '../../../assets/images/naiping.png';
import yingerchuangImg from '../../../assets/images/yingerchuang_o.png';
import zhiniaokuImg from '../../../assets/images/zhiniaoku_o.png';
import { RecordType } from '../../../constants/entity.constant';

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const LatestComp = () => {
  const latest = useSelector(({ record }) => record.latest);
  console.log(latest)

  let nurseData: any = null, diaperData = null, sleepData = null;

  latest.forEach(obj => {
    if (obj.type === RecordType.Nurse) {
      nurseData = obj;
    }
    if (obj.type === RecordType.Diaper) {
      diaperData = obj;
    }
    if (obj.type === RecordType.Sleep) {
      sleepData = obj;
    }
  })


  return (<View className='info-wrap'>
    <View className='box purple'>
      <Text>母乳亲喂</Text>
      <Text className='tag'>{nurseData ? `${nurseData.nurse.amount}ml` : '  '}</Text>
      {nurseData && <Text className='time'>{dayjs(nurseData.recordAt).fromNow()}</Text>}
      <Image className='icon' src={naipingImg} />
    </View>
    <View className='box orange'>
      <Text>最近睡觉</Text>
      <Text className='tag'>时长:50min</Text>
      <Text className='time'>15:30</Text>
      <Image className='icon' src={yingerchuangImg} />
    </View>
    <View className='box skyBlue'>
      <Text className='title'>尿布更换</Text>
      <Text className='tag'>大便</Text>
      <Text className='time'>15:30</Text>
      <Image className='icon' src={zhiniaokuImg} />
    </View>
  </View>)
}

export default LatestComp;