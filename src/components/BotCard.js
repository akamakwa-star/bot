import React from "react";

const BotCard = ({ bot, onClick, onDelete, showDelete }) => {
  const { name, avatar_url, bot_class, health, damage, armor } = bot;

  return (
    <div
      onClick={onClick}
      style={{
        width: 200,
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 5,
        cursor: "pointer",
        position: "relative",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img src={avatar_url} alt={name} width="100%" />
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      <p>❤️ {health} | ⚔️ {damage} |  {armor}</p>
      {showDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: 23,
            height: 24,
            cursor: "pointer",
          }}
        >
          x
        </button>
      )}
    </div>
  );
};

export default BotCard;
