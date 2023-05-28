import React, { useContext } from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/007 crown.svg'
import './navigation.scss'
import { UserContext } from '../../contexts/user.contexts'
import { signOutUser } from '../../utlis/firbase/firebase'
function Navigation() {
  const {currentUser,setCurrentUser} = useContext(UserContext)
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
        <Link className='nav-link' to="/"></Link>
        {currentUser ? (<span className='nav-links' onClick={signOutHandler}>SIGN OUT</span>) : (<Link className='nav-link' to="/auth">Sign in</Link>)}
        
        </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Navigation