import React from 'react'
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utlis/firbase/firebase'
import { log } from 'console';
function SignIn() {
    const logGoogleUser =async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
  return (
    <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>
            sign
        </button>
    </div>
  )
}

export default SignIn