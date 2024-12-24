"use client";

import { Edu_QLD_Beginner } from "next/font/google";
const fuente = Edu_QLD_Beginner({
  subsets: ["latin"],
  weight: ["400"],
});

import useMusic from "@/hooks/useMusic";
import { motion } from "framer-motion";
import { Audio } from "./Audio";

import Image from "next/image";

const Reproductor = () => {

  const { songSelected } = useMusic();

  return (
    <div className="flex flex-col w-full h-full md:w-4/6">
      <div className="relative h-full md:h-5/6 flex flex-col items-center ">
        {/* Nombre de artista y nombre de la cancion */}
        <div className="md:absolute top-4 left-4 ml-12">
          <h1 className="nameSong text-5xl md:text-7xl font-medium h-auto w-96">
            <b className={`${fuente.className}`}><span>{songSelected.nombre}</span></b>
          </h1>
          <h2 className="font-bold text-lg text-white/80">
            {songSelected.artista}
          </h2>
        </div>
        {/* Circulo del centro que contiene la imagen */}
        <div className="md:absolute md:right-8 md:top-8 border-2 rounded-full border-blue w-72 md:w-96 h-72 md:h-96 outline outline-1 outline-offset-8 outline-blue">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 md:w-96 h-72 md:h-96 flex items-center justify-center rounded-full shadow-2xl bg-gray-300 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <Image src="/jinx.jpg" width="400" height="400" alt="asda" className='w-96 h-96 rounded-full jinx' />
              <div className="glitch__layers w-96 h-96 rounded-full overflow-hidden">
                <div className="glitch__layer"></div>
                <div className="glitch__layer"></div>
                <div className="glitch__layer"></div>
              </div>
            </div>

            <div className="absolute opacity-50 bottom-0 w-96 bg-gradient-to-b to-blue via-blue-hover from-transparent h-28"></div>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-1/6 flex items-center justify-center">
        <Audio />
      </div>
    </div>
  );
};

export default Reproductor;
