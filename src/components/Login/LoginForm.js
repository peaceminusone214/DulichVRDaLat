import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./LoginFormStyles.css";

function LoginForm({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const validateForm = () => {
    if (!username || !password || (!isLogin && !email)) {
      setErrorMessage("Please fill out all fields.");
      return false;
    }
    if (!isLogin && password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return false;
    }
    if (!isLogin && !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const endpoint = "http://localhost:5000/register";
    const payload = { username, email, password };

    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let result = await response.json();
      console.log(result);

      alert("Signed up successfully");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      onClose();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "There was an error processing your request. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const endpoint = "http://localhost:5000/login";
    const payload = { username, password };

    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let result = await response.json();
      console.log(result);

      alert("Login successful");
      login(result);  // Update auth context
      setUsername("");
      setPassword("");
      onClose();

      // Redirect based on role
      if (result.role === 1) {
        navigate("/admin");
      } else {
        navigate("/quests");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "There was an error processing your request. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <h2>{isLogin ? "Đăng Nhập" : "Đăng ký tài khoản"}</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Tên tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
              aria-label="Username"
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
                aria-label="Email"
              />
            </div>
          )}
          <div className="form-group">
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              aria-label="Password"
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="form-input"
                aria-label="Confirm Password"
              />
            </div>
          )}
          {isLogin ? (
            <button
              onClick={handleLogin}
              type="submit"
              className="login-submit-button"
              disabled={isLoading}
            >
              Đăng Nhập
            </button>
          ) : (
            <button
              onClick={handleRegister}
              type="submit"
              className="login-submit-button"
              disabled={isLoading}
            >
              Đăng Ký
            </button>
          )}
        </form>
        <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Bạn chưa có tài khoản?" : "Đăng Nhập ngay!"}
        </button>
        <button className="close-button" onClick={onClose}>
          Thoát
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
