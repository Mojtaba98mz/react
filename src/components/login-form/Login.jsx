import React , {useState} from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate( `/${input}`); 
  };

  const [input, setInput] = useState('');

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="container">
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              value={input}
              onInput={e => setInput(e.target.value)}
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <button type="button" onClick={routeChange}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
