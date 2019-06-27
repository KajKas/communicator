import React from "react"
import store from '../../redux/store'
import Header from "../Header/Header";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState()
  const activeUser = state.contacts[activeUserId]

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
    </div>
  )
}

export default ChatWindow
