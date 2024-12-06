import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home_Aside from "./components/Home_Aside";
import Home_Section from "./components/Home_Section";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const url = useLocation();
  // console.log(url.pathname);
  return (
    <>
      <main className="w-full h-screen text-[var(--text)] bg-[var(--main)]">
        {url.pathname === "/" || url.pathname === "/home" ? (
          <>
            <Home_Aside />
            <Home_Section />
          </>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};

export default App;
