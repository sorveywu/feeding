// 每日记录类别
export enum RecordType {
  Unknown = 0,  // 未知
  Height = 1,  // 身材
  Weight = 2, // 体重
  Temperature = 3, // 体温
  Medicine = 4, // 喂药
  Diaper = 5,  // 换尿布
  Nurse = 6,  // 喂奶
  Drink = 7, // 喝水
  Foods = 8,  // 辅食
  Sleep = 9,   // 睡眠
  Daily = 10   // 日常
}
// 换尿布类别
export enum DiaperType {
  Unknown = 0,
  Pee = 1,  // 小便
  Shit = 2, // 大便
  Urine = 3 // 大小便
}
// 大小便量
export enum AmountType {
  Little = 0,
  Normal = 1,
  Heavy = 2
}
// 大便颜色


// 喂奶类型
export enum NurseType {
  Unknown = 0,  // 未知
  Breast = 1, // 母乳亲喂
  BreastBottle = 2, // 母乳瓶喂
  MilkPowder = 3  // 奶粉
}

// 查找时的过滤类型
export enum FilterType {
  Unknown = 0, // 未知，不限制
  Day = 1, // 按天查找
  Zone = 2, // 按区间查找
}