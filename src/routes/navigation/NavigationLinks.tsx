import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/007 crown.svg';

import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utlis/firbase/firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdawn from '../../components/cart-dropdown/cartDropdawn';
import { DropdownContext } from '../../DropDown-context/Dropdown.context';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLinksContainer
} from './styles/Styles';

function NavigationLinks() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isOpen } = useContext(DropdownContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={`/`}>
          <CrownLogo className='logo' />
        </LogoContainer>

        <NavLinksContainer>
          <NavLinks to='/shop'>Shop</NavLinks>
          {currentUser ? (
            <NavLinks as='span' className='nav-links' onClick={signOutHandler}>
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to='/auth'>Sign in</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
      </NavigationContainer>
      {isOpen && <CartDropdawn />}

      <Outlet />
    </>
  );
}

export default NavigationLinks;
