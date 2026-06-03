import { useState } from "react";
import api from "../services/api";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // REGISTER
    if (!isLogin) {
      if (formdata.password !== formdata.confirm_password) {
        alert("Passwords do not match");
        return;
      }

      try {
        const response = await api.post("/auth/register", {
          username: formdata.username,
          password: formdata.password,
          dob: formdata.date_of_birth,
        });

        alert(response.data.message);

        setFormdata({
          username: "",
          password: "",
          confirm_password: "",
          date_of_birth: "",
        });

        setIsLogin(true);

      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
          "Registration Failed"
        );
      }

    } else {
      // LOGIN

      try {
        const response = await api.post("/auth/login", {
          username: formdata.username,
          password: formdata.password,
        });

        console.log(response.data);

        alert("Login Successful");

      } catch (error) {
        console.error(error);

        alert("Login Failed");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="auth-box">

        <div className="auth-toggle">

          <button
            type="button"
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>

          <button
            type="button"
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formdata.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formdata.password}
            onChange={handleChange}
            required
          />

          {!isLogin && (
            <>
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formdata.confirm_password}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="date_of_birth"
                value={formdata.date_of_birth}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;