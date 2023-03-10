import { AuthContext } from '@/context/authcontext/AuthContext'
import { redirectEmployee } from '@/utils/redirectEmployee'
import Cookies from 'js-cookie'
import React, { useContext, useState } from 'react'

const Navbar = ({ }) => {
  const { employee, setTogglesidebarondesktop, setEmployee } = useContext(AuthContext)
  const [showemployeemenu, setShowemployeemenu] = useState(false)

  const handleLogout = ()=>{
    Cookies.remove('token')
    redirectEmployee('/login')
    localStorage.removeItem('campus')
    setEmployee({})
  }

  return (
    <nav className='bg-blue-600 h-[60px] z-50 shadow-md px-4 py-1 flex justify-between items-center sticky top-0'>
      <div className="flex items-center space-x-1">
        <div onClick={() => setTogglesidebarondesktop(prev => !prev)} className="flex text-white bg-black bg-opacity-30 p-1 rounded-lg shadow cursor-pointer hover:bg-opacity-60 active:bg-opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
        <img className='h-14' src="/favicon.png" alt="GM School" />
      </div>
      <div className="flex relative">
        <div onClick={()=> setShowemployeemenu(prev=> !prev)} className="flex  items-center space-x-3 cursor-pointer hover:bg-gray-900 hover:bg-opacity-25 active:bg-opacity-10 hover:shadow p-1 pr-2 rounded-3xl">
          <img className='h-9 w-9 rounded-full bg-white object-cover shadow' src={employee.picture?employee.picture:'/avatar.png'} alt="" />
          <span className='text-white font-roboto'>{employee.name}</span>
          <div className='text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
       {showemployeemenu&&<div className="absolute top-11 right-0 bg-white shadow-md rounded py-2 scale-up">
          <div className="flex px-4 py-1 cursor-pointer hover:bg-slate-100">{localStorage.getItem('campus')}</div>
          <div onClick={handleLogout} className="flex px-4 py-1 cursor-pointer hover:bg-slate-100">Log out</div>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar