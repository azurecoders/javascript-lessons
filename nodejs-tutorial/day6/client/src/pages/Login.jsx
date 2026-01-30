import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiResponse = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await apiResponse.json();

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      localStorage.setItem("token", data.data);

      // navigate("/");
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] shadow-xl shadow-black/40 p-4 rounded-xl"
      >
        <h2 className="text-center text-3xl font-semibold mb-8">Login Form</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md px-4 py-4 text-lg"
              name="email"
              required
              onChange={onChangeHandler}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border rounded-md px-4 py-4 text-lg"
              name="password"
              required
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <Link
          to={"/signup"}
          className="mt-3 text-blue-600 font-semibold text-center"
        >
          Don't Have An Account?
        </Link>
        <button className="bg-blue-500 text-white w-full py-3 mt-4 rounded-md text-lg font-semibold hover:opacity-80 cursor-pointer transition-all duration-300 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
