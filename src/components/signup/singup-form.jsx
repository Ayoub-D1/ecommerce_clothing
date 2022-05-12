import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./signup-form.styles.scss";
import FormInput from "../form-input/form-input";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SingupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (
      !displayName.trim() ||
      !email.trim() ||
      displayName.length < 3 ||
      !password.trim()
    ) {
      console.log("Your data are invalid");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create an auth user
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("User auth :", user);
      // Get user document back
      await createUserDocumentFromAuth({ ...user, displayName });
      setFormFields(defaultFormFields);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user; Email already in use");
      } else {
        console.log("User signup error: " + err);
      }
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} method={"POST"}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          minLength={5}
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button>Sign up</Button>
      </form>
    </div>
  );
};
