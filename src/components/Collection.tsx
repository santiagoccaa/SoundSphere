import { FaCompactDisc } from "react-icons/fa";

const Collection = () => {
  return (
    <div className="h-auto mt-4 py-2">
      <div className="flex gap-8">
        <div className="h-52 w-40 flex items-center rounded-2xl shadow-xl bg-gradient-to-t to-amber-500 from-blue hover:shadow-blue cursor-pointer duration-300 group">
          <div className="flex flex-col mx-4 text-xl font-bold text-gray-900">
            <h1 className="text-5xl font-extrabold">01</h1>
            <h2 className="mt-4">Hip Hop</h2>
            <h2 className="-mt-1">Music</h2>

            <div className="flex items-center gap-2 mt-4">
              <FaCompactDisc className="group-hover:rotate-90 group-hover:scale-110 duration-300" />
              <p className="text-sm font-light">23 Song</p>
            </div>
          </div>
        </div>

        <div className="h-48 w-40 flex items-center rounded-2xl shadow-xl bg-gradient-to-t  to-green-500 from-blue hover:shadow-blue duration-300 cursor-pointer group">
          <div className="flex flex-col mx-4 text-xl font-bold text-gray-900">
            <h1 className="text-5xl font-extrabold">02</h1>
            <h2 className="mt-4">Classical</h2>
            <h2 className="-mt-1">Music</h2>

            <div className="flex items-center gap-2 mt-4">
              <FaCompactDisc className="group-hover:rotate-90 group-hover:scale-110 duration-300"  />
              <p className="text-sm font-light">43 Song</p>
            </div>
          </div>
        </div>

        <div className="h-44 w-40 rounded-2xl flex items-center shadow-xl bg-gradient-to-t to-[#C71585] from-blue hover:shadow-blue duration-300 cursor-pointer group">
          <div className="flex flex-col mx-4 text-xl font-bold text-gray-900">
            <h1 className="text-5xl font-extrabold">03</h1>
            <h2 className="mt-4">Pop</h2>
            <h2 className="-mt-1">Music</h2>

            <div className="flex items-center gap-2 mt-4">
              <FaCompactDisc className="group-hover:rotate-90 group-hover:scale-110 duration-300"  />
              <p className="text-sm font-light">12 Song</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
