import Image from 'next/image';
import Link from 'next/link';

export const Otp = () => {
  return(
    <div className='mt-10 px-8'>
          <div className='mb-8'>
            <label htmlFor="otp" className='block text-lg text-center font-medium mb-1'>Sent OTP on Your Email</label>
            <input type="text"  name='otp' className='w-full h-10 border rounded-xl bg-gray-300' />
          </div>
          <div className='mb-4'>
            <button className='w-full bg-blue-950 text-white p-2 rounded-xl'>Sign In</button>
          </div>
          <div>
            <span>Already have an account? <Link href={{pathname: '/sign-in'}} className='underline'>Sign In</Link></span>
          </div>
    </div>
  )
}