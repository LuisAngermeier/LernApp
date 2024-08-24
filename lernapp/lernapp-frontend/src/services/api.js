// src/services/api.js

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
