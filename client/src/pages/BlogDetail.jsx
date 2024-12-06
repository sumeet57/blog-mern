import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const BlogDetail = () => {
  const url = useLocation();
  return (
    <>
      {url.pathname === "/home/blog/1" ? (
        <div>blog detail page</div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default BlogDetail;
