import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';
import { IoAddCircleOutline } from "react-icons/io5";

<<<<<<< HEAD
// Adding color palettes array without disturbing the main code this is the form of the todo list
=======
// Adding color palettes array without disturbing the main code
>>>>>>> a633acb8501dbb315ddb3532d291b14bfb8c35f4
const colorPalettes = [
  { bg: 'bg-purple-500/50', shadow: 'shadow-purple-500/50' },
  { bg: 'bg-pink-500/50', shadow: 'shadow-pink-500/50' },
  { bg: 'bg-black/50', shadow: 'shadow-black/50' },           
 
  
];


function Foreground() {
  const ref = useRef(null);
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  
  const getNextColor = () => {
    const nextIndex = (currentColorIndex + 1) % colorPalettes.length;
    setCurrentColorIndex(nextIndex);
    return colorPalettes[currentColorIndex];
  };

  
  useEffect(() => {
    if (currentColorIndex === 0 && cards.length > 0 && cards.length % colorPalettes.length === 0) {
      // All colors have been used, shuffle the array for next round
      const shuffled = [...colorPalettes].sort(() => 0.5 - Math.random());
      colorPalettes.splice(0, colorPalettes.length, ...shuffled);
    }
  }, [cards, currentColorIndex]);

  const addCard = (e) => {
    e.preventDefault();
    if (newCard.trim() !== '') {
      setCards([...cards, { 
        id: Date.now(), 
        desc: newCard,
        color: getNextColor()  // Get the next color in sequence
      }]);
      setNewCard('');
      setIsModalOpen(false);
    }
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-10 right-10 z-[4] text-blue-500 hover:text-blue-600 focus:outline-none transition-transform transform hover:scale-110 active:scale-95"
      >
        <IoAddCircleOutline size="4rem" className="drop-shadow-lg" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-[5] flex items-center justify-center bg-black bg-opacity-50">
          <div 
            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white border-opacity-30"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Add New card</h2>
            <form onSubmit={addCard} className="flex flex-col">
              <input
                type="text"
                value={newCard}
                onChange={(e) => setNewCard(e.target.value)}
                placeholder="Enter card description..."
                className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded px-4 py-2 mb-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end space-x-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div 
        ref={ref} 
        className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'
      >
        {cards.map((item) => (
          <Card 
            key={item.id} 
            data={item} 
            reference={ref} 
            onDelete={deleteCard}
          />
        ))}
      </div>
    </>
  );
}

<<<<<<< HEAD
export default Foreground;
=======
export default Foreground;
>>>>>>> a633acb8501dbb315ddb3532d291b14bfb8c35f4
