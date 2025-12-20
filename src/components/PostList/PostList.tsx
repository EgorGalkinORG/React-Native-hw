import { useEffect, useState } from "react";
import { Post, Tag } from "../../shared/types/post";
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState<number>(0);

  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const mockTags: Tag[] = [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Backend" },
    ];

    const mockPosts: Post[] = [
      {
        id: 1,
        title: "React filters",
        description: "Post about filters",
        likes: 12,
        tags: [{ tag: mockTags[0] }],
      },
      {
        id: 2,
        title: "TS + Prisma",
        description: "Backend logic",
        likes: 25,
        tags: [{ tag: mockTags[1] }, { tag: mockTags[2] }],
      },
      {
        id: 3,
        title: "Forum app",
        description: "Forum description",
        likes: 3,
        tags: [{ tag: mockTags[0] }],
      },
    ];

    setTags(mockTags);
    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
  }, []);

  useEffect(() => {
    const result = posts.filter((post) => {
      const titleMatch = post.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const likesMatch = post.likes >= likesMinimumValue;

      const tagsMatch =
        selectedTags.length === 0 ||
        post.tags.some((postTag) =>
          selectedTags.includes(postTag.tag.id)
        );

      return titleMatch && likesMatch && tagsMatch;
    });

    setFilteredPosts(result);
  }, [searchValue, selectedTags, likesMinimumValue, posts]);

  const handleTagClick = (tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  return (
    <div className="post-list">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by title"
      />

      <div className="tags">
        {tags.map((tag) => (
          <button
            key={tag.id}
            className={`tag ${
              selectedTags.includes(tag.id) ? "active" : ""
            }`}
            onClick={() => handleTagClick(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </div>

      <div className="likes-filter">
        <label>
          <input
            type="radio"
            name="likes"
            checked={likesMinimumValue === 0}
            onChange={() => setLikesMinimumValue(0)}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            name="likes"
            checked={likesMinimumValue === 10}
            onChange={() => setLikesMinimumValue(10)}
          />
          10+
        </label>

        <label>
          <input
            type="radio"
            name="likes"
            checked={likesMinimumValue === 20}
            onChange={() => setLikesMinimumValue(20)}
          />
          20+
        </label>
      </div>

      <div className="posts">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            likes={post.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
