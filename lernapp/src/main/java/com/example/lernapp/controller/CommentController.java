package com.example.lernapp.controller;

import com.example.lernapp.model.Comment;
import com.example.lernapp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    @GetMapping("/post/{postId}")
    public List<Comment> getCommentsByPostId(@PathVariable String postId) {
        return commentService.getCommentsByPostId(postId);
    }

    @PostMapping
    public Comment addComment(@RequestBody Comment comment) {
        return commentService.addComment(comment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable String id, @RequestBody Comment comment) {
        Comment updatedComment = commentService.updateComment(id, comment);
        if (updatedComment != null) {
            return ResponseEntity.ok(updatedComment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommentById(@PathVariable String id) {
        boolean isDeleted = commentService.deleteCommentById(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
