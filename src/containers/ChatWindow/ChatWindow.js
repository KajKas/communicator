import React from "react"
import _ from 'lodash'
import './ChatWindow.css'
import store from '../../redux/store'
import Header from "../../components/Header/Header";
import Chats from "../../components/Chats/Chats";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMessages = state.messages[activeUserId]

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMessages)} />
    </div>
  )
}

export default ChatWindow
