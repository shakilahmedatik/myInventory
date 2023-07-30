import { NavLink } from 'react-router-dom'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
const AdminMenu = () => {
  return (
    <>
      <NavLink
        to='manage-orders'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <MdOutlineManageHistory className='w-5 h-5' />

        <span className='mx-4 font-medium'> Manage Orders</span>
      </NavLink>
      <NavLink
        to='manage-users'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <MdOutlineManageHistory className='w-5 h-5' />

        <span className='mx-4 font-medium'> Manage Users</span>
      </NavLink>

      <NavLink
        to='add-product'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BsFillHouseAddFill className='w-5 h-5' />

        <span className='mx-4 font-medium'>Add Product</span>
      </NavLink>
      <NavLink
        to='all-products'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <MdHomeWork className='w-5 h-5' />

        <span className='mx-4 font-medium'>Manage Products</span>
      </NavLink>
    </>
  )
}

export default AdminMenu
