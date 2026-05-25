import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center text-4xl h-full'>


  <div class="text-center px-6 py-24 lg:px-8">
    <p class="text-base font-semibold text-[#a442af]">404</p>
    <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-[#122a52] sm:text-7xl">Page not found</h1>
    <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Link to="/" className="rounded-md bg-[#a442af] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#8a3990] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a442af]">Go back home</Link>
      <Link to="/contact" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
    </div>
  </div>


    </div>
  )
}
