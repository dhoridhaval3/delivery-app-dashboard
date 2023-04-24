import DeliveryPersonTable from '../../components/deliveryPersonTable/DeliveryPersonTable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Delivery = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='Delivery-text'>Delivery Person Information</div>
        <div className='listContainer'>
          <DeliveryPersonTable />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
