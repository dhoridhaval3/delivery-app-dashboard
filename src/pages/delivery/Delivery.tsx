import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import './delivery.scss';

const Delivery = () => {
  return (  
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='Delivery-text'>Delivery Info</div>
        <div className='listContainer'>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
