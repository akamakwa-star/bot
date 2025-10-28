import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://json-server-vercel-sooty-beta.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`https://json-server-vercel-sooty-beta.vercel.app/bots${bot.id}`, {
      method: "DELETE",                                         
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  }

  return (
    <div className="App">
      <h1>🤖 Bot Battlr 🤖</h1>
      <YourBotArmy
        army={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
