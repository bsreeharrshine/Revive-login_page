import React from 'react';
import './style.css'; // Assuming you'll keep the CSS in a separate file

const LoginPage = () => {
  return (
    <div className="container">
      <div className="left-panel"></div>
      <div className="right-panel">
        <div className="login-info">
          <div className="tab-menu">
            <ul>
              <li><a href="#" className="tab">Log in</a></li>
              <li><a href="#" className="tab active">Sign up</a></li>
            </ul>
          </div>
          <form className="login-form">
            <p>Join our sustainable marketplace as a buyer or seller</p>
            <input type="text" className="form" placeholder="Full Name" />
            <input type="email" className="form" placeholder="E-mail" />
            <input type="tel" className="form" placeholder="Phone" />
            <input type="password" className="form" placeholder="Password" />
            <input type="password" className="form" placeholder="Confirm Phone" />
            <input type="text" className="form" placeholder="Join As: Customer,Raddi wala,Company" />
          </form>
        </div>
        <div className="login-buttons">
          <button className="reg">Register</button>
          <button className="sign">Have account? Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
