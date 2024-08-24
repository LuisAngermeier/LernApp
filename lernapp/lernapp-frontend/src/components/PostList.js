// src/components/PostList.js
import React from 'react';

function PostList({ posts }) {
    return (
        <div className="post-list">
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <small>By {post.author} on {new Date(post.timestamp).toLocaleString()}</small>
                        <div className="comments">
                            <h4>Comments:</h4>
                            <ul>
                                {post.comments.map((commentId, index) => (
                                    <li key={index}>Comment ID: {commentId}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="files">
                            <h4>Files:</h4>
                            <ul>
                                {post.files.map((file, index) => (
                                    <li key={index}>
                                        <a href={file.url} target="_blank" rel="noopener noreferrer">
                                            {file.filename} ({file.filetype})
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default PostList;
