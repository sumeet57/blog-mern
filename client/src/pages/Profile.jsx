import React from "react";

const Profile = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-var(--main) rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-var(--text)">Profile</h2>
        <div className="mb-4">
          <label
            className="block text-var(--text) text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-var(--text) leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-var(--text) text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-var(--text) leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-var(--text) text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-var(--text) leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-var(--text) text-sm font-bold mb-2"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-var(--text) leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            placeholder="Tell us about yourself"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-var(--extra) hover:bg-var(--pri) text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
