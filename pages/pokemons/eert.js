import EertChart from "../../components/Charts/eertChart";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Eert(){
    return(
        <div style={{backgroundImage: "url('https://www.xtrafondos.com/en/descargar.php?id=3063&resolucion=1280x720')"}} className=" text-gray-100 bg-hero-bacground bg-fixed bg-cover h-fit">
            <Navbar />
            <Link href='/map'>
                <div className='p-1 m-2 rounded-md bg-gradient-to-r from-violet-900 to-fuchsia-800 fixed cursor-pointer'>
                    <img src='../map-logo.png' className='w-40 rounded-md'/> 
                </div>
            </Link>
            <div className="pt-40 pb-10">
                <p className="text-7xl font-Bungee text-center mb-5">EERT</p>
                <div className="lg:w-9/12 flex justify-around mx-auto shadow-lg shadow-slate-900 rounded-lg py-5 px-7 font-Finlandica my-3 lg:my-0 cursor-pointer bg-gradient-to-t from-[#141E30] to-[#243B55]">
                    <div className="text-xl">
                        <p>Type: <span className="text-green-500">Grass</span></p>
                        <p className="text-yellow-500 py-5">Found in the forested regions of central delhi, A fun loving pokemon that is easy to catch. Look carefully as they may camouflage between tress.</p>
                        <EertChart />
                    </div>
                    <div>
                        <img src="../poke1.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}