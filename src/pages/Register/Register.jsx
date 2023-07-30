import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../context'
import Container from '../../components/Shared/Container'
import { GiSpinningBlades } from 'react-icons/gi'
axios.defaults.withCredentials = true

const Register = () => {
  const [loading, setLoading] = useState(false)
  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context)

  // router
  const navigate = useNavigate()
  useEffect(() => {
    if (user !== null) navigate('/')
  }, [user])

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const phone = form.phone.value
    const shopName = form.shopName.value
    const website = form.website.value
    const shopEmail = form.shopEmail.value
    const address = form.address.value
    const city = form.city.value
    const district = form.district.value
    const zip = form.zip.value
    const userData = {
      name,
      email,
      password,
      phone,
      shop: { shopName, website, shopEmail, address, city, district, zip },
    }
    console.log(userData)
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,

        userData
      )
      form.reset()
      // redirect
      navigate('/login')
      toast.success('Registration Successful')
      toast.success('Please Wait For Admin Approval')
    } catch (err) {
      console.log(err)
      toast.error(err.response.data)
      setLoading(false)
    }
  }
  return (
    <div className=' bg-gray-100 min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16'>
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className='text-3xl md:text-4xl font-semibold pb-12 text-center md:text-start'>
              Registration Page
            </h1>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Profile Info
                  </h3>
                  <p className='mt-1 text-sm text-gray-600'>
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <div className='shadow sm:rounded-md sm:overflow-hidden'>
                  <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Name
                        </label>
                        <input
                          type='text'
                          name='name'
                          id='name'
                          autoComplete='name'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Email address
                        </label>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          autoComplete='email'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='password'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          name='password'
                          id='password'
                          autoComplete='new-password'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Phone
                        </label>
                        <input
                          type='tel'
                          name='phone'
                          id='phone'
                          autoComplete='tel'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden sm:block' aria-hidden='true'>
            <div className='py-5'>
              <div className='border-t border-gray-200' />
            </div>
          </div>
          <div className='mt-10 sm:mt-0'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Business/Shop Information
                  </h3>
                  <p className='mt-1 text-sm text-gray-600'>
                    Use a permanent address where you can receive parcel.
                  </p>
                </div>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <div className='shadow overflow-hidden sm:rounded-md'>
                  <div className='px-4 py-5 bg-white sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                      <div className='col-span-6'>
                        <label
                          htmlFor='shopName'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Shop Name
                        </label>
                        <input
                          type='text'
                          name='shopName'
                          id='shopName'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='website'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Shop Website
                        </label>
                        <input
                          type='text'
                          name='website'
                          id='website'
                          autoComplete='url'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='shopEmail'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Shop Email
                        </label>
                        <input
                          type='text'
                          name='shopEmail'
                          id='shopEmail'
                          autoComplete='email'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6'>
                        <label
                          htmlFor='address'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Address
                        </label>
                        <input
                          type='text'
                          name='address'
                          id='address'
                          autoComplete='street-address'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                        <label
                          htmlFor='city'
                          className='block text-sm font-medium text-gray-700'
                        >
                          City
                        </label>
                        <input
                          type='text'
                          name='city'
                          id='city'
                          autoComplete='address-level2'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                        <label
                          htmlFor='district'
                          className='block text-sm font-medium text-gray-700'
                        >
                          District
                        </label>
                        <input
                          type='text'
                          name='district'
                          id='district'
                          autoComplete='address-level1'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                        <label
                          htmlFor='zip'
                          className='block text-sm font-medium text-gray-700'
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type='text'
                          name='zip'
                          id='zip'
                          autoComplete='postal-code'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='px-4 w-full py-3 bg-gray-50 text-right sm:px-6'>
                    <button
                      disabled={loading}
                      type='submit'
                      className='inline-flex disabled:cursor-not-allowed w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      {loading ? (
                        <GiSpinningBlades
                          size={24}
                          className='animate-spin mx-auto'
                        />
                      ) : (
                        'Request Access'
                      )}
                    </button>
                  </div>
                  <div>
                    <div className='pb-5 flex justify-center md:justify-end text-sm px-4 sm:px-6'>
                      <span className=' text-gray-500'>
                        Already have an account?{' '}
                        <Link
                          to='/Login'
                          className='font-medium text-indigo-600 hover:text-indigo-700'
                        >
                          Sign In Now
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Register
