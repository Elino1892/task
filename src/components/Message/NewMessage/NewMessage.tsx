import { useState } from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { NewMessageProps } from "../../models/NewMessageProps";

const NewMessage: React.FC<NewMessageProps> = ({ onAddMessage }) => {

  const [message, setMessage] = useState<string>('');

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAddMessage(event.target.files![0]);
  }

  const handleAddMessage = (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('')
    onAddMessage(message);
  }

  return (
    <div className="new-message">
      <form className="new-message__actions" onSubmit={handleAddMessage}>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target!.value)}
          className="new-message__input"
          input={{
            type: 'text',
            placeholder: 'message...'
          }}
        />
        <label className="new-message__button">
          <Input
            input={{
              type: 'file'
            }}
            onChange={handleAddImage}
            className="new-message__input invisible"
          />
          <FontAwesomeIcon icon={faPlus} />
        </label>

        <Button type="submit" className="new-message__button"><FontAwesomeIcon icon={faAngleRight} /></Button>
      </form>
    </div>
  )
}

export default NewMessage;