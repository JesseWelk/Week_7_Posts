import axios from "axios";
import Post from "./Post";
import React, { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setLoading(false);
        setPosts(response.data);
      }, 1500);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Recent Posts</h1>
      {loading ? <p>Loading...</p> : posts.map((post) => <Post post={post} />)}
    </div>
  );
}
