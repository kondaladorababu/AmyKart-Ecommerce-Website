import React, { useState } from 'react';
import '../login/Signup.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Modal from '../UI/MOdal';

function SignUp() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const register = (event) => {
        event.preventDefault();

        if (!email.includes('@')) {
            setModalMessage(`Please Enter a Valid Email Address`);
            openModal();
            return;
        }

        if (password.length < 6) {
            setModalMessage(`Password must contain atleast 6 characters `);
            openModal();
            return;
        }

        if (password !== confirmPassword) {
            setModalMessage(`Password's do not match`);
            openModal();
            return;
        }

        createUserWithEmailAndPassword(
            auth,
            email,
            password,
        ).then(() => {
            //new user create an user
            navigate('/HomePage');
        }).catch(() => {
            setModalMessage('Please Enter Valid Credentials');
            openModal();
        });
    }

    return (
        <div className='signup_container'>
            {isModalOpen && <Modal onClose={closeModal} info={modalMessage} />}

            <form onSubmit={register}>
                <div className='signup_page'>
                    <h2>Create Your Account</h2>

                    <div className="input_new_email">
                        <label htmlFor="email">Email or Phone Number</label>
                        <input value={email} onChange={handleEmail} type="text" id="email" name="email" placeholder="Enter your email or phone number" required />
                    </div>

                    <div className="input_new_password">
                        <label id="password">Password</label>
                        <input value={password} onChange={handlePassword} type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>

                    <div className="input_new_password_again">
                        <label id="passwordConfirm">Confirm Password</label>
                        <input value={confirmPassword} onChange={handleConfirmPassword} type="password" id="passwordConfirm" name="password" placeholder="confirm Password" required />
                    </div>


                    <div className="button_content">
                        <button className='create-your-account'>Create Account</button>
                        <h6>
                            By continuing, you agree to AmyKart's and Privacy & Policie's
                        </h6>
                    </div>

                    <Link to='/login' className="custom-link">
                        <div className="signin">
                            <button className='sign-in-button'>Sign In</button>
                        </div>
                    </Link>
                </div>
            </form>

        </div>


    )
}

export default SignUp
