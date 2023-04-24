import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Delivery from './pages/delivery/Delivery';
import FoodListing from './pages/foodListing/FoodListing';
import DeliveryPerson from './pages/deliveryPerson/DeliveryPerson';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
          </Route>
          <Route path='delivery'>
            <Route index element={<Delivery />} />
          </Route>
          <Route path='fooddetail'>
            <Route index element={<FoodListing />} />
          </Route>
          <Route path='deliverPerson'>
            <Route index element={<DeliveryPerson />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
