import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(){
    const [token, setToken] = useState("")

    useEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])
    return(
        <div className="navbar fixed w-full py-3 flex justify-end bg-black bg-opacity-40 text-gray-50">
            {token ? (<div className="navbar fixed w-full py-3 p-6 flex justify-end bg-black bg-opacity-40 text-gray-50">
                <ul className="lg:flex justify-around w-5/12 font-Finlandica">
                <Link href="/"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">HOME</li></Link>
                <Link href="/map"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">MAP</li></Link>
                <Link href="/new"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">NEW POKEMON</li></Link>
                <Link href="/pokemons"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">MY POKEMONS</li></Link>
                <Link href="/guestbook"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">GUESTBOOK</li></Link>
                <Link href="/login"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">PROFILE</li></Link>
            </ul>
            </div>) : (<div className="navbar fixed w-full py-3 flex justify-end bg-black bg-opacity-40 text-gray-50">
                <ul className="lg:flex justify-around w-4/12 font-Finlandica">
                <Link href="/"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">HOME</li></Link>
                <Link href="/map"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">MAP</li></Link>
                <Link href="/new"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">NEW POKEMON</li></Link>
                <Link href="/guestbook"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">GUESTBOOK</li></Link>
                <Link href="/login"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0 pl-4 pr-4">LOGIN</li></Link>
            </ul>
            </div>)}
        </div>
    )
}