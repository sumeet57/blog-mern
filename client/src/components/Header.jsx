import React from "react";
//if not loggged in => /home /register /login /blog
//if logged in => /home /blog /profile /logout
const Header = () => {
  return (
    <>
      <nav className="w-full py-5 text-[var(--text)] bg-[var(--extra)] font-semibold capitalize">
        <div className="w-full flex justify-between items-center p-2">
          <div>
            <p className="text-2xl">Blog website</p>
          </div>
          <div className="flex justify-between items-center gap-5 capitalize pr-2">
            <p>home</p>
            <p>blog</p>
            <p>register</p>
            <p>login</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
