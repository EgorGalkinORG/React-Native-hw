import { useFetch } from './useFetch';

export const usePostAction = (postId: number) => {
  const { performRequest, loading, error } = useFetch();

  const addComment = async (body: string, userId: number) => {
    return await performRequest(`http://localhost:3001/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body, userId }),
    });
  };

  const toggleLike = async (userId: number, isLiked: boolean) => {
    const method = isLiked ? 'DELETE' : 'PUT';
    return await performRequest(`http://localhost:3001/posts/${postId}/likes/${userId}`, {
      method
    });
  };

  return { addComment, toggleLike, loading, error };
};