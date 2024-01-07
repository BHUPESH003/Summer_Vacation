import Post from "./Post";
import { useEffect, useState } from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5001/blog/post')
      .then(response => response.json())
      .then(posts => setPosts(posts))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map(post => (
            <Post key={post._id} {...post} />
          ))
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
}
