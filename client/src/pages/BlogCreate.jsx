import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";

const BlogCreate = () => {
  const urlparam = useLocation();
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const blogData = { title, context, content };
    try {
      const response = await fetch("#", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (response.ok) {
        document.querySelector(".message").textContent = response.message;
      } else {
        document.querySelector(".message").textContent = response.message;
      }
    } catch (error) {
      document.querySelector(".message").textContent = error.message;
    }
  };

  return (
    <>
      {urlparam.pathname === "/home/blog" ||
      urlparam.pathname === "/home/blog/" ? (
        <div className="w-full h-screen flex justify-center items-center">
          <form className="w-[400px] h-fit bg-[var(--pri)] p-4 flex justify-center items-center flex-col rounded-xl">
            <input
              className="w-full p-2 mb-4 border-2 border-[var(--text)] rounded-lg"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="w-full p-2 mb-4 border-2 border-[var(--text)] rounded-lg"
              type="text"
              placeholder="Context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
            <textarea
              className="w-full p-2 mb-4 border-2 border-[var(--text)] rounded-lg"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <p className="message text-red-500 font-semibold capitalize"></p>
            <button
              onClick={handleSubmit}
              className="w-fit px-6 py-2 mb-4 border-2 border-[var(--text)] rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default BlogCreate;
