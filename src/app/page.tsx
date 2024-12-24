import ButtonList from "@/components/ButtonList";
import CoverParticles from "@/components/CoverParticles";
import PlayList from "@/components/PlayList";
import Reproductor from "@/components/Reproductor";

export default function Home() {
  return (
    <main className="bg-gradient-header w-screen h-screen md:h-[100vh] relative">
      <CoverParticles />
      <div className="container mx-auto flex py-8 justify-between h-full">
        <Reproductor />
        {/* PLay list para telefonos */}
        <ButtonList />
        {/* PLay list para pc */}
        <div className="hidden md:flex">
          <PlayList />
        </div>
      </div>
    </main>
  );
}
