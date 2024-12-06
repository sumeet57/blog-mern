import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    const res = await fetch("#", {
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
    console.log(data);
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
          <p className="Message text-red-600 font-semibold capitalize p-4">
            user is already registered
          </p>
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
