import * as globalAction from './global.action';
import * as babyAction from './baby.action';
import * as recordAction from './record.action';

const actions = {
  ...globalAction,
  ...babyAction,
  ...recordAction
}

export default actions;