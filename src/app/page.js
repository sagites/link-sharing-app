'use client';
import ButtonPrimary from "@/components/buttons/buttonPrimary";
import ButtonSecondary from "@/components/buttons/buttonSecondary";
import InputField from "@/components/inputs/textField";
import React from "react";

const Home = () => {
  return (
    <div>
      <ButtonPrimary label="Helllooo" width="auto"/>
      <ButtonSecondary label="Hello again"/>
      <InputField type='email'  placeholder="Enter your email"/>
    </div>
  );
};

export default Home;
