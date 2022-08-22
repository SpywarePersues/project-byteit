import React, { useState as UseState, useEffect as UseEffect } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import PokeOwned from '../components/PokeOwned'

function pokemons() {
    const [token, setToken] = UseState("")

    UseEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])
    return (
        <div className="bg-[url('../public/background.jpg')] bg-cover h-[100vh] bg-fixed">
                <Navbar />
                <Link href='/map'>
                    <div className='p-1 m-2 rounded-md bg-gradient-to-r from-violet-900 to-fuchsia-800 fixed cursor-pointer'>
                    <img src='./map-logo.png' className='w-40 rounded-md'/> 
                    </div>
                </Link>
                {token ? (<div>
                    <div className='pt-[8rem]'>
                    <PokeOwned />
                </div>
                </div>) : (<div className='text-4xl font-Bungee text-gray-100 text-center py-1 pt-[22rem]'>You dont have access to this page.</div>)}
        </div>
    )
}

export default pokemons