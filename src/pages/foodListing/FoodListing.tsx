import FoodTable from '../../components/foodtable/FoodTable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './foodListing.scss';

const FoodListing = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='Delivery-text'>Food Details</div>
        <div className='listContainer'>
          <FoodTable />
        </div>
      </div>
    </div>
  );
};

export default FoodListing;
