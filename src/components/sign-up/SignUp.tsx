import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utlis/firbase/firebase'
const defaultformFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
function SignUp() {
    const [formFields,setFormFields] = useState(defaultformFields)

    const {displayName,email,password,confirmPassword} = formFields
 
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormFields({
          ...formFields,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }
        try {
          const response = await  createAuthUserWithEmailAndPassword(email,password);
          console.log(response);
        } catch (error) {
            console.log("error has happened" + error)
        }
    }
    
    return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="">Enter Name</label>
            <input type="text" placeholder="Name" name='displayName' required onChange={handleChange} />
            <label htmlFor="">Enter Email</label>
            <input type="email" placeholder="Email" name='email' required onChange={handleChange}/>
            <label htmlFor="">Enter Password</label>
            <input type="password" placeholder="Password" name='password' required onChange={handleChange}/>
            <label htmlFor="">confirm Password</label>
            <input type="password" placeholder="Password" name='confirmPassword' required onChange={handleChange}/>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp