import React from "react";

const Home_Aside = () => {
  return (
    <>
      <aside className="float-left w-[20%] h-screen border-r-2 border-black p-2">
        <div className="profile w-full h-[30%] mb-1 bg-[var(--main)] border-2 border-[var(--text)] p-2 rounded-md">
          <img src="#" alt="" />
          <p>name</p>
        </div>
        <div className="links w-full h-[70%] bg-[var(--main)] border-2 border-[var(--text)] p-2 rounded-md">
          <p>home</p>
          <p>blog</p>
          <p>profile</p>
          <p>logout</p>
        </div>
      </aside>
    </>
  );
};

export default Home_Aside;
