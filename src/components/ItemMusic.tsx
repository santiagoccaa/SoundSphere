"use client";

import useMusic from "@/hooks/useMusic";
import Image from "next/image";

interface Data {
  nombre: string;
  artista: string;
  imagen: string;
  song: string;
  color: string;
}

const ItemMusic = ({ data }: { data: Data }) => {
  const { HandleClickSongSelected, songSelected, handleClickColorSong } = useMusic();
  const { nombre, artista, imagen, color } = data;

  return (
    <div
      typeof="button"
      onClick={() => {
        HandleClickSongSelected(data);
        handleClickColorSong(color)
      }}
      className={` ${songSelected.nombre === nombre
        ? "border-b-2 border-blue scale-105"
        : "border-b-2 border-blue grayscale"
        } bg-transparent w-80 p-2 shadow-sm rounded-xl flex items-center duration-300 justify-between cursor-pointer`}
    >
      <div className="flex gap-2 items-center h-20 bg-cover">
        <Image
          src={imagen}
          width="400"
          height="400"
          alt="muerte"
          className="h-20 w-24 rounded-sm"
        />

        <div className="flex flex-col">
          <h1 className="font-bold text-lg text-white/90">{nombre}</h1>
          <h2 className="font-medium text-sm -mt-1 text-white/80">{artista}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemMusic;
