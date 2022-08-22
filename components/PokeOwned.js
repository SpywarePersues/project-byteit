import data from "../src/ownedPokemonData"
import Link from "next/link"

export default function PokeOwned(){
    console.log(data)
    return(
        <div className="text-gray-100 bg-[url('../public/background.jpg')] bg-fixed bg-cover h-fit">
        <h1 className="text-4xl font-Bungee text-gray-100 text-center py-1 pb-[3.5rem]">Your Pokemons</h1>
        <div className="w-7/12 lg:grid grid-cols-3 gap-10 mx-auto pb-10">
        {data.map((poke) => {
                    return (
                        <div key={poke.key} className="shadow-lg shadow-slate-900 rounded-lg py-5 px-7 font-Finlandica my-3 lg:my-0 cursor-pointer bg-gradient-to-t from-[#141E30] to-[#243B55]">
                            <Link key={poke.key} href={poke.slug}>
                                <div className="">
                                    <img src={poke.url} className="lg:w-48 lg:h-48 my-10"/>
                                    <p className="text-l font-semibold">Name: {poke.name}</p>
                                    <p className="text-l font-bold">Type: {poke.type}</p>
                                    <p className="text-l font-bold">Got for: {poke.gotFor}</p>
                                    <p className="pt-7">{poke.description}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
        </div>
        </div>
    )
}