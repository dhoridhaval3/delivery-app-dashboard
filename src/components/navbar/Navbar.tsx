import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Button } from '@mui/material';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <Button className='logout-btn'>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
