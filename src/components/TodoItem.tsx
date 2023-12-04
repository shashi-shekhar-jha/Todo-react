import React, { useState } from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  id: string;
  text: string;
  onRemoveTodo: () => void;
  onSave: (id: string, editedText: string) => void;
}> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);

  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim().length === 0) {
      return;
    }

    props.onSave(props.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className={classes.item}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <li>{props.text}</li>
          <div>
            <button onClick={props.onRemoveTodo}>Delete</button>
            <button onClick={handleEditing}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;