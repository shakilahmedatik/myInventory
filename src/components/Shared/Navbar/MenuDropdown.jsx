import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Context } from '../../../context'
import axios from 'axios'

const MenuDropdown = () => {
  const navigate = useNavigate()
  const {
    state: { user },
    dispatch,
  } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)

  const logoutHandler = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`)
    dispatch({ type: 'LOGOUT' })
    localStorage.removeItem('user')
    navigate('/login')
    toast.success(data.message)
  }
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to='/dashboard'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Dashboard
                </Link>

                <div
                  onClick={logoutHandler}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
