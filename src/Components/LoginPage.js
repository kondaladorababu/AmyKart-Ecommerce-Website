import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from "firebase/auth";
import Modal from './Modal';


function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setpassword(event.target.value);
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const login = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(
            auth,
            email,
            password,
        ).then(() => {
            //valid user redirect to home screen
            navigate('/HomePage');
        }).catch(() => {
            openModal();
        });
    }


    return (
        <div className="login_container">
            {isModalOpen && <Modal onClose={closeModal} info={'Please Login With correct Credentials'} />}

            <img
                className="main_logo"
                src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt="Amazon"
            />

            <div className='login_page'>
                <h2>Sign in</h2>

                <form onSubmit={login}>
                    <div className="input_email">
                        <label htmlFor="email">Email or Phone Number</label>
                        <input
                            value={email}
                            onChange={handleEmail}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email or phone number"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <div className="input_email">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="button_content">
                        <button type="submit" className='login_signinButton'>Continue</button>
                        <h6>
                            By continuing, you agree to Amazon's and{" "}
                            <Link to="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">
                                Conditions of Use
                            </Link>{" "}
                            <Link to="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">
                                Privacy Notice
                            </Link>
                        </h6>
                    </div>
                </form>
            </div>

            <Link to='/signup' className="custom-link">
                <div className="create_acc">
                    <button className='login_registerButton' >Create an Amazon Account</button>
                </div>
            </Link>
        </div >
    )
}

export default LoginPage
