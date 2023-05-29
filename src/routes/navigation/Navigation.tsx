import React, { useContext } from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/007 crown.svg'
import './navigation.scss'
import { UserContext } from '../../contexts/user.contexts'
import { signOutUser } from '../../utlis/firbase/firebase'
import CartIcon from '../../components/cart-icon/CartIcon'
import cartDropdawn from '../../components/cart-dropdown/cartDropdawn'
import CartDropdawn from '../../components/cart-dropdown/cartDropdawn'
import { DropdownContext } from '../../DropDown-context/Dropdown.context'
function Navigation() {
  
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const {isOpen} = useContext(DropdownContext)
  const signOutHandler = async () => {
     await signOutUser();
    setCurrentUser(null)
    
  }
  console.log(currentUser)

  return (
    <>
        <div className='navigation'>
            <Link className='logo-conteiner' to={`/`}>
            <CrownLogo className='logo'/>
            </Link>
        
        <div className="nav-links-container">
        <Link className='nav-link' to="/shop">Shop</Link>
        {currentUser ? (<span className='nav-links' onClick={signOutHandler}>SIGN OUT</span>) : (<Link className='nav-link' to="/auth">Sign in</Link>)}
          <CartIcon/>
        </div>
        </div>
        {isOpen && (
          <CartDropdawn/>
        )}
        
        <Outlet/>
    </>
  )
}

export default Navigation