import { useContext } from 'react'
import { Context } from '../../../context'

const Avatar = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context)
  return (
    <img
      className='rounded-full'
      src={user && user.picture ? user.picture : './avatar.jpg'}
      alt='profile'
      height='30'
      width='30'
    />
  )
}

export default Avatar
