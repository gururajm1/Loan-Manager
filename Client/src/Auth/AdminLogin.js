import React, { useState, useRef, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
import pakka from "../assets/pakka.jpg";
import { firebaseAuth } from "../Dependencies/firebaseConfig";
import axios from "axios"; 

function AdminLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loan-admin")) {
      navigate("/admin");
    }
  }, [navigate]);

  const [error, setError] = useState("");
  const [passwordInputRef, setPasswordInputRef] = useState("");
  const emailInputRef = useRef();

  const handlePasswordChange = (e) => {
    setPasswordInputRef(e.target.value);
  };

  const logInForm = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef;
    setError("");
  
    try {
      const response = await fetch(`http://localhost:7001/api/admin-check/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('User data:', data); 
  
      if (data.message === 'User is an admin') {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        localStorage.setItem("loan-admin", "true");
        navigate("/admin");
      } else {
        throw new Error("You are not authorized to access this page.");
      }
    } catch (err) {
      setError(err.message);
      console.error("Login error: ", err);
    }
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser && localStorage.getItem("loan-admin")) {
        navigate("/admin");
      }
    });
    
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative md:h-[550px] hidden md:block">
          <img
            className="object-cover w-full h-full"
            src={pakka}
            alt="Login background"
          />
        </div>
        <div className="p-6 md:p-7 md:pt-5 flex flex-col justify-center">
          <form onSubmit={logInForm}>
            <h2 className="text-3xl font-bold text-center mb-9 text-gray-600">
             Admin Login
            </h2>
            <div className="space-y-4">
              <input
                className="border p-2 w-full text-black"
                type="text"
                placeholder="Your Email Address"
                ref={emailInputRef}
              />
              <input
                className="border p-2 w-full text-black"
                type="password"
                placeholder="Enter Password"
                value={passwordInputRef}
                onChange={handlePasswordChange}
              />
              {passwordInputRef !== "" ? (
                <PasswordChecklist
                  value={passwordInputRef}
                  rules={[
                    "minLength",
                    "lowercase",
                    "specialChar",
                    "number",
                    "capital",
                  ]}
                  className="text-black"
                  minLength={8}
                />
              ) : (
                ""
              )}
            </div>
            <button className="w-full bg-green-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 mt-4 rounded">
              Log In
            </button>
            <h5 className="text-gray-500 ml-12 mt-3">Use Email: "admin123@gmail.com" and Password: "#Wasd123" for Admin Login</h5>
            <h5 className="text-red-600 text-center mt-3">{error}</h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;