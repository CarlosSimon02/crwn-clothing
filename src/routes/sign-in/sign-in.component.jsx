import { useEffect } from "react";
import {getRedirectResult} from 'firebase/auth'

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signinWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signinWithGoogleRedirect();
    console.log({user});
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}> Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;
