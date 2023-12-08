// Questlist.js
import React, { useState } from 'react';
import Quest from './Quest';

const QuestList = () => {
  const [quests, setQuests] = useState([]);
  const [newQuestName, setNewQuestName] = useState('');

  const completeQuest = (id, difficulty) => {
    // Implementera hur du vill hantera avklarade uppdrag här
    console.log(`Completed quest ${id} with difficulty ${difficulty}`);
  };

  const addQuest = (name, difficulty) => {
    const newQuest = {
      id: quests.length + 1,
      name,
      completed: false,
      difficulty,
    };
    setQuests([...quests, newQuest]);
    setNewQuestName('');
  };

  return (
    <div>
      <h2>Quest List</h2>
      {quests.map((quest) => (
        <Quest
          key={quest.id}
          id={quest.id}
          name={quest.name}
          completed={quest.completed}
          onComplete={completeQuest}
          difficulty={quest.difficulty}
        />
      ))}
      <input
        type="text"
        value={newQuestName}
        onChange={(e) => setNewQuestName(e.target.value)}
      />
      <button onClick={() => addQuest(newQuestName, 1)}>Add Quest</button>
      <button onClick={() => addQuest('Boss', 5)}>Add Boss Quest</button>
    </div>
  );
};

export default QuestList;
