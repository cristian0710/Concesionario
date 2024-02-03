import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 px-4 py-2'>
      AuthLayout
      <main className='w-full'>{children}</main>
    </div>
  )
}

export default AuthLayout;