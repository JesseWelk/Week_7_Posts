import { useEffect, useState } from "react";
import axios from "axios";

export default function Post({ post }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const getAuthor = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`,
      );
      setAuthor(response.data);
    };

    getAuthor();
  }, [post.userId]);

  return (
    <div className="article">
      <h2>{post.title}</h2>
      {author && <p className="author">Author: {author.name}</p>}
      <p>{post.body}</p>
    </div>
  );
}
