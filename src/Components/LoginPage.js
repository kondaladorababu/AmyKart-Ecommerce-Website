import React from 'react';
import '../styles/LoginPage.css';

function LoginPage() {
    return (
        <div className="login_container">
            <div className='login_page'>
                <h2>Sign in</h2>

                <div className="input_email">
                    <label for="email">Email or Phone Number</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email or phone number" required />
                </div>

                <div className="input_email">
                    <label for="password">Password</label>
                    <input type="text" id="password" name="password" placeholder="Enter your password" required />
                </div>


                <div className="button_content">
                    <button>Continue</button>
                    <h6>
                        By continuing, you agree to Amazon's and <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">Conditions of Use</a>                     <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">Privacy Notice</a>
                    </h6>

                </div>
            </div>

            <div className='create_acc'>
                <button>Create an Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage
