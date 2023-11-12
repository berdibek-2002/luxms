import React from 'react';
import Image from 'next/image';

import Logo from '@/images/logo.png';
import Avatar from '@/images/avatar.png';
import HomeImage from '@/images/home.png';
import MyCoursesImage from '@/images/courses.png';
import AssignmentImage from '@/images/assignments.png';
import Calendar from '@/images/calendar.png';
import ForumImage from '@/images/forum.png';
import SettingsImage from '@/images/setting.png'
import Link from 'next/link';

export const SideBar = () => {
  return (
    <div className='w-1/4 bg-blue-950 rounded-3xl p-5 mb-4'>
      <div className='flex justify-between items-center'>
        <Image className='w-12' src={Logo} alt='PDP Logo' />

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 49 29" fill="none">
          <line y1="1.5" x2="49" y2="1.5" stroke="white" stroke-width="3"/>
          <line y1="13.5" x2="49" y2="13.5" stroke="white" stroke-width="3"/>
          <line y1="27.5" x2="38" y2="27.5" stroke="white" stroke-width="3"/>
        </svg>
      </div>

      <div className='flex items-center border rounded-lg px-4 py-2 my-4'>
        <div>
          <Image className='w-10 mr-4' src={Avatar} alt='PDP Logo' />
        </div>
        <div>
          <h3 className='text-base text-white'>Hi, Alex</h3>
          <span className='text-xs text-white'>E173037</span>
        </div>
      </div>

      <div>
        <Link href="/student-dashboard" className='w-full bg-teal-200 flex items-center rounded-lg px-4 py-2 mb-2'>
          <Image className="mr-4" src={HomeImage} alt="image"/>Home
        </Link>
        <Link href="/my-courses" className='w-full bg-teal-200 flex items-center rounded-lg px-4 py-2 mb-2'>
          <Image className="mr-4" src={MyCoursesImage} alt="image"/>My Courses
        </Link>
        <Link href="/assignment" className='w-full bg-teal-200 flex items-center rounded-lg px-4 py-2 mb-2'>
          <Image className="mr-4" src={AssignmentImage} alt="image"/>Assignments
        </Link>
        <Link href="/time-table" className='w-full bg-teal-200 flex items-center rounded-lg px-4 py-2 mb-2'>
          <Image className="mr-4" src={Calendar} alt="image"/>Time Table
        </Link>
        <button className='w-full bg-teal-200 flex items-center rounded-lg px-4 py-2 mb-2'>
          <Image className="mr-4" src={ForumImage} alt="image"/>Forum
        </button>
        <button className='w-full bg-teal-200 flex items-center rounded-lg px-4 py-2 mb-2'>
          <Image className="mr-4" src={SettingsImage} alt="image"/>Settings
        </button>
      </div>
    </div>
  )
}
