import React from 'react'
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utlis/firbase/firebase'
import { log } from 'console';
import './Auth.scss'
import SignUp from '../../components/sign-up/SignUp';
import SignInForm from '../../components/sign-in-form/SignIn';
function Autentecition() {
   
  return (
    <div className='auth-container'>
        <SignInForm/>
        <SignUp/>
    </div>
  )
}

export default Autentecition