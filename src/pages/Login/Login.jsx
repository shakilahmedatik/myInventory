import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../context'
import { GiSpinningBlades } from 'react-icons/gi'
import logoImg from '../../assets/images/logo.png'
axios.defaults.withCredentials = true

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context)
  // const { user } = state;

  // router
  const navigate = useNavigate()

  useEffect(() => {
    if (user !== null) navigate('/')
  }, [user])

  const handleSubmit = async e => {
    e.preventDefault()
    console.table({ email, password })
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          email,
          password,
        }
      )
      // redirect
      navigate('/')
      toast.success('Welcome to myInventory!')
      dispatch({
        type: 'LOGIN',
        payload: data,
      })
      // save in local storage
      localStorage.setItem('user', JSON.stringify(data))
    } catch (err) {
      toast.error(err.response.data)
      setLoading(false)
    }
  }
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center py-12 bg-gray-50 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img className='mx-auto h-12 w-auto' src={logoImg} alt='Workflow' />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Username
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name='email'
                    type='email'
                    autoComplete='email'
                    placeholder='Email'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    placeholder='******'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  {loading ? (
                    <GiSpinningBlades
                      size={24}
                      className='animate-spin mx-auto'
                    />
                  ) : (
                    '    Sign In'
                  )}
                </button>
              </div>
            </form>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>
                    Or want to get access?
                  </span>
                </div>
              </div>

              <div className='mt-5'>
                <Link
                  to='/register'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
