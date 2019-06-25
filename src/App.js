import React  from 'react'
import './App.css'
import Sidebar from "./Sidebar/Sidebar"
import Main from "./Main/Main"
import store from './redux/store'
import _ from 'lodash'

const App = () => {
  const { contacts } = store.getState()
  return (
    <div className='App'>
      <Sidebar contacts={_.values(contacts)}/>
      <Main/>
    </div>
  )
}

export default App;
