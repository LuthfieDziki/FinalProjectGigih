import { useDispatch } from 'react-redux';
import { logout } from '../../TokenSlice/index';
import Button from '../Button';
import './index.css';

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className='navbar'>
      <div className='navbarLogo'>
        <p>Spotify.</p>
      </div>
      <div className='navbarMenu'>
        <Button className='btn-logout' onClick={() => dispatch(logout())}>Logout</Button>
      </div>
    </nav>
  )
}

export default Navbar;