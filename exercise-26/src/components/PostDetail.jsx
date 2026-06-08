import React, { useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-red-500 font-medium">Post not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-blue-600 hover:underline">Back to Home</button>
      </div>
    );
  }

  const handleNavigation = (direction) => {
    const newId = direction === 'next' ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Article Content */}
      <article className="prose max-w-none">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line mb-8">
          {post.content}
        </p>
      </article>

      {/* Location state message */}
      {location.state && (
        <div className="mb-6 p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-500 italic">
          You navigated here from post ID: {location.state.fromPostId}
        </div>
      )}

      {/* Pagination Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-100">
        <button 
          onClick={() => handleNavigation('prev')}
          className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition-all shadow-sm"
        >
          &larr; Previous
        </button>
        <button 
          onClick={() => handleNavigation('next')}
          className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition-all shadow-sm"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default PostDetail;