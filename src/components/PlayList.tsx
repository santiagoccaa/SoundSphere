'use client'

import ItemMusic from "./ItemMusic";
import { motion } from 'framer-motion';
import { music } from "@/data/music";

const PlayList = () => {
  return (
    <motion.div
      initial={{ x: '20px',  }}
      animate={{ x: 0,}} 
      transition={{
        type: "spring", 
        stiffness: 50, 
        damping: 10,
      }}
    >
      <div className="flex flex-col items-center h-[80vh] md:h-[90vh] w-full md:w-96 gap-6 overflow-y-scroll scroll ">   
      {
        music.map(m => (
        <ItemMusic key={m.id} data={{nombre: m.nombre, artista: m.artista, imagen: m.imagen, song:m.song, color:m.color}}/>
        ))
      }
      </div>
    </motion.div>
  );
};

export default PlayList;