import { useState } from "react";
import { usePostAction } from "../../hooks/usePostAction";

interface PostCardProps {
  id: number;
  title: string;
  description: string;
  likes: number;
}

const PostCard = ({ id, title, description, likes: initialLikes }: PostCardProps) => {
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [commentText, setCommentText] = useState("");
  const { addComment, handleLike, loading } = usePostAction(id);

  // статический юзер🥸
  const currentUserId = 1; 

  const onLikeClick = async () => {
    try {
      await handleLike(currentUserId, false);
      setLikesCount(prev => prev + 1);
    } catch (e) { console.error(e); }
  };

  const onCommentSubmit = async () => {
    if (!commentText.trim()) return;
    try {
      await addComment(commentText, currentUserId);
      setCommentText("");
      alert("Комментарий добавлен!");
    } catch (e) { console.error(e); }
  };

  return (
    <div className="post-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className="actions">
        <button onClick={onLikeClick} disabled={loading}>
          ❤️ {likesCount}
        </button>
      </div>

      <div className="comment-section">
        <input 
          value={commentText} 
          onChange={(e) => setCommentText(e.target.value)} 
          placeholder="Написать комментарий..."
        />
        <button onClick={onCommentSubmit} disabled={loading}>Отправить</button>
      </div>
    </div>
  );
};

export default PostCard;