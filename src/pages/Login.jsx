import avatar from "../assets/images/avatar.png";
import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../components/UserContext";
import RegistrationModal from "../components/RegistrationModal";

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:5001/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setTimeout(() => {
          setRedirect(true);
        }, 2000);

        setModalSuccess(true);
        setModalMessage("Login successful");
      });
    } else {
      setModalSuccess(false);
      setModalMessage("Username or Password is incorrect.");
    }

    setModalIsOpen(true);
  }

  if (redirect) {
    return <Navigate to={"/community"} replace={"true"} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4 text-center">
          <img
            src={avatar}
            alt="Avatar"
            className="mx-auto rounded-full w-20 h-20"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
        </div>
        <form onSubmit={login}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="**************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between flex-col ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <div className="flex flex-row text-gray-700 mt-3">
           Don't have an account? 
            <Link to="/register" className="text-blue-500 hover:underline ml-2">
             Register now.
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
}
