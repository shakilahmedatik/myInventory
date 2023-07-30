import React, { useContext, useState } from 'react'

import CallToAction from '../../components/Home/CallToAction'
import Hero from '../../components/Home/Hero'
import JoinUs from '../../components/Home/JoinUs'
import ShopByCategory from '../../components/Home/ShopByCategory'
import ShopByCollection from '../../components/Home/ShopByCollection'
import { Context } from '../../context'
import toast from 'react-hot-toast'
import axios from 'axios'
axios.defaults.withCredentials = true
const Home = () => {
  const [loading, setLoading] = useState(false)
  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context)
  console.log(user)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update-status`,
        {
          email: 'atik@gmail.com',
          status: 'verified',
        }
      )

      toast.success('Status Updated')
      setLoading(false)
    } catch (err) {
      console.log(err)
      // toast.error(err.response.data)
      setLoading(false)
    }
  }
  return (
    <div className='bg-white'>
      <header>
        {/* Hero section */}
        <Hero />
      </header>
      <main>
        {/* Category section */}
        <ShopByCategory />
        {/* Join Us section */}
        <JoinUs />
        {/* Collection section */}
        <ShopByCollection />

        {/* CTA Section */}
        <CallToAction />
      </main>
    </div>
  )
}

export default Home
