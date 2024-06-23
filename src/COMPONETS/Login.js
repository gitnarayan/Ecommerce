import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [arr, setarr] = useState(() => {
    let getlocaldata = localStorage.getItem("register");
    if (getlocaldata != null) {
      return JSON.parse(getlocaldata);
    } else {
      return [];
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reguser = (event) => {
    event.preventDefault();

    // const dataobj = {
    //   email: email,
    //   password: password,
    // };

    // Check if email already exists in registered users
    const isEmailRegistered = arr.some(
      (user) => user.email === email && user.password === password
    );
    if (isEmailRegistered) {
      alert("login successfully");
      navigate("/Shop");
      return;
    } else {
      alert("login unsuccessfull");
    }
    // setarr([...arr, dataobj]);
    // console.log(dataobj);
  };
  //   useEffect(() => {
  //   localStorage.setItem("register", JSON.stringify(arr));
  // });

  return (
    <div>
      <form
        style={{
          width: "50%",
          marginTop: "40px",
          margin: "auto",
          border: "2px solid",
          padding: "15px 20px",
          marginBottom: "50px",
          boxShadow: "10px 5px 10px grey",
        }}>
        <h4 style={{ textAlign: "center", paddingBottom: "30px" }}>
          Login Here
        </h4>

        <div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(event) => setPassword(event.target.value)}
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="form2Example31"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          {/* Submit button */}
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4"
            onClick={reguser}>
            Sign in
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google" />
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
