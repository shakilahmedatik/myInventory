import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFingerprint } from 'react-icons/bs'
import { useContext } from 'react'

import { toast } from 'react-hot-toast'
import { Context } from '../../context'
const UserMenu = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context)

  return (
    <>
      <NavLink
        to='my-orders'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BsFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Orders</span>
      </NavLink>
    </>
  )
}

export default UserMenu
