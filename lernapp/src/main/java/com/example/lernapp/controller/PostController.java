package com.example.lernapp.controller;

import com.example.lernapp.model.Post;
import com.example.lernapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping
    public Post addPost(@RequestBody Post post) {
        return postService.addPost(post);
    }

    @GetMapping("/fach/{fach}")
    public List<Post> getPostsByFach(@PathVariable String fach) {
        return postService.getPostsByFach(fach);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable String id, @RequestBody Post post) {
        Post updatedPost = postService.updatePost(id, post);
        if (updatedPost != null) {
            return ResponseEntity.ok(updatedPost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePostById(@PathVariable String id) {
        boolean isDeleted = postService.deletePostById(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
