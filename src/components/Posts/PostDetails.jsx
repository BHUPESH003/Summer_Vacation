import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';

export default function PostDetails() {
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/blog/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, [id]);

  if (!postInfo) return null;
  const username = userInfo?.username;

  const handleDeletePost = () => {
    // Send a request to delete the post
    fetch(`http://localhost:5001/blog/post/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (response.status === 200) {
          // Post deleted successfully, navigate to a relevant page
          navigate('/community'); // Change to the desired page
        } else {
          // Handle errors here
        }
      })
      .catch(error => {
        // Handle errors here
      });
  };

  return (
    <>
      {username && (
        <div className="container mx-auto mt-6 p-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-2">{postInfo.title}</h1>
            <time className="text-gray-500 block mb-2">
              {formatISO9075(new Date(postInfo.createdAt))}
            </time>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-blue-600 mb-4 text-xl">by @{postInfo.author.username}</div>
            {userInfo.id === postInfo.author._id && (
              <div className="mb-4">
                <Link className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" to={`/edit/${postInfo._id}`}>
                  Edit this post
                </Link>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg ml-2" onClick={handleDeletePost}>
                  Delete this post
                </button>
              </div>
            )}
          </div>
          <div className="mb-6">
            <img src={`http://localhost:5001/${postInfo.cover}`} alt="" className="w-full h-[700px] rounded-lg" />
          </div>
          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
      )}
      {!username &&
        <div className="flex flex-col justify-center items-center m-auto p-auto h-48">
          <div>
            Log in to view the Post details
          </div>
          <Link to={'/login'} className="m-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </Link>
        </div>
      }
    </>
  );
}
