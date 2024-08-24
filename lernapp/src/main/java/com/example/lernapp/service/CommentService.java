package com.example.lernapp.service;

import com.example.lernapp.model.Comment;
import com.example.lernapp.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public List<Comment> getCommentsByPostId(String postId) {
        return commentRepository.findByPostId(postId);
    }

    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment updateComment(String id, Comment comment) {
        if (commentRepository.existsById(id)) {
            comment.setId(id);
            return commentRepository.save(comment);
        } else {
            return null;
        }
    }

    public boolean deleteCommentById(String id) {
        if (commentRepository.existsById(id)) {
            commentRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
