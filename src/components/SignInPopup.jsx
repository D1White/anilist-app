import React from 'react';

import googleLogo from '../assets/img/icons/google logo.svg';
import githubLogo from '../assets/img/icons/github logo.svg';

import {auth, googleLogIn, githubLogIn} from '../firebase';
import { getAllUsers, createUser } from '../api/api'

import { Redirect } from "react-router-dom";

function SignInPopup({ onClickClosePopup }) {

  const [authUser, setAuthUser] = React.useState({});
  const [allUser, setAllUser] = React.useState([]);
  const [logged, setLogged] = React.useState(false);

  const googleSignIn = () => {

    googleLogIn().then((result) => {
      setAuthUser(result);
      //console.log("UID - ", result.user.uid, "Name - " ,result.user.displayName, "Email - " ,result.user.email);
      console.log("Google account linked");
    }).catch((err) => {
      console.log(err);
      alert('Login failed. Please try again later.');
    })

  }

  const githubSignIn = () => {
    githubLogIn().then((result) => {
      setAuthUser(result);
     //console.log("UID - ", result.user.uid, "Name - " ,result.user.displayName, "Email - " ,result.user.email);
      console.log("GitHub account linked");
    }).catch((err) => {
      console.log(err);
      alert('Login failed. Please try again later.');
    })
  }

  React.useEffect(() => {
    if (Object.keys(authUser).length !== 0) {

      getAllUsers().then(setAllUser);

    }
    
  }, [authUser])

  React.useEffect(() => {

    if (authUser.user) {


      if (allUser.includes(authUser.user.uid)) {
        console.log("User is");
        setLogged(true);
      }else {
        console.log("User isn't");
        createUser(authUser.user.uid)
        setLogged(true);
      }
      
    }

    
  }, [allUser])

  return (
    <div className="auth">
      {logged && <Redirect to={"/lists"} />}
        <div className="popup-blackout">
          <div className="auth__popup">
            <span onClick={onClickClosePopup} className="popup__close auth__close">&times;</span>
            <h1>Sign In</h1>
            <hr />
            <div className="auth-ways">
              <div className="auth__buttnon" onClick={googleSignIn}>
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
              <div className="auth__buttnon" onClick={githubSignIn}>
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
