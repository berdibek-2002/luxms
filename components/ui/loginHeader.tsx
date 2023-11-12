import Image from 'next/image'
import React from 'react'

import Logo from '@/images/logo.png';

export const LoginHeader = () => {
  return (
       <div className='flex flex-col items-center'>
          <Image
            src={Logo}
            width={180}
            height={120}
            alt="PDP University's logo"
          />
          <h3 className='text-base'>Sign in Your Account</h3>
        </div>
  )
}
