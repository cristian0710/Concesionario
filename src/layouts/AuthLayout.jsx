import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-around bg-gray-200 px-4 py-2 h-full'>
        <main className='w-full'>{children}</main>
      </div>
    </div>
  )
}

export default AuthLayout;