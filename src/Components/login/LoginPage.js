import React, { useState } from 'react';
import '../../styles/LoginPage.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import Modal from '../UI/MOdal';


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

            <div className='login_page'>

                <form onSubmit={login}>
                    <h2>Login in</h2>
                    <div className="input_email">
                        <label htmlFor="email">Email or Phone Number</label>
                        <input
                            value={email}
                            onChange={handleEmail}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Type your email or phone number"
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
                            placeholder="Type your password"
                            required
                        />
                    </div>

                    <div className="button_content">
                        <button type="submit" className='login_signinButton'>Continue</button>
                        <h6>
                            By continuing, you agree to AmyKart's Privacy policies
                        </h6>
                    </div>
                </form>

                <Link to='/signup' className="custom-link">
                    <div className="create_acc">
                        <button className='login_registerButton' >Create Your AmyKart Account</button>
                    </div>
                </Link>
            </div>

        </div >
    )
}

export default LoginPage;
