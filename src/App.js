import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { Login } from "./components/login-form/Login";
import SignUp from "./components/signup/SignUp";
import { Users } from "./components/users/Users";
import { Routes,Route } from "react-router-dom";
import { Home } from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/:username" element={<Home />} />
      <Route path="/details/:id" component={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
