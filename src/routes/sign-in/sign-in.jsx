import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { SingupForm } from "../../components/signup/singup-form";
import Button from "../../components/button/button.component";

export default function SignIn() {
  // // THis is to showcase how to use sign in with redirect which deals with the issue that when redirected back from the
  // // gmail page sign in to your website, your whole website looses its state since the components unmount.
  // // In order to have an action happen, after
  // useEffect(() => {
  //   (async () => {
  //     const resp = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(user);
  //     }
  //   })();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <Button buttonType={"google"} onClick={logGoogleUser}>
        Sign in with google pop up
      </Button>
      {/* <Button buttonType={"google"} onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </Button> */}
      <SingupForm />
    </div>
  );
}
