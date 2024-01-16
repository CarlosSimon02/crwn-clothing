import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(email,password);
      console.log(response);
    } catch(error) {
      console.error(`user created encountered an error: ${error}`);
    }
  }

  const handleChange = (event) => {
    const {name,value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
