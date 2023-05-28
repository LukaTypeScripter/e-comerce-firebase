import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utlis/firbase/firebase";
import { FirebaseError } from "firebase/app";
import FormInput from "../form-input/formInput";
import Button from "../button/Button";
import './signUp.scss'
const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUp() {
  const [formFields, setFormFields] = useState(defaultformFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const result = await createAuthUserWithEmailAndPassword(email, password);
      if (result && result.user) {
        const { user } = result;
        await createUserDocumentFromAuth(user, { displayName });
      }
    } catch (error: unknown) {
      if ((error as FirebaseError).code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log("An error has occurred: " + error);
    }
  };

  return (
    <div className="sign-up-container">
        <h2>dont have account ?</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
        label='Enter Name'
          type="text"
          placeholder="Name"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />
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
        
        <FormInput
        label='confirm Password'
          type="password"
          placeholder="Password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
