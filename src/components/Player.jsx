export default function Player({ name, symbol }) {
  return (
    <div>
      <li>
        <span className="player">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{symbol}</span>
          <button>Edit</button>
        </span>
      </li>
    </div>
  );
}
