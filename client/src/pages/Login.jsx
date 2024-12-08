import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Login = () => {
  //context
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();
    // console.log(data);

    if (res.status === 200) {
      const newUser = {
        username: data.user.username,
        email: data.user.email,
        token: data.token,
      };
      setUser(newUser);
      navigate("/home");
      setUsername("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      if (Array.isArray(data.errors) && data.errors.length > 0) {
        document.querySelector(".Message").textContent = data.errors[0].msg;
      } else {
        document.querySelector(".Message").textContent =
          data.errors?.msg || "An error occurred";
      }
      // console.log(data.errors);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <form className="w-[400px] h-fit bg-[var(--pri)] p-4 flex justify-center items-center flex-col rounded-xl">
          <input
            className="w-full p-2 mb-4 border-2 border-[var(--text)] rounded-lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full p-2 mb-4 border-2 border-[var(--text)] rounded-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="Message text-red-600 font-semibold capitalize p-4"></p>
          <button
            onClick={Login}
            className="w-fit px-6 py-2 mb-4 border-2 border-[var(--text)] rounded-lg"
          >
            login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
