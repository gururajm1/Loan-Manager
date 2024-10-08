import React, { useState, useRef, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
import pakka from "../assets/pakka.jpg";
import { firebaseAuth } from "../Dependencies/firebaseConfig";

function Signup() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser && localStorage.getItem("loan-auth")){
        const id = localStorage.getItem("loan-auth");
        navigate(`/user${id}`);
      } 
    });
  
    return () => unsubscribe(); 
  }, [navigate]);
  
  useEffect(() => {
      if(localStorage.getItem("loan-auth")){
        const id = localStorage.getItem("loan-auth")
      navigate(`/user/${id}`);
    }
  }, [navigate]);

  const [error, setError] = useState("");
  const [passwordInputRef, setPasswordInputRef] = useState("");
  const emailInputRef = useRef(null);
  const userName = useRef(null);
  const userAge = useRef(null);

  const handlePasswordChange = (e) => {
    setPasswordInputRef(e.target.value);
  };

  const signUpForm = async (e) => {
    e.preventDefault();
    setError("");
    const email = emailInputRef.current.value;
    const name = userName.current.value;
    const age = userAge.current.value;
    const password = passwordInputRef; 
  
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;
      
      const response = await fetch('http://localhost:7001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, age, uid: user.uid }), // Send correct data including Firebase user ID
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message || 'Network response was not ok.'}`);
      }
      
      const result = await response.json();
      console.log(result);
      if(!localStorage.getItem("loan-auth")){
        localStorage.setItem("loan-auth", result.user.uuid);
      }
      navigate(`/user/${result.user.uuid}`); 
    } catch (err) {
      console.log('Sign up error:', err.message);
      setError(err.message);
    }
  };
  
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser){
      if(localStorage.getItem("loan-auth")){
        const id = localStorage.getItem("loan-auth")
        navigate(`/user/:${id}`);
      }
    }
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative md:h-[550px] hidden md:block">
          <img
            className="object-cover w-full h-full"
            src={pakka}
            alt="Signup background"
          />
        </div>
        <div className="p-6 md:p-7 md:pt-5 flex flex-col justify-center items-center md:items-start">
          <form onSubmit={signUpForm} className="w-full">
            <h2 className="text-4xl font-bold text-center mb-9 text-gray-600">
              Signup
            </h2>
            <div className="space-y-4 w-full md:w-auto">
              <input
                className="border p-2 w-full text-black"
                type="text"
                placeholder="Enter Your Name"
                ref={userName}
              />
              <input
                className="border p-2 w-full text-black"
                type="text"
                placeholder="Enter Your Age"
                ref={userAge}
              />
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
              <h5 className="text-red-600">{error}</h5>
            </div>
            <button className="w-full bg-green-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 mt-4 rounded">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;