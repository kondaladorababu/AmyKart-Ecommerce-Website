import React, { useState } from 'react';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setpassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }


    const register = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            email,
            password,
        ).then((authUser) => {
            //new user create an user
            navigate('/');

            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className='signup_container'>
            <img
                className="main_logo"
                src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt="Amazon"
            />

            <form onSubmit={register} action="">
                <div className='signup_page'>
                    <h2>Create Your Account</h2>

                    <div className="input_email">
                        <label htmlFor="email">Email or Phone Number</label>
                        <input value={email} onChange={handleEmail} type="text" id="email" name="email" placeholder="Enter your email or phone number" required />
                    </div>

                    <div className="input_email">
                        <label id="password">Password</label>
                        <input value={password} onChange={handlePassword} type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>

                    <div className="input_email">
                        <label id="passwordConfirm">Confirm Password</label>
                        <input value={confirmPassword} onChange={handleConfirmPassword} type="password" id="password" name="password" placeholder="Enter password Again" required />
                    </div>


                    <div className="button_content">
                        <button >Create Account</button>
                        <h6>
                            By continuing, you agree to Amazon's and <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">Conditions of Use</a>                     <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">Privacy Notice</a>
                        </h6>
                    </div>
                </div>
            </form>


            <Link to='/login'>
                <div className="signin">
                    <button>Sign In</button>
                </div>
            </Link>
        </div>


    )
}

export default SignUp
