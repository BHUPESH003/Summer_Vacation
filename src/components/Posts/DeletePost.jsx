import React, { useState } from 'react';

const PostDetail = ({ postId }) => {
  const [message, setMessage] = useState('');

  const handleDeletePost = () => {
    fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Post deletion failed');
        }
      })
      .then((data) => {
        setMessage(data.message); // Display a success message
      })
      .catch((error) => {
        setMessage('Error deleting the post'); // Handle errors
      });
  };

  return (
    <div>
      <button onClick={handleDeletePost}>Delete Post</button>
      <p>{message}</p>
    </div>
  );
};

export default PostDetail;
