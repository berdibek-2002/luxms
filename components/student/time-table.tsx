import React from 'react';
import Image from "next/image";

import NotificationIcon from '@/images/notification.png';
import MessageIcon from '@/images/message.png';
import FileIcon from '@/images/file.png';
import Avatar from '@/images/avatar.png';

export const TimeTable = () => {
  return (
    <div className="w-3/4 pl-10 py-5">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-semibold">Time Table</h2>

        <div className="flex justify-between items-center w-16">
          <Image className="w-7" src={NotificationIcon} alt="Notification icon" />
          <Image className="w-7" src={MessageIcon} alt="Notification icon" />
        </div>
      </div>

      <p className="text-xl font-medium">Welcome Back, Alex</p>

      <div className="w-full grid grid-cols-3 gap-x-2 py-4">
        <article className="flex items-center bg-cyan-900 rounded-xl p-4">
          <Image src={FileIcon} alt="" />
          <div className="ml-4 text-white text-center">
            <h3>Diploma in English</h3>
            <span className="text-xs">OXF/ENG/01</span>
          </div>
        </article>
        <article className="flex items-center bg-cyan-900 rounded-xl p-4">
          <Image src={FileIcon} alt="" />
          <div className="ml-4 text-white text-center">
            <h3>Diploma in ITS</h3>
            <span className="text-xs">OXF/ENG/01</span>
          </div>
        </article>
        <article className="flex items-center bg-cyan-900 rounded-xl p-4">
          <Image src={FileIcon} alt="" />
          <div className="ml-4 text-white text-center">
            <h3>Diploma in Math</h3>
            <span className="text-xs">OXF/ENG/01</span>
          </div>
        </article>
      </div>

      <div className='w-full flex justify-between items-center'>
        <button className='w-1/4 h-16 bg-blue-950 rounded-xl text-white text-lg font-medium'>Lessons</button>
        <button className='w-1/4 h-16 bg-blue-950 rounded-xl text-white text-lg font-medium'>Calendar</button>
      </div>

      <div className="flex flex-col bg-white rounded-xl mt-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Lecture Name</th>
                    <th scope="col" className="px-6 py-4">Start Time</th>
                    <th scope="col" className="px-6 py-4">End Time</th>
                    <th scope="col" className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center">
                      <input type="checkbox" name="module" id="" className="mr-2 h-5"/>
                      01
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Image className="inline w-7 mr-2" src={Avatar} alt='Avatar' />
                      John Deo
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">9.00</td>
                    <td className="whitespace-nowrap px-6 py-4">11.00</td>
                    <td className="whitespace-nowrap px-6 py-4">03/02/2023</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center">
                      <input type="checkbox" name="module" id="" className="mr-2 h-5"/>
                      01
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Image className="inline w-7 mr-2" src={Avatar} alt='Avatar' />
                      Hoa Kim
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">9.00</td>
                    <td className="whitespace-nowrap px-6 py-4">11.00</td>
                    <td className="whitespace-nowrap px-6 py-4">03/02/2023</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center">
                      <input type="checkbox" name="module" id="" className="mr-2 h-5"/>
                      01
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Image className="inline w-7 mr-2" src={Avatar} alt='Avatar' />
                      Edgor Sam
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">9.00</td>
                    <td className="whitespace-nowrap px-6 py-4">11.00</td>
                    <td className="whitespace-nowrap px-6 py-4">03/02/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
