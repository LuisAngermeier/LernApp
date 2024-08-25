import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography, CircularProgress, Box } from '@mui/material';
import { fetchCommentsByPostId, addComment } from '../services/api';

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        const loadComments = async () => {
            try {
                setLoading(true);
                const data = await fetchCommentsByPostId(postId);
                setComments(data);
            } catch (err) {
                setError('Error fetching comments');
            } finally {
                setLoading(false);
            }
        };
        loadComments();
    }, [postId]);

    const handleAddComment = async () => {
        if (!newComment.trim() || !authorName.trim()) return;

        const comment = {
            postId,
            author: authorName,
            content: newComment,
            timestamp: new Date().toISOString(),
        };

        try {
            setAdding(true);
            await addComment(comment);
            setNewComment('');
            setAuthorName('');
            const data = await fetchCommentsByPostId(postId);
            setComments(data);
        } catch (err) {
            setError('Error adding comment');
        } finally {
            setAdding(false);
        }
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Comments
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <>
                    <List>
                        {comments.map((comment) => (
                            <ListItem key={comment.id}>
                                <ListItemText
                                    primary={`${comment.author}: ${comment.content}`}
                                    secondary={new Date(comment.timestamp).toLocaleString()}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <TextField
                        label="Name"
                        fullWidth
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Add a comment"
                        multiline
                        rows={4}
                        fullWidth
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddComment}
                        disabled={adding}
                    >
                        {adding ? 'Adding...' : 'Add Comment'}
                    </Button>
                </>
            )}
        </Box>
    );
};

export default CommentSection;
