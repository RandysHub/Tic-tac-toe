import { useState } from "react";

export default function Player({ initalName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">Player1</span>;

  if (isEditing)
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

  return (
    <div>
      <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </span>
      </li>
    </div>
  );
}
