import react, { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from 'next/link'

export default function Login(){
    const [token, setToken] = useState("")
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const router = useRouter()

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            sessionStorage.setItem('Token', response.user.accessToken)
            sessionStorage.setItem('Name', response.user.displayName)
            sessionStorage.setItem('PFP', response.user.photoURL)
            router.reload()
        })
    }

    const signUpWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then((response) => {
            sessionStorage.setItem('Token', response.user.accessToken)
            sessionStorage.setItem('Name', response.user.displayName)
            sessionStorage.setItem('PFP', response.user.photoURL)
            router.reload()
        })
    }

    useEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])

    const manageSignOut = () => {
            sessionStorage.clear()
            router.reload()
    }

    return(
        <div className="bg-[url('../public/background.jpg')] bg-cover h-[100vh] bg-fixed">
            <style jsx>{`
                .login-container {
                    margin-left: 29rem;
                }
            `}</style>
                <Navbar />
                <Link href='/map'>
                    <div className='p-1 m-2 rounded-md bg-gradient-to-r from-violet-900 to-fuchsia-800 fixed cursor-pointer'>
                    <img src='./map-logo.png' className='w-40 rounded-md'/> 
                    </div>
                </Link>
            {token ? (
                <div className="user-container items-center w-6/12 mb-20 mx-auto flex justify-center pt-[16rem] pb-[5.9rem]">
                    <div>
                        <img className="rounded-lg"  src={sessionStorage.getItem("PFP")} style={{width:"200px"}}/>
                    </div>  
                    <div className="px-10 text-gray-200">
                        <p>Hello, {sessionStorage.getItem("Name")}</p>
                        <p className="pt-2 text-gray-200">Welcome to Pokemon, The Delhi Saga.</p>
                        <button className="text-center text-gray-200 bg-black px-10 py-2 rounded-lg my-10 dark:bg-gray-400" onClick={manageSignOut}>Logout</button>
                    </div>
                </div>
            ) : (<div className="text-center justify-evenly w-6/12 mx-auto mb-24 lg:flex pt-[20rem] pb-[10.9rem]">
            <button className="my-5 text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 py-3 px-7 text-3xl font-Finlandica hover:ease-in-out duration-200 cursor-pointer hover:bg-gradient-to-l rounded-md" onClick={signUpWithGoogle}>Sign Up with Google</button>
            <button className="my-5 text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 py-3 px-7 text-3xl font-Finlandica hover:ease-in-out duration-200 cursor-pointer hover:bg-gradient-to-l rounded-md" onClick={signUpWithGithub}>Sign Up with Github</button>
            </div>)}
            <div className="absolute bottom-0 w-full">
            </div>
        </div>
    )
}