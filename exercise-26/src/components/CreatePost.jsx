import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-6">Create a New Post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter an engaging title"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
            placeholder="What's on your mind? Write your article here..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-end pt-2">
          <button 
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;