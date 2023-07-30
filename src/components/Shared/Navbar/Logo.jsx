import { Link } from 'react-router-dom'
import logoImg from '../../../assets/images/logo.png'

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logoImg} alt='logo' width='30' height='30' />
    </Link>
  )
}

export default Logo
