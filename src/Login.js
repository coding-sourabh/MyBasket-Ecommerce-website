import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory(); // Allows to programmitically change the url.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); // To prevent default behaviour of the submit button to prevent refreshing.

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully resistered
        console.log(auth);
        if (auth) {
          history.push("/"); // if authentication is success then redirect to the home page.
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://previews.123rf.com/images/freaktor/freaktor2002/freaktor200200085/139383943-vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector.jpg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By Signing in , you agree to amazon's fake clone sign in term and
          conditions and its policy Please see out privacy and cookies notices.
        </p>

        <button onClick={register} className="login__resistration">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
