"use client"

import React, {useState} from 'react'
import {useRouter} from 'next/navigation';


const page = () => {
  const router = useRouter();
    const [data, setData] = useState(
        {
            'title': '',
            'content': '',
            'salary': '',
        })

  const addOffert  = async  (e :any) => {
    e.preventDefault();
    const res = await fetch('/api/add',{
        method:  'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    router.push('/addOffert')
   }
  

  return (
    <div className ="w-full min-h-[100vh] absolute mt-16 flex justify-center items-start p-20">
    <form onSubmit ={addOffert}
    className ="rounded-[7px] shadow-xl p-[5%] bg-[#0e0e0e60] flex flex-col">
    <h1 className ="mb-5 flex justify-center text-xl ">Create a new Offert</h1>
    <label htmlFor ="offertName">Offert name</label>
    <input
    required
    value={data.title}
    onChange={(e)=>{setData({...data, title: e.target.value})}}
    id="offertName"
    placeholder ="Type the name of proffesion"
    className ="py-2 pl-2 flex min-h-[35px] w-[550px] bg-[#0a0a0a8a]"></input>
    <textarea
    required
    id="offertContent"
    value ={data.content}
    onChange={(e)=>{setData({...data, content: e.target.value})}}
    placeholder ="Type the content of your job offerts"
    className ="py-2 pl-2 my-5 min-h-[350px] w-[550px] bg-[#0a0a0a8a]"></textarea>
     <input
    required
    type="number"
    value={data.salary}
    onChange={(e)=>{setData({...data, salary: e.target.value})}}
    id="offertName"
    placeholder ="Salary"
    className ="py-2 pl-2 mb-5 flex min-h-[35px] w-[550px] bg-[#0a0a0a8a]"></input>
    <button type="submit"
    onClick ={addOffert}
    className ="border-2 border-white bg-slate-200 text-black px-5 py-2 m-2 rounded w-50 hover:bg-whitex">Add offert</button>
    </form>
    </div>
  )
}

export default page