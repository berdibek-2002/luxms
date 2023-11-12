import Link from 'next/link';

export const SignIn = () => {
  return(
    <div className='mt-8 px-8'>
      <div className='mb-2'>
            <label htmlFor="number" className='block text-lg font-medium mb-1'>Phone Number</label>
            <input type="text"  name='number' className='w-full h-10 border rounded-xl pl-5 bg-gray-300' />
      </div>
      <div className='mb-2'>
            <label htmlFor="pasword" className='block text-lg font-medium mb-1'>Password</label>
            <input type="password"  name='pasword' className='w-full h-10 border rounded-xl pl-5 bg-gray-300' />
      </div>
      <div className='mb-2'>
        <input type="checkbox" name='check' className='bg-gray-300' />
        <label htmlFor="check" className='text-sm ml-1 mb-1'>Remember my preference</label>
        <div><Link href={{pathname: '/forgot-password'}} className='text-sm font-medium'>Forgot Password?</Link></div>
      </div>
      <div>
            <button className='w-full bg-blue-950 text-white p-2 rounded-xl'>Sign In</button>
      </div>
    </div>
  )
}