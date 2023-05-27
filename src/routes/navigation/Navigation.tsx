import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/007 crown.svg'
import './navigation.scss'
function Navigation() {
  return (
    <>
        <div className='navigation'>
            <Link className='logo-conteiner' to={`/`}>
            <CrownLogo className='logo'/>
            </Link>
        
        <div className="nav-links-container">
        <Link className='nav-link' to="/"></Link>
        <Link className='nav-link' to="/sign-in">Sign in</Link>
        </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Navigation