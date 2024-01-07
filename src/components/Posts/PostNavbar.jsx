import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function PostNavbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { setUserInfo, userInfo } = useContext(UserContext);
  const history = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/user/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
      });
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:5001/user/logout", {
      credentials: "include",
      method: "POST",
    });
    const user = setUserInfo(null);
    if (!user) {
      history("/community", { replace: true });
    }
  }

  const username = userInfo?.username;

  return (
    <>
      <nav className="bg-slate-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu />
            </button>
            <div
              className={`lg:flex flex-grow items-center ${
                navbarOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                {username && (
                  <>
                    <li className="nav-item">
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                        to="/create"
                      >
                        <span className="ml-2">Create New Post</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={logout}
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                      >
                        Logout ({username})
                      </button>
                    </li>
                  </>
                )}
                {!username && <>
                    
                   
                    <li className="nav-item">
                    <Link to={'/login'}>
                      <button

                        className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                      >
                       Login to Create A Post
                      </button>
                      </Link>
                    </li>
                </>}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
