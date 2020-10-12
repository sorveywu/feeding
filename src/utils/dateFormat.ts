import dayjs from 'dayjs';

// 获取出生天数
export const getAge = (birthday: string) => {
  return dayjs().diff(birthday, 'day') + 1;
}

// 获取当前日期
export const getDate = () => {
  return {
    year: dayjs().year,
    month: ('00' + (dayjs().month() + 1)).slice(-2),
    date: ('00' + dayjs().date()).slice(-2)
  }
}