"use client";
import ButtonPrimary from "@/components/buttons/buttonPrimary";
import InputField from "@/components/inputs/textField";
import Link from "next/link";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!user.email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
      console.log("Submitted email:", user.email);
      // Do your submission logic here (API call etc.)
    }
  };

  return (
    <div className="justify-center bg-white p-8 md:bg-lightGrey md:place-items-center min-h-screen">
      <div className="pb-9 p-0 m-0 border-0">
        <img
          src="/Assets/images/logo-devlinks-large.svg"
          alt="Logo"
          className="p-0 m-0 border-0"
        />
      </div>
      <div className="bg-white md:p-8 rounded-lg md:w-[400px]">
        <div className="pt-2 pb-6 md:pb-4">
          <p className="text-2xl pb-3 md:text-Heading-M text-dark">Login</p>
          <p className="text-Body-M text-grey">
            Add your details to get back into the app
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-Body-S text-dark" htmlFor="email">
              Email address
            </label>
            <InputField
              type="email"
              id="email"
              name="email"
              icon={
                <img
                  src="/Assets/ph_lock-key-fill.png"
                  alt="Lock icon"
                  className="w-5 h-5"
                />
              }
              placeholder="e.g. alex@email.com"
              value={user.email}
              onChange={handleChange}
              errorMessage={error}
              className=""
            />
          </div>
          <div>
            <label className="text-Body-S text-dark">Password</label>
            <InputField
              type="password"
              id="password"
              name="password"
              icon={
                <img
                  src="/Assets/ph_envelope-simple-fill.svg"
                  alt="Lock icon"
                  className="w-5 h-5"
                />
              }
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              errorMessage={error}
            />
          </div>

          <ButtonPrimary
            label="Login"
            onClick={handleSubmit}
            type="submit"
            className="w-auto mt-3 mb-6"
          />
        </form>
        <div className="text-center md:flex">
          <p className="text-Body-M text-grey">Don't have an account?</p>
          <Link className="text-purple" href="./signup">
            {" "}
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
