'use client'

import Link from 'next/link'
import {useState, useEffect} from 'react'
import axios from 'axios';

export const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('https://64f82e4b824680fd217f39b9.mockapi.io/teachers')
      .then(({ data }) => {
        setTeachers(data);
      });
  }, [])

  useEffect(() => {
    axios
      .get('https://64f82e4b824680fd217f39b9.mockapi.io/students')
      .then(({ data }) => {
        setStudents(data);
      });
  }, [])
  
  return (
    <div className='flex bg-white w-full h-full rounded-2xl'>
      <div className='w-1/3 p-5'>
        <div className='flex w-full'>
          <button className='flex items-center justify-center w-full bg-blue-950 mr-5 py-4 text-white rounded-xl'>
            <Link href="/add-teacher">Add Teacher</Link>
          </button>
          <button className='flex items-center justify-center w-full bg-blue-950 py-4 text-white rounded-xl'>
            <Link href="/add-student">Add Student</Link>
          </button>
        </div>
      </div>
      <div className='w-2/3 m-5'>
        <div className="flex flex-col bg-gray-200 rounded-xl">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">id</th>
                      <th scope="col" className="px-6 py-4">Name</th>
                      <th scope="col" className="px-6 py-4">Email</th>
                      <th scope="col" className="px-6 py-4">Science</th>
                      <th scope="col" className="px-6 py-4">Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map(({id, name, email, science, group}) => (
                    <tr key={id} className="border-b dark:border-white">
                      <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center">
                        {id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{email}</td>
                      <td className="whitespace-nowrap px-6 py-4">{science}</td>
                      <td className="whitespace-nowrap px-6 py-4">{group}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200 rounded-xl mt-5">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">id</th>
                      <th scope="col" className="px-6 py-4">Name</th>
                      <th scope="col" className="px-6 py-4">Email</th>
                      <th scope="col" className="px-6 py-4">Science</th>
                      <th scope="col" className="px-6 py-4">Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(({id, name, email, science, group}) => (
                    <tr className="border-b dark:border-white">
                      <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center">
                        {id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{email}</td>
                      <td className="whitespace-nowrap px-6 py-4">{science}</td>
                      <td className="whitespace-nowrap px-6 py-4">{group}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
