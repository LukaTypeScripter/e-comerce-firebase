import React from 'react'
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utlis/firbase/firebase'
import { log } from 'console';
import SignUp from '../../components/sign-up/SignUp';
function SignIn() {
    const logGoogleUser =async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user)
    }
  return (
    <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>
            sign
        </button>
        <SignUp/>
    </div>
  )
}

export default SignIn