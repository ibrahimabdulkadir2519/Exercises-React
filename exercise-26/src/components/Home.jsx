import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Recent Stories</h2>
        
        {/* Search Form */}
        <form className="flex w-full md:w-auto max-w-md gap-2">
          <input
            type="text"
            name="search"
            placeholder="Search posts..."
            defaultValue={searchTerm}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
          />
          <button 
            type="submit"
            className="px-5 py-2 bg-gray-900 text-white rounded-xl font-medium text-sm hover:bg-gray-800 transition-all shadow-sm"
          >
            Search
          </button>
        </form>
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No posts found matching your search.</p>
      ) : (
        <ul className="grid gap-4">
          {filteredPosts.map((post) => (
            <li key={post.id} className="group border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md hover:bg-blue-50/20 transition-all duration-200">
              <Link to={`/posts/${post.id}`} className="block">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed">
                  {post.content || "Click to read the full story and explore the insights shared in this post."}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Article <span>&rarr;</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;