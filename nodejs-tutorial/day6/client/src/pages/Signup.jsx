import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profile: "",
  });

  console.log("Form Data: ", formData);

  const onChangeHandler = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = new FormData();
      updatedFormData.append("name", formData.name);
      updatedFormData.append("email", formData.email);
      updatedFormData.append("password", formData.password);
      updatedFormData.append("profile", formData.profile);

      const apiResponse = await fetch("http://localhost:3001/user/signup", {
        method: "POST",
        body: updatedFormData,
      });

      const data = await apiResponse.json();
      console.log(data);

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      localStorage.setItem("token", data.data);

      navigate("/");
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
        <h2 className="text-center text-3xl font-semibold mb-8">Signup Form</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Profile Picture:</label>
            <input
              type="file"
              className="border rounded-md px-4 py-4 text-lg"
              name="profile"
              required
              onChange={onChangeHandler}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border rounded-md px-4 py-4 text-lg"
              name="name"
              required
              onChange={onChangeHandler}
            />
          </div>

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
          to={"/login"}
          className="mt-3 text-blue-600 font-semibold text-center"
        >
          Already Have An Account?
        </Link>
        <button className="bg-blue-500 text-white w-full py-3 mt-4 rounded-md text-lg font-semibold hover:opacity-80 cursor-pointer transition-all duration-300 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
