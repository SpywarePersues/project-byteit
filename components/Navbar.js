import Link from "next/link";

export default function Navbar(){
    return(
        <div className="navbar fixed w-full py-3 flex justify-end bg-black bg-opacity-40 text-gray-50">
            <ul className="lg:flex justify-around w-4/12 font-Finlandica">
                <Link href="/"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0">HOME</li></Link>
                <Link href="/map"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0">MAP</li></Link>
                <Link href="/new"><li className="cursor-pointer hover:text-gray-400 my-3 lg:my-0">NEW POKEMON</li></Link>
            </ul>
        </div>
    )
}