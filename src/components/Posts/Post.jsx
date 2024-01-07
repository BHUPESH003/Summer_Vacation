import { formatISO9075 } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handlePostClick = () => {
    if (!userInfo || !userInfo.id) {
      // Redirect to the register page if not logged in
      navigate(`/post/${_id}`);
    } else {
      // Redirect to the post details page
      navigate(`/post/${_id}`);
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4 cursor-pointer" onClick={handlePostClick}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <img
            src={`http://localhost:5001/${cover}`}
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <Link to={`/post/${_id}`}>
            <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">{title}</h2>
          </Link>
          <p className="text-gray-500">
            <a className="text-blue-600 hover:underline">{author.username}</a>
            <time className="ml-2 text-gray-400">
              {formatISO9075(new Date(createdAt))}
            </time>
          </p>
          <p className="text-gray-700 mt-2">{summary}</p>
        </div>
      </div>
    </div>
  );
}
