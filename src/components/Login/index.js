import React from 'react';
import { Row } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons"




const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (

    <div>
      <div className="container">
        <div className="body d-md-flex align-items-center justify-content-between">
          <div className="box-1 mt-md-0 mt-5"> <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="" alt="" /> </div>
          <div className=" box-2 d-flex flex-column h-100">
            <div className="mt-5">
            <h3 className="mb-3 h-1" style={{color:'rosybrown'}}>Welcome to D-Chat</h3>
              <p className="mb-1 h-1">Login</p>
              <p className="text-muted mb-2">Share your thouhts with the world form today.</p>
              <div className="d-flex flex-column ">
                <p className="text-muted mb-2">Continue with...</p>
                <Row>
                  <div className="d-flex align-items-center ">
                    <div  className="box me-2 selectio">
                      <FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{ color: 'gray', cursor: 'pointer' }} onClick={() => handleLogin(fbProvider)} />
                      <p className="mb-0">Facebook</p></div>
                      <div  className="box me-2 selectio"> <FontAwesomeIcon icon={faGoogle} size="3x" style={{ color: 'gray', cursor: 'pointer' }} onClick={() => handleLogin(googleProvider)} />
                      <p className="mb-0">Google</p>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
            <div className="mt-auto">
              <p className="footer text-muted mb-0 mt-md-0 mt-4">By register you agree with our <span className="p-color me-1">terms and conditions</span>and <span class="p-color ms-1">privacy policy</span> </p>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}