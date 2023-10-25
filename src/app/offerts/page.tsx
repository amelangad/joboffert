import React from 'react'
import prisma from '../lib/prisma'

export default async function page() {

  const offerts = await prisma.offert.findMany()

  return <div className ="relative top-0 w-full min-h-[100vh] text-md p-36">
  <div className =" flex justify-start gap-5">
    {offerts.map(offert => 
    <div key={offert.id}
    className ="w-1/4 min-h-[250px] text-md rounded-[20px] bg-[#16161680] shadow-xl">
    <h1 className ="text-xl flex justify-center p-5">{offert.title}</h1>
    <p className ="flex text-md text-[#8a86869f] px-8">{offert.content}</p>
    <p className ="py-5 flex text-lg text-[#c9c3c39f] px-8">Salary: {offert.salary} $</p>
    </div>)}
    </div>
  </div>
}

