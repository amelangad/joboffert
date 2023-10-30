import React from 'react'
import Link from 'next/link'

export default function Thanks() {
  return (
    <>
    <div className ="flex flex-col gap-5 w-full min-h-[100vh] absolute t-16 justify-center items-center">Congratulations! Your offer has been added!
    Check the offerts:
    <Link href="/offerts"
    className ="border-2 border-white bg-slate-200 text-black px-5 py-2 m-2 rounded w-50 hover:bg-whitex">Check the offerts!</Link>
    </div>
    </>
  )
}
