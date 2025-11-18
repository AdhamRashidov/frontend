import { deleteUser, editUser } from "../store/reducer/user-reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Card = ({ userName, id }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(userName);

  const deleteItem = () => {
    dispatch(deleteUser({ id }));
  };

  const editItem = () => {
    if (newName.trim()) {
      dispatch(editUser({ id, userName: newName }));
      setIsEditing(false);
    }

    setIsEditing(!isEditing);
  };

  const cancelEdit = () => {
    setNewName(userName);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <h1>{userName}</h1>
      )}

      <h1>{userName}</h1>
      <div class="btns">
        <button onClick={deleteItem}>delete</button>
        <button onClick={editItem}>{isEditing ? "save" : "edite"}</button>
        {isEditing && <button onClick={cancelEdit}>cancel</button>}
      </div>
    </>
  );
};
