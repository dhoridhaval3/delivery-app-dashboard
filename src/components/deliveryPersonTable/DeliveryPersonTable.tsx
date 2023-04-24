import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ApiRequest } from '../../Utils/ApiConfig';

const DeliveryPersonTable = () => {
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
      pname: 'keyur',
      product: 'Acer Nitro 5',
      img: 'https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png',
      email: 'keyur31@gmail.com',
      phonenumber: `0114644445`,
      rating: '5*****',
      worktiming: '9.0 to 12.0',
      status: 'Completed',
    },
    {
      pname: 'mayur',
      product: 'Playstation 5',
      img: 'https://i.pinimg.com/originals/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg',
      email: 'mayur43@gmail.com',
      phonenumber: '4452011496',
      rating: '3***',
      worktiming: '10.0 to 24.0',
      status: 'Pending',
    },
    {
      pname: 'dhaval',
      product: 'Redragon S101',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbg8xLTrSvLyNcdOIvTv99VEHSHE26VaK5Q&usqp=CAU',
      email: 'dhaval31@gmail.com',
      phonenumber: '01168979874',
      rating: '4****',
      worktiming: '16.0 to 23.0',
      status: 'Pending',
    },
    {
      pname: 'Ashok',
      product: 'Razer Blade 15',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&usqp=CAU',
      email: 'ashok788@gmail.com',
      phonenumber: '7789479879',
      rating: '1*',
      worktiming: '9.0 to 17.0',
      status: 'Approved',
    },
    {
      pname: 'Rohit',
      product: 'ASUS ROG Strix',
      img: 'https://cdn-icons-png.flaticon.com/512/146/146031.png',
      email: 'rohit97707@gmail.com',
      phonenumber: '7443987467',
      rating: '5*****',
      worktiming: '12.0 to 15.0',
      status: 'Pending',
    },
  ];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Boy Name</TableCell>
            <TableCell className='tableCell'>Email-ID</TableCell>
            <TableCell className='tableCell'>Phone Number</TableCell>
            <TableCell className='tableCell'>Rating</TableCell>
            <TableCell className='tableCell'>Work Timing</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt='' className='image' />
                  <div>{row.pname}</div>
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.email}</TableCell>
              <TableCell className='tableCell'>{row.phonenumber}</TableCell>
              <TableCell className='tableCell'>{row.rating}</TableCell>
              <TableCell className='tableCell'>{row.worktiming}</TableCell>
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

export default DeliveryPersonTable;
