import SkittyChart from "../../components/Charts/skittyChart";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function skitty(){
    return(
        <div className="text-gray-100 bg-[url('../public/background.jpg')] bg-fixed bg-cover h-fit">
            <Navbar />
            <Link href='/map'>
                <div className='p-1 m-2 rounded-md bg-gradient-to-r from-violet-900 to-fuchsia-800 fixed cursor-pointer'>
                    <img src='../map-logo.png' className='w-40 rounded-md'/> 
                </div>
            </Link>
            <div className="pt-40 pb-10">
                <p className="text-7xl font-Bungee text-center mb-5">Skitty</p>
                <div className="lg:w-9/12 flex justify-around mx-auto shadow-lg shadow-slate-900 rounded-lg py-5 px-7 font-Finlandica my-3 lg:my-0 cursor-pointer bg-gradient-to-t from-[#141E30] to-[#243B55]">
                    <div className="text-xl">
                        <p>Type: <span className="text-green-500">Fairy</span></p>
                        <p className="text-yellow-500 py-5">A shy pokemon who loves to travel in Delhi metro, She usually does not interact with people but she could be one of the best companion.</p>
                        <SkittyChart />
                    </div>
                    <div>
                        <img src="../poke5.png" className="pt-[10rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}