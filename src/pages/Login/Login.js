import {  useRef, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
function Login () {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:4000/login", {
            password,
            username
          });
        } catch (err) {
                console.log(err.message)
        }
      };
    return (
                <>
                    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
                </>
            )
}

export default Login