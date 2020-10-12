import baoyuImg from '../assets/images/weather/baoyu.png';
import dayuImg from '../assets/images/weather/dayu.png';
import gaowenImg from '../assets/images/weather/gaowen.png';
import shirunImg from '../assets/images/weather/shirun.png';
import xiaoxueImg from '../assets/images/weather/xiaoxue.png';
import yusanImg from '../assets/images/weather/yusan.png';
import bingbaoImg from '../assets/images/weather/bingbao.png';
import diwenImg from '../assets/images/weather/diwen.png';
import leizhenyuImg from '../assets/images/weather/leizhenyu.png';
import tedabaoxueImg from '../assets/images/weather/tedabaoxue.png';
import xuerenImg from '../assets/images/weather/xueren.png';
import zhenxueImg from '../assets/images/weather/zhenxue.png';
import caihongImg from '../assets/images/weather/caihong.png';
import dongyuImg from '../assets/images/weather/dongyu.png';
import qiangshachenbaoImg from '../assets/images/weather/qiangshachenbao.png';
import tedabaoyuImg from '../assets/images/weather/tedabaoyu.png';
import yangshaImg from '../assets/images/weather/yangsha.png';
import zhenyuImg from '../assets/images/weather/zhenyu.png';
import dabaoyuImg from '../assets/images/weather/dabaoyu.png';
import duoyunImg from '../assets/images/weather/duoyun.png';
import qingtianImg from '../assets/images/weather/qingtian.png';
import tianqiyubaoImg from '../assets/images/weather/tianqiyubao.png';
import yewanImg from '../assets/images/weather/yewan.png';
import zhongxueImg from '../assets/images/weather/zhongxue.png';
import dafengImg from '../assets/images/weather/dafeng.png';
import fuchenImg from '../assets/images/weather/fuchen.png';
import riyueImg from '../assets/images/weather/riyue.png';
import wuImg from '../assets/images/weather/wu.png';
import yintianImg from '../assets/images/weather/yintian.png';
import zhongyuImg from '../assets/images/weather/zhongyu.png';
import daxueImg from '../assets/images/weather/daxue.png';
import ganzaoImg from '../assets/images/weather/ganzao.png';
import shachenbaoImg from '../assets/images/weather/shachenbao.png';
import wumaiImg from '../assets/images/weather/wumai.png';
import yujiaxueImg from '../assets/images/weather/yujiaxue.png';

// TOFIX: 图片素材不全，待完善
const weatherIcon = {
  '晴': qingtianImg,
  '少云': duoyunImg,
  '晴间多云': duoyunImg,
  '多云': duoyunImg,
  '阴': yintianImg,
  '有风': dafengImg,
  '平静': shirunImg,
  '微风': dafengImg,
  '和风': dafengImg,
  '清风': dafengImg,
  '强风/劲风': dafengImg,
  '疾风': dafengImg,
  '大风': dafengImg,
  '烈风': dafengImg,
  '风暴': yangshaImg,
  '狂爆风': shachenbaoImg,
  '飓风': dafengImg,
  '热带风暴': dafengImg,
  '霾': fuchenImg,
  '中度霾': wumaiImg,
  '重度霾': qiangshachenbaoImg,
  '严重霾': qiangshachenbaoImg,
  '阵雨': zhenyuImg,
  '雷阵雨': leizhenyuImg,
  '雷阵雨并伴有冰雹': bingbaoImg,
  '小雨': zhenyuImg,
  '中雨': zhongyuImg,
  '大雨': dayuImg,
  '暴雨': baoyuImg,
  '大暴雨': dabaoyuImg,
  '特大暴雨': tedabaoyuImg,
  '强阵雨': zhenyuImg,
  '强雷阵雨': leizhenyuImg,
  '极端降雨': dayuImg,
  '毛毛雨/细雨': zhenyuImg,
  '雨': zhenyuImg,
  '小雨-中雨': zhongyuImg,
  '中雨-大雨': dayuImg,
  '大雨-暴雨': baoyuImg,
  '暴雨-大暴雨': dayuImg,
  '大暴雨-特大暴雨': tedabaoyuImg,
  '雨雪天气': yujiaxueImg,
  '雨夹雪': yujiaxueImg,
  '阵雨夹雪': yujiaxueImg,
  '冻雨': dongyuImg,
  '雪': xiaoxueImg,
  '阵雪': zhenxueImg,
  '小雪': xiaoxueImg,
  '中雪': zhongxueImg,
  '大雪': daxueImg,
  '暴雪': tedabaoxueImg,
  '小雪-中雪': daxueImg,
  '中雪-大雪': daxueImg,
  '大雪-暴雪': daxueImg,
  '浮尘': fuchenImg,
  '扬沙': yangshaImg,
  '沙尘暴': shachenbaoImg,
  '强沙尘暴': qiangshachenbaoImg,
  '龙卷风': '',
  '浓雾': wuImg,
  '强浓雾': wuImg,
  '轻雾': wuImg,
  '大雾': wuImg,
  '特强浓雾': wuImg,
  '热': gaowenImg,
  '冷': diwenImg,
  '未知': tianqiyubaoImg,
}

export const weatherDataFormat = data => {
  const { weather } = data;
  return {
    ...data,
    wetherImg: weatherIcon[weather]
  };
}