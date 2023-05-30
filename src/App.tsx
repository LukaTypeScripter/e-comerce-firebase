import {Routes,Route} from 'react-router-dom'

import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Autentecition from './routes/sign-in/Autentecition';
import Shop from './routes/shop/Shop';
import CheckOut from './routes/checkout/CheckOut';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='shop/*' element={<Shop/>} />
        <Route path='auth' element={<Autentecition/>} />
        <Route path='checkout' element={<CheckOut/>} />
        </Route>

    </Routes>
  );
}

export default App;
