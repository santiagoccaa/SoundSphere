"use client"

import { FaX } from "react-icons/fa6"
import PlayList from "./PlayList"
import { useState } from "react"

export default function ButtonList() {

    const [list, setList] = useState(false)
    const handleClickList = () => {
        setList(!list)
    }
    return (
        <div className={`${list ? 'left-0' : '-left-[100%]'} md:hidden flex absolute top-0 left-0 h-screen w-screen `}>

            <div className="container m-4 bg-primary rounded-lg flex flex-col relative">
                <button onClick={() => handleClickList} className="absolute top-2 left-2 text-primary text-2xl bg-blue rounded-full w-12 h-12 flex items-center justify-center"><FaX /></button>
                <div className="mt-20">
                    <PlayList />
                </div>
            </div>
        </div>
    )
}
