import './App.css';
import { useEffect, useState } from 'react';
import Board from "./components/Board/Board"
const emojiList = [...'💣🧤🎩🌮🎱🌶🍕🦖'];

const App = () => {
  const [shuffleMemoBlocks, setShuffledMemoBlocks] = useState([]);

  useEffect(() => {
    const setShuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(setShuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false })));
  }, []);

  // para mezclar las imagenes, es un array que se recibe asi mismo y se devuelve pero con posiciones aleatorios
  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  return (
    <Board memoBlocks={shuffleMemoBlocks} />
  );
}

export default App;
