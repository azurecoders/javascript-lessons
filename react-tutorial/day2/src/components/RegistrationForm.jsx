import React, { useState } from "react";
import toast from "react-hot-toast";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";

const RegistrationForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //
  // console.log(name, email, password);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    disabled: true,
  });

  // console.log(formData);

  const handleRegisterButton = () => {
    alert(`Hello ${name}, you are registered with the mail as ${email}`);
  };

  const handleFormSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    try {
      const apiResponse = await axios.post(
        "http://localhost:3000/users",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!apiResponse.ok) {
        toast.error("Something went wrong");
        return;
      }

      toast.success("User has been added to the database");
    } catch (error) {
      toast.error("Something went wrong");
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      disabled: true,
    });
  };

  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="font-semibold text-3xl text-center my-4">
        Registration Form
      </h3>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col gap-2">
          <label>Name:</label>
          <input
            onChange={onChangeHandler}
            className="border px-2 py-1 rounded-md w-[300px]"
            required
            value={formData.name}
            name="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Email:</label>
          <input
            onChange={onChangeHandler}
            className="border px-2 py-1 rounded-md w-[300px]"
            required
            value={formData.email}
            name="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Password:</label>
          <input
            onChange={onChangeHandler}
            className="border px-2 py-1 rounded-md w-[300px]"
            required
            value={formData.password}
            name="password"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Confirm Password:</label>
          <input
            onChange={onChangeHandler}
            className="border px-2 py-1 rounded-md w-[300px]"
            required
            value={formData.confirmPassword}
            name="confirmPassword"
          />
        </div>

        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={8}
          value={formData.password}
          valueAgain={formData.confirmPassword}
          onChange={(isValid) =>
            isValid && setFormData((prev) => ({ ...prev, disabled: false }))
          }
        />

        <button
          disabled={formData.disabled}
          className="bg-blue-500 text-white cursor-pointer hover:bg-blue-400 w-[300px] py-1 rounded-md disabled:opacity-80 disabled:cursor-not-allowed"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
