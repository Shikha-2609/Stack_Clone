import React from 'react';
import './ForgotPassword.css'; // Import the CSS file

const ForgotPassword = () => {
  return (
    <section className="forgot-password-section">
      <div className="forgot-password-container">
        <div className="forgot-password-card">
          <div className="forgot-password-content">
            <form>
              <div className="logo-section">
                <i className="fas fa-cubes fa-2x me-3 logo-icon"></i>
                <span className="title">Forget Password?</span>
              </div>

              <h5 className="instruction-text">Type Your Email Here</h5>
                
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="form-control"
                  name="newPassword"
                />
              </div>

              <div className="submit-button">
                <button className="btn btn-dark btn-lg btn-block" type="submit">
                  <div className="send">
                  Send Email
                </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
