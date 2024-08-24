// src/components/PostForm.js

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function PostForm({ fach, onAddPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title,
            content,
            author,
            timestamp: new Date().toISOString(),
            fach,
            files: [], // Adjust if necessary
        };
        onAddPost(newPost);
        setTitle('');
        setContent('');
        setAuthor('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Content"
                variant="outlined"
                fullWidth
                margin="normal"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <TextField
                label="Author"
                variant="outlined"
                fullWidth
                margin="normal"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
                Add Post
            </Button>
        </Box>
    );
}

export default PostForm;
