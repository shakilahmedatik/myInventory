import React from 'react'
import Logo from './Logo'
import MenuDropdown from './MenuDropdown'
import Container from '../Container'

const Navbar = () => {
  return (
    <div className='fixed z-50 w-full bg-white shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            <Logo />

            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
