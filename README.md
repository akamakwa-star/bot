# 🤖 Bot Battlr

A simple React-based app for enlisting and managing your personal bot army. Built as part of the Moringa School Phase 2 code challenge.

## 🚀 Live Demo

> _Add your deployed frontend and backend URLs here if available._

- Frontend: [Live Link](https://your-deployment-url.netlify.app)
- Backend (JSON Server): [Live Link](https://your-json-server-url.onrender.com/bots)

## 🛠️ Features Implemented

-  Fetch bot data from a JSON server.
-  Display all bots in a collection using `BotCollection` component.
- Enlist bots to "YourBotArmy" (without duplication).
- Release bots from the army.
-  Discharge bots permanently (delete from backend).
- Modular and clean React component structure.

##  Project Structure

bot-battlr/
│
├── db.json                    
│
├── package.json               
├── README.md                   
├── .gitignore                
│
├── public/                     
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
│
└── src/                        
    │
    ├── index.js                
    ├── App.js                
    ├── App.css                 
    │
    ├── components/             
    │   ├── BotCard.js          
    │   ├── BotCollection.js  
    │   ├── YourBotArmy.js      
    │   ├── BotSpecs.js         
    │   └── SortBar.js         
    │
    ├── services/               
    │   └── botService.js
    │
    └─styles/                 
        ├── BotCard.css
        ├── BotCollection.css
        └─YourBotArmy.css
