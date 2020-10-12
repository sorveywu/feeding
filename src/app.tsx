import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import './app.scss'
import storeController from './utils/storeController';
import DataControl from './utils/DataControl'
import actions from './actions/actions';

const store = configStore()

storeController.init(store, actions);
DataControl.init(store, storeController._actions);

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
