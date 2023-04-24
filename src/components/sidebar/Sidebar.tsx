import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from '@mui/icons-material/Person';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>FOOD APP</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/delivery' style={{ textDecoration: 'none' }}>
            <li>
              <LocalShippingIcon className='icon' />
              <span>Delivery</span>
            </li>
          </Link>
          <Link to='/fooddetail' style={{ textDecoration: 'none' }}>
            <li>
              <RestaurantMenuIcon className='icon' />
              <span>Food Details</span>
            </li>
          </Link>
          <Link to='/deliverPerson' style={{ textDecoration: 'none' }}>
            <li>
              <PersonIcon className='icon' />
              <span>Delivery Person</span>
            </li>
          </Link>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
