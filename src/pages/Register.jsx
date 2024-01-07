import React, { useState } from "react";
import avatar from "../assets/images/avatar.png";
import RegistrationModal from "../components/RegistrationModal";
import {useNavigate,Link} from 'react-router-dom'
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const history=useNavigate();
  // Create a user object to send to the backend

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    // ... (Rest of your registration logic)
    const user = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:5001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Handle successful registration
       
        setModalSuccess(true);
        setModalMessage("Registration successful");

        setTimeout(() => {
          history('/login',{replace:true});
        }, 2000);
      } else if (response.status === 400) {
        // Handle username already taken error
        setModalSuccess(false);
        setModalMessage("Username is already taken.");
      } else {
        // Handle other registration errors
        setModalSuccess(false);
        setModalMessage("Registration failed.");
      }

      setModalIsOpen(true);
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4 text-center">
          <img
            src={avatar} // Replace with your avatar URL
            alt="Avatar"
            className="mx-auto rounded-full w-20 h-20"
          />
          <h2 className="text-2xl font-semibold">Sign Up</h2>
        </div>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2 transition-transform transform-gpu hover:scale-105"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-100 focus:bg-white  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 transition-transform transform-gpu hover:scale-105"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className=" bg-gray-100 focus:bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center  flex-col">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Sign In
            </button>
            <div className="flex flex-row text-gray-700 mt-3">
           Already have an account? 
            <Link to="/login" className="text-blue-500 hover:underline ml-2">
             Login now.
            </Link>
            </div>
          </div>
        </form>
      </div>
      <RegistrationModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        success={modalSuccess}
        message={modalMessage}
      />
    </div>
  );
};

export default Register;
