import "./login.scss";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { updateUser } = useContext(AuthContext);
  console.log("🚀 ~ Login ~ updateUser:", updateUser);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username, password);
    try {
      const res = await apiRequest.post("auth/login", {
        username,
        password,
      });
      // localStorage.setItem("user", JSON.stringify(res.data));
      updateUser(res.data);
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="username"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span style={{ color: "red" }}>{error}</span>}
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
export default Login;
