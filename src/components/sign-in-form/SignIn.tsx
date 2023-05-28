import React from "react";
import { useState,useContext } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utlis/firbase/firebase";
import { FirebaseError } from "firebase/app";
import FormInput from "../form-input/formInput";
import Button from "../button/Button";
import './SignIn.scss'
import { UserContext } from "../../contexts/user.contexts";
const defaultformFields = {
  email: "",
  password: "",
};
function SignInForm() {
  const [formFields, setFormFields] = useState(defaultformFields);

  const {  email, password,  } = formFields;

  const {setCurrentUser} = useContext(UserContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const resetFormFields =() => {
    setFormFields(defaultformFields);
  }
  const signInWithGoogle =async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user,{})
}
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    try {
      const response = await signInAuthUserWithEmailAndPassword(email,password)
     const user = response?.user
     if (user) {
      // Handle the logic for non-null user (User object)
      setCurrentUser(user);
    } 
      resetFormFields()
    } catch (error: unknown) {
      if ((error as FirebaseError).code === "auth/wrong-password") {
        alert("wrong password!!");
      }
      if ((error as FirebaseError).code === "auth/user-not-found") {
        alert("user not found 404!!");
      }
      console.log("An error has occurred: " + error);
    }
  };

  return (
    <div className="sign-up-container">
        <h2>already have account ?</h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <FormInput
        label='Enter Email'
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        
        <FormInput
        label='Enter Password'
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
        <Button type="submit">Sign in</Button>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>google sign in</Button>
        </div>
        
      </form>
    </div>
  );
}

export default SignInForm;
