import React, { useState } from "react";

import { signupUser } from "../../action/auth.js";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import Loading from "./Loading";

function SignUpForm({ type }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    var payload = {
      email: event.target[0].value,
      password: event.target[2].value,
      type: type === "customer" ? "customer" : "seller",
      phone: event.target[1].value,
      name: event.target[0].value,
    };
    if (type === "customer") {
      payload = { ...payload, address: event.target.address.value };
    } else {
      payload = { ...payload, name: event.target.business.value };
    }
    await signupUser(payload).then((res) => {
      if (res) {
        //navigate to login page
        navigate("/login");
      }
      setIsLoading(true);
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form className="px-2 pt-4" onSubmit={(event) => handleLogin(event)}>
          <Input
            name={"email"}
            type={"email"}
            id={"email" + type}
            placeholder={"Email@example.come"}
          />
          <Input
            name={"phone"}
            type={"number"}
            id={"phone" + type}
            placeholder={"Phone number"}
          />
          <Input
            name={"password"}
            type={showPassword ? "text" : "password"}
            id={"password" + type}
            placeholder={"Password"}
            setShowPassword={setShowPassword}
          />
          {type === "customer" ? (
            <Input
              name={"address"}
              type={"text"}
              id={"address"}
              placeholder={"Address"}
            />
          ) : (
            <Input
              name={"business"}
              type={"text"}
              id={"business"}
              placeholder={"Business name"}
            />
          )}
          <div className="d-flex justify-content-end pt-3">
            <button type="reset" className="btn btn-light btn-lg">
              Reset
            </button>
            <button type="submit" className="btn btn-warning btn-lg ms-2">
              Sign up
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default SignUpForm;
