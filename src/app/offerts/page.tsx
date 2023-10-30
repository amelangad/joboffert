import React from 'react'
import prisma from '../lib/prisma'

export default async function page() {

  const offerts = await prisma.offert.findMany()
  return <div className ="relative top-16 w-full min-h-[100vh] text-md  pt-12 px-10 lg:p-36">
  <div className =" flex flex-col lg:flex-row gap-8 w-full flex-wrap">
    {offerts.map(offert => 
    <div key={offert.id}
    className ="w-full lg:w-1/3 min-h-[350px] text-md rounded-[20px] bg-[#16161680] shadow-xl">
    <h1 className ="text-xl flex justify-center p-5">{offert.title}</h1>
    <hr className ="w-1/3 m-auto py-5"></hr>
    <p className ="flex text-md text-[#8a86869f] px-8 min-h-[50%]">{offert.content}</p>
    <p className ="py-5 flex text-lg text-[#c9c3c39f] px-8">Salary: {offert.salary} $</p>
    </div>)}
    </div>
  </div>
}

