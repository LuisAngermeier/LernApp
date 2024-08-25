import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchPostsByFach, createPost } from '../services/api';
import CommentSection from '../components/CommentSection'; // Import CommentSection

const Posts = () => {
    const { fach } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });
    const [fileUrls, setFileUrls] = useState([]);
    const [urlInput, setUrlInput] = useState('');
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                setLoading(true);
                const data = await fetchPostsByFach(fach);
                setPosts(data);
            } catch (err) {
                setError('Error fetching posts');
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, [fach]);

    const handleCreatePost = async () => {
        const post = {
            ...newPost,
            fach,
            timestamp: new Date().toISOString(),
            files: fileUrls.map(url => ({
                filename: url.split('/').pop(),
                filetype: url.split('.').pop(),
                url
            }))
        };

        try {
            setUploading(true);
            await createPost(post);
            setOpen(false);
            setNewPost({ title: '', content: '', author: '' });
            setFileUrls([]);
            setUrlInput('');
            const data = await fetchPostsByFach(fach);
            setPosts(data);
        } catch (err) {
            setError('Error creating post');
        } finally {
            setUploading(false);
        }
    };

    const handleAddFileUrl = () => {
        if (urlInput) {
            setFileUrls([...fileUrls, urlInput]);
            setUrlInput('');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Posts for {fach}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)} style={{ marginBottom: '20px' }}>
                Create New Post
            </Button>
            {loading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}
            <Grid container spacing={3}>
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {post.content}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Author: {post.author}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {new Date(post.timestamp).toLocaleDateString()}
                                </Typography>
                                {post.files && post.files.map((file, index) => (
                                    <div key={index}>
                                        <a href={file.url} target="_blank" rel="noopener noreferrer">
                                            {file.filename}
                                        </a>
                                    </div>
                                ))}
                                <CommentSection postId={post.id} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Create New Post</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        fullWidth
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Content"
                        multiline
                        rows={4}
                        fullWidth
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Author"
                        fullWidth
                        value={newPost.author}
                        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="File URL"
                        fullWidth
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleAddFileUrl();
                            }
                        }}
                    />
                    <Button variant="outlined" color="primary" onClick={handleAddFileUrl}>
                        Add File URL
                    </Button>
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                        {fileUrls.join(', ')}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreatePost} color="primary" disabled={uploading}>
                        {uploading ? 'Creating...' : 'Create'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Posts;
