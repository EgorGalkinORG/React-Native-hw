import { useEffect, useState } from "react";
import { Post, Tag } from "../../shared/types/post";
import PostCard from "../PostCard/PostCard";
import { useFetch } from "../../hooks/useFetch";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const { loading, error, performRequest } = useFetch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsData, tagsData] = await Promise.all([
          performRequest('http://localhost:3001/posts'),
          performRequest('http://localhost:3001/tags')
        ]);
        setPosts(postsData);
        setTags(tagsData);
      } catch (e) {}
    };
    loadData();
  }, [performRequest]);

  if (error) return (
    <div className="status-error">
      <span>⚠️</span>
      <p>{error}</p>
    </div>
  );

  return (
    <div className="post-list">
      {loading ? (
        <div className="status-loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;