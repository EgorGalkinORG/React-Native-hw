import { Post } from "../../shared/types/post";

interface PostCardProps {
  title: string;
  description: string;
  likes: number;
}

const PostCard = ({ title, description, likes }: PostCardProps) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{likes}</span>
    </div>
  );
};

export default PostCard;
