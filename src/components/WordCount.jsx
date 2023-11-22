import React, { useState } from 'react';

const WordCount = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    const words = newText.trim().split(/\s+/).filter(word => word !== '');
    setWordCount(words.length);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default WordCount;
