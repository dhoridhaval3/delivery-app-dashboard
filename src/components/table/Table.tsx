import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ApiRequest } from '../../Utils/ApiConfig';
import './table.scss';

const List = () => {
  const [deliveryData, setDeliveryData] = useState([]);
  console.log('deliveryData', deliveryData);
  useEffect(() => {
    const getData = async () => {
      const config = {
        url: '/',
        method: 'GET',
      };
      try {
        const res = await ApiRequest(config);
        // console.log('res', res.data.results);
        setDeliveryData(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const rows = [
    {
      id: 1143155,
      product: 'Acer Nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: `319 West Lakewood Road Helotes`,
      amount: 9099482081,
      method: 'Lorem Ipsum is simply dummy text of',
      status: 'Approved',
    },
    {
      id: 2235235,
      product: 'Playstation 5',
      img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Michael Doe',
      date: '1 NE Carson Rd New Britain',
      amount: 9099482082,
      method: 'Lorem Ipsum is simply dummy text of',
      status: 'Pending',
    },
    {
      id: 2342353,
      product: 'Redragon S101',
      img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: '8097 San Pablo Ave Newport News',
      amount: 9099482085,
      method: 'Lorem Ipsum is simply dummy text of',
      status: 'Pending',
    },
    {
      id: 2357741,
      product: 'Razer Blade 15',
      img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Jane Smith',
      date: '7 Brandywine St Grosse Pointe',
      amount: 9099482089,
      method: 'Lorem Ipsum is simply dummy text of',
      status: 'Approved',
    },
    {
      id: 2342355,
      product: 'ASUS ROG Strix',
      img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Harold Carol',
      date: '7443 Harvey Ave Onalaska',
      amount: 9099482084,
      method: 'Lorem Ipsum is simply dummy text of',
      status: 'Pending',
    },
  ];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Profile</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Address</TableCell>
            <TableCell className='tableCell'>Contact</TableCell>
            <TableCell className='tableCell'>Description</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt='' className='image' />
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
          {/* {deliveryData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={item.picture.large} alt='' className='image' />
                </div>
              </TableCell>
              <TableCell className='tableCell'>{item.name.first}</TableCell>
              <TableCell className='tableCell'>{item.location.city}</TableCell>
              <TableCell className='tableCell'>{item.phone}</TableCell>
              <TableCell className='tableCell'>{item.name.last}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${item.status}`}>{item.status}</span>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
