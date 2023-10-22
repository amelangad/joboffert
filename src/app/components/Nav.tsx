"use client"
import { useState, useEffect } from 'react';
import Link from "next/link"
import Image from 'next/image';
import logo from '../../../public/assets/logo.png'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


export default function Nav() {
    const { data: session, status } = useSession();
    const [providers, setProviders] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders()
    }, [])

    return (
        <nav className="absolute top-0 h-16 w-full flex justify-between items-center shadow-xl z-50">
           
           <div className ="flex flex-row gap-5"> <Link className="flex gap-3 mx-3" href="/">
                <Image src={logo}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="object-contain" />
                <p className="m-auto text-xl">Jobber</p>
            </Link>
            <Link href ="/UserOffert" className ="border-2 border-white bg-slate-200 text-black px-5 py-2 m-2 rounded w-50 hover:bg-whitex">Job offert</Link>
            </div>
            <div className="sm:flex hidden gap-3">
                {session && session.user?
                    <div className="flex gap-3 md:gap-5 items-center py-4">
                        <p>{session.user.email}</p>
                        <Link href="/new"
                            className="border-2 border-white bg-slate-200 text-black px-5 py-2 m-2 rounded w-50 hover:bg-white">
                            Create offert</Link>
                        <button type="button"
                            onClick={signOut}
                            className="border-2 border-white px-5 py-2 m-2 rounded w-50 mr-5 hover:bg-slate-600"
                        >SignOut</button>
                        <Link href="/profile">
                            <Image src={logo}
                                alt="Profile"
                                width={50}
                                height={50}
                                className="object-contain rounded-full mr-5" />
                        </Link>
                    </div>
                    :
                    <>
                    <button type="button"
                            onClick={signIn}
                            className="border-2 border-white px-5 py-2 m-2 rounded w-50 mr-5 hover:bg-slate-600"
                        >SignIn</button>
                    </>

                }
            </div>

            <div className="sm:hidden flex">
                {session && session.user? (
                    <div className="flex justify-center items-center">
                        <p className ="mr-5">Hi, {session.user.email} </p>
                        <Image src={logo}
                            alt="Profile"
                            width={50}
                            height={50}
                            className="object-contain rounded-full mr-5"
                            onClick={() => { setOpen((prev) => !prev) }}
                        />
                        {open && (
                            <div className="fixed top-16 right-0 flex flex-col justify-start items-center py-10 gap-3 w-full h-auto bg-slate-700 shadow-xl text-white">
                                <Link 
                                href="/profile"
                                className ="w-full flex justify-center text-lg"
                                onClick={() => setOpen(false)}
                                >Profile
                                </Link>
                                <Link 
                                href="/new"
                                className ="w-full flex justify-center text-lg"
                                onClick={() => setOpen(false)}
                                >Add offert
                                </Link>
                               <button
                               type="button"
                               className ="border-2 border-white p-2 m-2 rounded w-auto text-red mt-[5rem] bg-slate-500 hover:bg-slate-600 flex self-end justify-center "
                               onClick={() =>{
                                setOpen(false);
                                signOut();
                               }}
                               >SignOut</button>
                            </div>
                        )}
                    </div>
                )
                    :
                    <>
                    <button type="button"
                    onClick={signIn}
                    className="border-2 border-white px-5 py-2 m-2 rounded w-50 mr-5 hover:bg-slate-600"
                >SignIn</button>
                 
            </>
                }

            </div>

        </nav>
    )
}


