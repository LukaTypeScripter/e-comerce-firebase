import {Routes,Route} from 'react-router-dom'
import Categories from './components/categories-cont/Categories';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Autentecition from './routes/sign-in/Autentecition';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='auth' element={<Autentecition/>} />
        </Route>

    </Routes>
  );
}

export default App;
