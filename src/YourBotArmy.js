import React from "react";
import BotCard from "./components/BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDischarge={() => onDischarge(bot)}
            showDischarge
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
