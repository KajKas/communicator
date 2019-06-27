import React from "react"
import "./Main.css"
import Empty from '../Empty/Empty'
import ChatWindow from '../ChatWindow/ChatWindow'

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    return (
      activeUserId
        ? <ChatWindow activeUserId={activeUserId} />
        : <Empty user={user} />
    )
  }
  return <main className='Main'>{renderMainContent()}</main>
}

export default Main
