import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePostRequest from "../../hook/usePostRequest";
import { Title, LineContainer, Line } from "./styles/LoginStyles";
import Input from "./Input";
import LoginButton from "./LoginButton";
import Oauth from "./Oauth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { data, loading, error, postData } = usePostRequest(
    "/api/login/login"
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    await postData({ email, password });
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <>
      <Title id="title">LOGIN</Title>
      <form onSubmit={handleLogin}>
        <div className="login-box">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <LoginButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </LoginButton>
      </form>
      <LineContainer style={{ margin: "1.5rem" }}>
        <Line />
        <div>Register in seconds</div>
        <Line />
      </LineContainer>
      <Oauth />
    </>
  );
}

export default Login;
