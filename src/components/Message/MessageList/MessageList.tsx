import { useRef, useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/UserContext"
import { Message } from "../../models/Message";

import MessageItem from "../MessageItem/MessageItem";
import NewMessage from "../NewMessage/NewMessage";


const MessageList: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([])
  const userContext = useContext(UserContext);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const scrollToBottom = () => {
    messagesEndRef.current!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleAddMessage = (value: string | File) => {
    if (!value) {
      return;
    }
    const user = userContext?.user;

    const time = `${new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes()
      : '0' + new Date().getMinutes()}`

    if (typeof value === 'string') {
      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          text: value,
          user,
          time,
        }
      ])
    } else {
      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          image: value,
          user,
          time,
        }
      ])
    }
  }

  const handleEditMessage = (value: string | File, id: string) => {
    if (!value) {
      return;
    }

    const updatedMessages = [...messages].map(message => {
      if (message.id === id) {
        if (typeof value === 'string') {
          message.text = value;
        } else {
          message.image = value;
        }

        message.time = `${new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes()
          : '0' + new Date().getMinutes()}`
      }
      return message;
    });
    setMessages(updatedMessages);
  }

  const handleDeleteMessage = (id: string) => {
    setMessages(prev => prev.filter(message => message.id !== id));
  }

  return (
    <div className="chat__messages">
      <div className="messages">
        {
          messages.map(message => (
            <MessageItem
              key={message.id} id={message.id}
              userId={Number(message.user!.id)}
              userName={message.user!.name}
              userMessage={message.text}
              time={message.time}
              image={message.image}
              onEditMessage={handleEditMessage}
              onDeleteMessage={handleDeleteMessage}
            />
          ))
        }
        <div ref={messagesEndRef}></div>
        <NewMessage onAddMessage={handleAddMessage} />
      </div>
    </div >
  )
}

export default MessageList;