const API_URL = 'http://localhost:8080'; // Adjust according to your backend URL

export const fetchPostsByFach = async (fach) => {
    const response = await fetch(`${API_URL}/posts/fach/${fach}`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
};

export const createPost = async (post) => {
    const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    if (!response.ok) throw new Error('Failed to create post');
    return response.json();
};

export const fetchCommentsByPostId = async (postId) => {
    const response = await fetch(`${API_URL}/comments/post/${postId}`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
};



export const addComment = async (comment) => {
    const response = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
    });
    if (!response.ok) throw new Error('Failed to add comment');
    return response.json();
};

