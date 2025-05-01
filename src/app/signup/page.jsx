"use client";
import ButtonPrimary from "@/components/buttons/buttonPrimary";
import InputField from "@/components/inputs/textField";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
      <div className="bg-white md:p-5 rounded-lg md:w-[400px]">
        <div className="pt-2 pb-6 md:pb-4">
          <p className="text-2xl pb-3 md:text-Heading-M text-dark">
            Create account
          </p>
          <p className="text-Body-M text-grey">
            Let's get you started sharing your links!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="At least 8 characters"
              value={user.password}
              onChange={handleChange}
              errorMessage={error}
            />
          </div>
          <div>
            <label className="text-Body-S text-dark">Confirm Password</label>
            <InputField
              type="password"
              id="password"
              name="confirmPassword"
              icon={
                <img
                  src="/Assets/ph_envelope-simple-fill.svg"
                  alt="Lock icon"
                  className="w-5 h-5"
                />
              }
              placeholder="At least 8 characters"
              value={user.confirmPassword}
              onChange={handleChange}
              errorMessage={error}
            />
          </div>

          <div>
            <p className="text-Body-S text-grey">Password must contain at least 8 characters</p>
          </div>

          <ButtonPrimary
            label="Create new Account"
            onClick={handleSubmit}
            type="submit"
            className="mb-6 w-full"
          />
        </form>
        <div className="text-center md:justify-center md:flex">
          <p className="text-Body-M text-grey">Already have an account?</p>
          <Link className="text-purple" href="./login">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
