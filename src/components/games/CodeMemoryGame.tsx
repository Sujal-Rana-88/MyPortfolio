import React, { useState, useEffect } from 'react';
import { Terminal, RefreshCcw } from 'lucide-react';

type Card = {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const PROGRAMMING_PAIRS = [
  ['for', 'loop'],
  ['binary', 'search'],
  ['quick', 'sort'],
  ['linked', 'list'],
  ['depth', 'first'],
  ['dynamic', 'programming'],
];

export default function CodeMemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  const initializeGame = () => {
    const initialCards = PROGRAMMING_PAIRS.flatMap((pair, index) => 
      pair.map((content) => ({
        id: index * 2 + pair.indexOf(content),
        content,
        isFlipped: false,
        isMatched: false,
      }))
    );
    
    // Shuffle cards
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isMatched || flippedCards.includes(id)) return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(m => m + 1);
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards[firstId];
      const secondCard = cards[secondId];

      if (PROGRAMMING_PAIRS.some(pair => 
        pair.includes(firstCard.content) && pair.includes(secondCard.content)
      )) {
        // Match found
        setCards(cards.map(card => 
          card.id === firstId || card.id === secondId
            ? { ...card, isMatched: true }
            : card
        ));
        setMatches(m => m + 1);
        setFlippedCards([]);
      } else {
        // No match
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center">
          <Terminal className="w-6 h-6 text-green-400 mr-2" />
          Code Memory Game
        </h3>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-300">
            Moves: <span className="text-green-400">{moves}</span>
          </div>
          <div className="text-sm text-gray-300">
            Matches: <span className="text-green-400">{matches}/{PROGRAMMING_PAIRS.length}</span>
          </div>
          <button 
            onClick={initializeGame}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <RefreshCcw className="w-5 h-5 text-green-400" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              h-24 rounded-lg font-mono text-sm transition-all transform
              ${card.isMatched || flippedCards.includes(card.id)
                ? 'bg-gray-700 text-green-400'
                : 'bg-gray-900 text-transparent hover:bg-gray-700'}
              ${card.isMatched ? 'opacity-50' : ''}
            `}
          >
            {(card.isMatched || flippedCards.includes(card.id)) && card.content}
          </button>
        ))}
      </div>
      
      {matches === PROGRAMMING_PAIRS.length && (
        <div className="mt-6 text-center text-green-400 font-bold">
          🎉 Congratulations! You've completed the game in {moves} moves!
        </div>
      )}
    </div>
  );
}