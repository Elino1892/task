import { useState, useContext } from "react";

import { UserContext } from "../../context/UserContext"

import { MessageItemProps } from "../../models/MessageItemProps";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";

import user1Img from "../../../images/user-1.jpg";
import user2Img from "../../../images/user-2.jpg";


const MessageItem: React.FC<MessageItemProps> = ({ id, userMessage, userName, userId, time, image, onDeleteMessage, onEditMessage }) => {

  const [editMessage, setEditMessage] = useState<string | undefined>(userMessage);
  const [editingMessage, setEditingMessage] = useState<string>('');

  const userContext = useContext(UserContext);

  const handleEdit = () => {
    if (editMessage) {
      onEditMessage(editMessage, id);
      setEditingMessage('');
    }

  }

  return (
    <div className={userId === 1 ? "message" : "message message--right"}>
      <img className="message__user-image" src={userId === 1 ? user1Img : user2Img} alt="user-logo" />
      <div className={userId === 1 ? "message__card" : image ? "message__card message__card-image" : "message__card"}>
        {image ?
          <div className={userId === 1 ? "message__image" : "message__image message__image--right"} >
            <img className="message__image" src={URL.createObjectURL(image)} alt={image.name} ></img>
          </div>
          :

          <Card className={userId === 1 ? '' : "card--right"}>
            <p className="message__name">{userName}</p>
            {id === editingMessage ? (
              <>
                <Input
                  onChange={(e) => setEditMessage(e.target!.value)}
                  className={userId === 1 ? "new-message__input" : "new-message__input new-message__input--right"}
                  input={{
                    type: 'text',
                    placeholder: 'Edit message...'
                  }}
                />
                <div className="new-message__button-container">
                  <Button type="button" onClick={handleEdit} className={userId === 1 ? "new-message__button new-message__button--edit" : "new-message__button new-message__button--edit new-message__button--edit-right"}><FontAwesomeIcon icon={faAngleRight} /></Button>
                </div>
              </>
            ) :
              <p className="message__text">{userMessage}</p>
            }

          </Card>
        }
        <div className="message__actions">
          <span className="message__date">{time}</span>
          {userContext?.user?.name === userName &&
            <>
              <span className="spacer">|</span>
              {image ?
                <label className="message__actions-button">
                  <Input
                    input={{
                      type: 'file'
                    }}
                    onChange={(event) => onEditMessage(event.target.files![0], id)}
                    className="new-message__input invisible"
                  />
                  edit
                </label>
                :
                <Button type="button" onClick={() => setEditingMessage(id)} className="message__actions-button">edit</Button>
              }

              <span className="spacer">|</span>
              <Button type="button" onClick={() => onDeleteMessage(id)}
                className="message__actions-button"
              >delete</Button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default MessageItem;