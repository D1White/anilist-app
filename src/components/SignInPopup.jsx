import React from 'react'

import googleLogo from '../assets/img/icons/google logo.svg'
import githubLogo from '../assets/img/icons/github logo.svg'

function SignInPopup({ onClickClosePopup }) {

  return (
    <div className="auth">
        <div className="popup-blackout">
          <div className="auth__popup">
            <span onClick={onClickClosePopup} className="popup__close auth__close">&times;</span>
            <h1>Sign In</h1>
            <hr />
            <div className="auth-ways">
              <div className="auth__buttnon">
                <div className="button-content">
                  <div className="under-logo">
                    <img
                      className="auth__buttnon-logo"
                      src={googleLogo}
                      alt=""
                    />
                  </div>

                  <span className="auth__buttnon-text">Sign in with Google</span>
                </div>
                <div className="auth__button-transition"></div>
              </div>
              <div className="auth__buttnon">
                <div className="button-content">
                  <div className="under-logo">
                    <img
                      className="auth__buttnon-logo"
                      src={githubLogo}
                      alt=""
                    />
                  </div>

                  <span className="auth__buttnon-text">Sign in with GitHub</span>
                </div>
                <div className="auth__button-transition"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignInPopup
