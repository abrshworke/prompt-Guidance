
"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data); 
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filtered = posts.filter(
      (post) =>
        post.prompt.toLowerCase().includes(value) ||
        post.tag.toLowerCase().includes(value)
    );

    setFilteredPosts(filtered);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-4">
      {/* Search Bar */}
      <form className="w-full flex items-center justify-center mb-6">
        <input
          type="text"
          placeholder="Search by prompt or tag..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      {filteredPosts.length > 0 ? (
        <PromptCardList data={filteredPosts} handleTagClick={() => {}} />
      ) : (
        <p className="text-center text-gray-500 mt-4">No prompts found.</p>
      )}
    </section>
  );
};

export default Feed;
