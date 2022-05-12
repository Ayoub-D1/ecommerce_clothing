import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithCredentials,
  getUserDocumentById,
} from "../../utils/firebase/firebase.utils";

import "./signin-form.styles.scss";
import FormInput from "../form-input/form-input";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      console.log("logged in");
    } catch (err) {
      console.log(err);
    }
  };

  const logUserWithEmailAndPassword = async () => {
    try {
      const userAuth = await signInUserWithCredentials(email, password);
      // Reset form fields
      setFormFields(defaultFormFields);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
        case "auth/user-not-found":
          alert("Incorrect credentials. Check your email or password.");
          break;
        default:
          // TODO: Don't leave this alert on.
          alert("Not handled error");
          console.log(err);
      }
    }
    // const userDoc = await getUserDocumentById(userAuth.user.uid);
    // console.log(userDoc.data());
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <FormInput
        label="Email"
        required
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
      />

      <FormInput
        label="Password"
        required
        type="password"
        name="password"
        minLength={5}
        onChange={handleChange}
        value={password}
      />

      <div className="sign-in-buttons-container">
        <Button onClick={logUserWithEmailAndPassword}>Sign in</Button>
        <Button buttonType={"google"} onClick={logGoogleUser} type="button">
          Sign in with google
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
