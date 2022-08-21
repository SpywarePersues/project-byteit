import PokeCards from "../components/PokeCards";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function New(){
    return(
        <div className="bg-[url('../public/background.jpg')] bg-fixed bg-cover h-fit">
            <Navbar />
                <Link href='/map'>
                    <div className='p-1 m-2 rounded-md bg-gradient-to-r from-violet-900 to-fuchsia-800 fixed cursor-pointer'>
                    <img src='./map-logo.png' className='w-40 rounded-md'/> 
                    </div>
                </Link>
                <div className="py-32">
                <p className="text-4xl font-Bungee text-gray-100 text-center py-10">New Pokemons Found in Delhi</p>
                <PokeCards />
            </div>
        </div>
    )
}