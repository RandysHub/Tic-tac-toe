import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">Player1</span>;
  if (isEditing) playerName = <input type="text" required value={name} />;

  return (
    <div>
      <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleClick}>Edit</button>
        </span>
      </li>
    </div>
  );
}
