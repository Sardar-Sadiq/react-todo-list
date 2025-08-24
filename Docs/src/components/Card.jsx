import React from 'react';
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference, onDelete }) {
  // Default color if no color is provided
  const defaultColor = { bg: 'bg-zinc-900/90', shadow: 'shadow-lg' };

  // Use provided color or default
  const { bg, shadow } = data.color || defaultColor;

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.1}}
      dragElastic={.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className={`relative flex-shrink-0 w-80 h-[420px] rounded-[25px] text-white px-8 py-10 overflow-hidden ${bg} ${shadow}`}
    >
      <button 
        onClick={() => onDelete(data.id)}
        className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
      >
        <IoIosClose size="2rem" />
      </button>
      <h3 className='text-xl font-bold mb-6 text-zinc-200'>Note</h3>
      <p className='text-2xl leading-snug font-extralight text-zinc-100'>{data.desc}</p>
    </motion.div>
  );
}

export default Card;