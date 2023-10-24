"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function RegisterPage() {
    const router = useRouter();
    const [data, setData] = useState(
        {
            'name': '',
            'email': '',
            'password': '',
        }
    )
        const registerUser = async (e :any) => {
            e.preventDefault();
            const res = await fetch('api/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)})}

    return (
      <>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Register for an account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="margin-auto flex flex-col justify-center gap-5" onSubmit={registerUser}>
            <div>
              <label htmlFor="email" className="block text-lg font-small leading-6 text-white-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value ={data.email}
                  onChange={(e)=>{setData({...data, email: e.target.value})}}
                  className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-lg font-small leading-6 text-white-9000">
              Username
              </label>
              <div className="mt-1">
                <input
                 placeholder="name"
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  value ={data.name}
                  onChange={(e)=>{setData({...data, name: e.target.value})}}
                  className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-lg font-small leading-6 text-white-900">
                  Password
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value ={data.password}
                  onChange={(e)=>{setData({...data, password: e.target.value})}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
              <button
                type="submit"
                className="border-2 border-white px-5 py-2 m-2 rounded w-full mr-5 hover:bg-slate-600"
              >
                Sign Up
              </button>
          </form>
        </div>
      </div>
      </>
    )}