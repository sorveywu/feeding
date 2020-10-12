import * as globalAction from './global.action';
import * as babyAction from './baby.action';

const actions = {
  ...globalAction,
  ...babyAction
}

export default actions;