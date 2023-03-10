import CreateStudent from '@/components/modals/CreateStudent'
import ViewStudent from '@/components/modals/ViewStudent'
import Navbar from '@/components/nav/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const Students = ({ }) => {
    const [showCreateStudent, setShowCreateStudent] = useState(false)
    const [fclass, setFclass] = useState('')
    const [fsession, setFsession] = useState('')
    const [students, setStudents] = useState([])
    const [viewStudent, setViewStudent] = useState({})

    const fetchStudents = async () => {
        const res = await axios.get('/api/student/getall')
        setStudents(res.data)
    }
    useEffect(() => {
        fetchStudents()
    }, [])

    const handleFilter = async () => {
        const res = await axios.get(`/api/student/search?byClass=true&class=${fclass}&session=${fsession}`)
        setStudents(res.data)
    }

    const handleTextSearch = async (e) => {
        const res = await axios.get(`/api/student/search?byText=true&text=${e.target.value}`)
        setStudents(res.data)
    }


    return (
        <>
            <Head>
                <title>Students - GM School And Colleges Of Sciences</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className=''>
                <Navbar />
                <div className="flex">
                    <Sidebar currentPage={'Students'} />
                    <div className="flex-1 p-4 md:p-5 overflow-auto">
                        <div className='flex flex-col md:flex-row justify-between gap-3 mb-4'>
                            <div className="flex gap-3 flex-wrap">

                                <select onChange={(e) => setFclass(e.target.value)} value={fclass} className='base__select'>
                                    <option value="">Select a class...</option>
                                    <option value="Nursery Red">Nursery Red</option>
                                    <option value="Nursery Blue">Nursery Blue</option>
                                    <option value="Prep">Prep</option>
                                    <option value="PG Red">PG Red</option>
                                    <option value="PG Blue">PG Blue</option>
                                    <option value="PG Green">PG Green</option>
                                    <option value="KG1 Red">KG1 Red</option>
                                    <option value="KG1 Blue">KG1 Blue</option>
                                    <option value="KG1 Green">KG1 Green</option>
                                    <option value="KG2 Red">KG2 Red</option>
                                    <option value="KG2 Blue">KG2 Blue</option>
                                    <option value="KG2 Green">KG2 Green</option>
                                    <option value="Class 1 Red">Class 1 Red</option>
                                    <option value="Class 1 Blue">Class 1 Blue</option>
                                    <option value="Class 1 Green">Class 1 Green</option>
                                    <option value="Class 1">Class 1 English</option>
                                    <option value="Class 2">Class 2</option>
                                    <option value="Class 3">Class 3</option>
                                    <option value="Class 4">Class 4</option>
                                    <option value="Class 5">Class 5</option>
                                    <option value="Class 6">Class 6</option>
                                    <option value="Class 7">Class 7</option>
                                    <option value="Class 8">Class 8</option>
                                    <option value="Class Pre-9">Class Pre-9</option>
                                    <option value="Class 9">Class 9</option>
                                    <option value="Class 10">Class 10</option>
                                </select>

                                <select onChange={(e) => setFsession(e.target.value)} value={fsession} className='base__select'>
                                    <option value="">Select Session</option>
                                    <option value="2023-2024">2023-2024</option>
                                    <option value="2024-2025">2024-2025</option>
                                    <option value="2025-2026">2025-2026</option>
                                    <option value="2026-2027">2026-2027</option>
                                    <option value="2027-2028">2027-2028</option>
                                    <option value="2028-2029">2028-2029</option>
                                    <option value="2029-2030">2029-2030</option>
                                    <option value="2030-2031">2030-2031</option>
                                </select>

                                <button onClick={handleFilter} className='base__button'>Apply</button>

                                {fclass && fsession && <button onClick={() => { setFclass(''); setFsession(''); fetchStudents() }} className='base__button'>Clear</button>}

                            </div>
                            <div className="">
                                <button className='base__button' onClick={() => setShowCreateStudent(true)} title='Add Student'>
                                    <div className='mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                        </svg>

                                    </div>
                                    Add Student
                                </button>
                            </div>
                        </div>

                        <div className='flex mb-3'>
                            <input type="search" onChange={handleTextSearch} placeholder='Search...' className='base__search' />
                        </div>

                        <div className='w-full flex justify-center overflow-x-auto h-fit bg-gray-600'>
                            <div className="relative shadow sm:rounded-lg w-full">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 font-roboto">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 font-roboto">
                                                Father Name
                                            </th>
                                            <th className="px-6 py-3 font-roboto">
                                                Class
                                            </th>
                                            <th className="px-6 py-3 font-roboto">
                                                Medium
                                            </th>
                                            <th className="px-6 py-3 font-roboto">
                                                R.No
                                            </th>
                                            <th className="px-1 py-3 font-roboto">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((stu) => (
                                            <StudentRow student={stu} key={stu._id} setViewStudent={setViewStudent} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {showCreateStudent && <CreateStudent setShowCreateStudent={setShowCreateStudent} />}
                {Object.keys(viewStudent).length > 0 && <ViewStudent viewStudent={viewStudent} setViewStudent={setViewStudent} />}
            </main>
        </>
    )
}

export default Students

const StudentRow = ({ student, setViewStudent }) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <tr className="bg-white border-b hover:bg-gray-50" title={student.name}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center">
                    <img className='h-10 w-10 mr-2 rounded object-cover' src={student.picture ? student.picture : '/avatar.png'} alt={student.name} /> {student.name}
                </th>
                <td className="px-6 py-4">
                    {student.fathername}
                </td>
                <td className="px-6 py-4">
                    10
                </td>
                <td className="px-6 py-4">
                    {student.medium}
                </td>
                <td className="px-6 py-4">
                    {student.rn}
                </td>
                <td className="px-1 py-4 relative">
                    <div onClick={() => setShowMenu(prev => !prev)} className='hover:bg-gray-100 w-8 h-8 flex justify-center active:bg-gray-300 hover:shadow items-center text-black rounded-full cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </div>
                    <div className={`absolute w-[110px] py-2 rounded bg-white transition-all duration-300 ease-in-out flex flex-col space-y-1 shadow-md border border-gray-100 ${showMenu ? 'scale-100 top-10 right-[54px]' : 'scale-0 top-5 right-5'}`}>
                        <div onClick={() => setViewStudent(student)} className='flex space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>View</div>
                        </div>
                        <div className='flex space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </div>
                            <div>Add Fee</div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
} 