import { bindActionCreators } from 'redux';

class Store {
  private _store: any;
  private _actions: any;
  constructor() {
    this._actions = {};
  }

  static instance;

  static getInstance() {
    if (this.instance instanceof this === false) {
      this.instance = new this();
    }
    return this.instance;
  }

  init(store: { dispatch: any; }, actions: any) {
    this._store = store;

    const handles = { ...actions };

    const bind = (action, dispatch) => {
      if (typeof action === 'function') {
        return bindActionCreators(action, dispatch);
      }
      if (typeof action === 'object') {
        return Object.assign({}, ...Object.entries(action).map(([key, value]) => ({ [key]: bind(value, dispatch) })));
      }
    };
    this._actions = bind(handles, store.dispatch);
  }

  get actions() {
    return this._actions;
  }
}

export default Store.getInstance();
