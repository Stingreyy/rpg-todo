// Quest.js

import React from 'react';

const Quest = ({ id, name, completed, onComplete, difficulty }) => {
  return (
    <div>
      <span>{name} (Difficulty: {difficulty})</span>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onComplete(id, difficulty)}
      />
      <button onClick={() => onComplete(id, difficulty)}>Complete</button>
    </div>
  );
};

export default Quest;
