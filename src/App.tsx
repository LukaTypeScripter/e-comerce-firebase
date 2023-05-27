import {Routes,Route} from 'react-router-dom'
import Categories from './components/categories-cont/Categories';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/sign-in/signIn';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='sign-in' element={<SignIn/>} />
        </Route>

    </Routes>
  );
}

export default App;
