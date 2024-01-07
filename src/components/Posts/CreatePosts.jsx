import React, { useState } from "react";
import Editor from "./Editor";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [content, setContent] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    const response = await fetch("http://localhost:5001/blog/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      history("/community", { replace: true });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col justify-center items-center">
    <h1 className="text-3xl">Create a Post</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 text-sm font-bold mb-2">
            Summary
          </label>
          <textarea
            id="summary"
            rows="4"
            placeholder="Enter the summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
          File (Upload Pictures Only)
          </label>
          <input
            id="file"
            type="file"
            accept="image/*" // Accept only image files
            onChange={(ev) => setFiles(ev.target.files)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
          />
        </div>
        <Editor value={content} onChange={setContent} />
        <div className="flex items-center justify-center m-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
