import { useEffect, useState } from 'react';
import { ApiRequest } from '../../Utils/ApiConfig';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './foodtable.scss';

interface FoodTableData {
  name: string;
  phone: number;
  price: number;
  quantity: number;
  description: string;
  category: string;
  status: string;
  createdAt: number;
  image: {
    fileUrl: string;
  };
}

const FoodTable = () => {
  const [deliveryData, setDeliveryData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const config = {
        url: 'https://product-delivery.herokuapp.com/api/product/list',
        method: 'GET',
      };
      try {
        const res = await ApiRequest(config);
        console.log('res', res.data.data);
        setDeliveryData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Item Image</TableCell>
            <TableCell className='tableCell'>Item Name</TableCell>
            <TableCell className='tableCell'>Category</TableCell>
            <TableCell className='tableCell'>Descriptation</TableCell>
            <TableCell className='tableCell'>Price Rs.</TableCell>
            <TableCell className='tableCell'>Quantity</TableCell>
            <TableCell className='tableCell'>CreatedAt</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveryData?.map((item: FoodTableData, index) => (
            <TableRow key={index}>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={item?.image.fileUrl} alt='' className='image' />
                </div>
              </TableCell>
              <TableCell className='tableCell'>{item.name}</TableCell>
              <TableCell className='tableCell'>{item.category}</TableCell>
              <TableCell className='tableCell'>{item.description}</TableCell>
              <TableCell className='tableCell'>{item.price}</TableCell>
              <TableCell className='tableCell'>{item.quantity}</TableCell>
              <TableCell className='tableCell'>{item.createdAt}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${item.status}`}>{item.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FoodTable;
