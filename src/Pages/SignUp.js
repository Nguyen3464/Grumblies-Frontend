import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormGroup, Label, Input } from 'reactstrap'


const SignUp = ({signup}) => {


    const navigate = useNavigate()

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(formRef.current)

        const data = Object.fromEntries(formData)

        const userInfo = {
            "user": {email: data.email, password: data.password, password_confirmation: data.password_confirmation}
        }
        signup(userInfo)
        navigate("/protectedpage")
        e.target.reset()
      }

    return(
        <>
        <div className='login-siginUp-page'>
            <h1 className='signUp-h1'>Sign Up</h1>
          <form ref={formRef} onSubmit={handleSubmit} className='event-new-edit-login-signUp-form'>
            <FormGroup
            className='event-new-edit-login-signUp-form'
            >
            <Label
                for="email"
                className='event-new-edit-login-signUp-form'>Email
            </Label> 
            <Input
                id="email"
                type="email"         
                name="email" placeholder="email@example.com"
            />
            </FormGroup>

            <FormGroup
            className='event-new-edit-login-signUp-form'>
            <Label 
                className='event-new-edit-login-signUp-form'
                for="password">Password
            </Label> 
            <Input
                id="password"
                type="password" name='password' placeholder="Enter Password" 
            />
            </FormGroup>
            <FormGroup
            className='event-new-edit-login-signUp-form'>
                <Label 
                className='event-new-edit-login-signUp-form'
                for="password_confirmation">Password Confirmation
                </Label> 
            <Input
                id="password_confirmation"
                type="password" name='password_confirmation' placeholder="Confirm Password" 
            />
            </FormGroup>

            <button       
              className="login-signUp-button" type='submit' 
              value="Login">Sign Up
            </button>      
          </form>

          <div 
            className='event-new-edit-login-signUp-form'>
                <span className='event-new-edit-login-signUp-form'>Already registered?</span>
          <a href="/login" className='event-new-edit-login-signUp-form'>Login</a> </div>
        </div>
        </>
    )
}

export default SignUp