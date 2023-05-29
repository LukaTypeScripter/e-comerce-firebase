import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from './contexts/user.contexts'
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './shop-context/shop.contexts';
import { DropdownProvider } from './DropDown-context/Dropdown.context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <UserProvider>
    <ProductsProvider>
      <DropdownProvider>
    <App />
    </DropdownProvider>
    </ProductsProvider>
    </UserProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
