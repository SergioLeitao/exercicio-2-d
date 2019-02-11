import React, {Component} from 'react';
import MessageDialog from './MessageDialog'

class ChatWindow extends Component {

    senderMessage = (message)=>{
        this.props.onAddMessage(
            {
                username: this.props.username, text: message
            }
        )
    }


    render(){

        const {messages,username} = {...this.props}


        return(
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
          <MessageDialog onSenderMessage={this.senderMessage}/>
          </div>
        )
    }

}

export default ChatWindow