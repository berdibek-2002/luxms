import Image from "next/image";

import NotificationIcon from '@/images/notification.png';
import MessageIcon from '@/images/message.png';
import FileIcon from '@/images/file.png';

export const StudentDashboard = () => {
  return (
    <div className="w-3/4 pl-10 py-5">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

        <div className="flex justify-between items-center w-16">
          <Image className="w-7" src={NotificationIcon} alt="Notification icon" />
          <Image className="w-7" src={MessageIcon} alt="Notification icon" />
        </div>
      </div>

      <p className="text-xl font-medium">Welcome Back, Alex</p>

      <div className="w-full h-56 rounded-2xl bg-white my-4"></div>

      <div className="w-full grid grid-cols-3 gap-x-2">
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

      <div className="w-full grid grid-cols-2 gap-6 mt-4">
        <div className="w-full bg-white rounded-xl h-10 dark:bg-gray-700 text-center">
          English 45%
          {/* <div className="bg-blue-950 h-10 rounded-xl flex justify-center items-center text-white" style={{width: '45%'}} >
          </div> */}
        </div>
        <div className="w-full bg-white rounded-xl h-10 dark:bg-gray-700 text-c">
          <div className="bg-blue-950 h-10 rounded-xl flex justify-center items-center text-white" style={{width: '100%'}}>
            ITS 100%
          </div>
        </div>
        <div className="w-full bg-white rounded-xl h-10 dark:bg-gray-700 text-c">
          <div className="bg-blue-950 h-10 rounded-xl flex justify-center items-center text-white" style={{width: '70%'}}>
            Math 70%
          </div>
        </div>
      </div>
    </div>
  )
}
