import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
// import axios from "axios";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import apiRequest from "../../lib/apiRequest";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");

    console.log(username, password, email);
    try {
      const res = await apiRequest.post("auth/register", {
        username,
        password,
        email,
      });
      console.log("🚀 ~ handleSubmit ~ res:", res);
      navigate("/login");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      setError(error.response.data.message);
      console.log(
        "🚀 ~ handleSubmit ~ error.response.data.message:",
        error.response.data.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const tooglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="username" />
          <input name="email" type="email" placeholder="email" />
          <div className="password-container">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
            />
            <span className="eye-icon" onClick={tooglePasswordVisibility}>
              {showPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>

          <button disabled={isLoading}>Register</button>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <Link to="/login" className="link">
            Do you have an account?
          </Link>
        </form>
      </div>
      <div className="imgContainer">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/14/21/53/building-6467081_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Register;
