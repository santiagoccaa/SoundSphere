"use client";

import { createContext, useState, ReactNode } from "react";

// Interfaz para los parámetros de la canción seleccionada
interface Song {
  nombre: string;
  artista: string;
  imagen: string;
  song: string;
  color:string;
}

// Tipo de datos para las funciones y variables del contexto
type MusicContextType = {
  boton: boolean;
  HandleClickPlay: () => void;
  songSelected: Song;
  HandleClickSongSelected: (song: Song) => void;
  colorSong: string;
  handleClickColorSong: (color: string) => void;
};

// Creación del Context con valores iniciales predeterminados
const MusicContext = createContext<MusicContextType>({
  boton: false,
  HandleClickPlay: () => {},
  songSelected: { nombre: '', artista: '', imagen: '', song: '', color: '' },
  HandleClickSongSelected: () => {},
  colorSong: '',
  handleClickColorSong: () => {}
});

// Tipo para las propiedades del proveedor
type MusicProviderProps = {
  children: ReactNode;
};

const MusicProvider = ({ children }: MusicProviderProps) => {
  // Estado para el botón de Play/Pause
  const [boton, setBoton] = useState(true);
  const HandleClickPlay = () => {
    setBoton(!boton);
  };

  // Estado para la canción seleccionada
  const [songSelected, setSongSelected] = useState<Song>({
    nombre: '',
    artista: '',
    imagen: '',
    song: '',
    color:''
  });
  const HandleClickSongSelected = (song: Song) => {
    setSongSelected(song);
  };

  // Estado para el color de la canción
  const [colorSong, setColorSong] = useState<string>('');
  const handleClickColorSong = (newColor: string) => {
    setColorSong(newColor);
  };

  return (
    <MusicContext.Provider
      value={{
        boton,
        HandleClickPlay,
        songSelected,
        HandleClickSongSelected,
        colorSong,
        handleClickColorSong
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicProvider };
export default MusicContext;
