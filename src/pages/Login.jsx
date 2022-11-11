import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../hooks/useUser";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { isLogged, login } = useUser()

  useEffect(() => {
    if(isLogged) setLocation('/')
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        defaultValue={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
