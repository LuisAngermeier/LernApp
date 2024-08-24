package com.example.lernapp.service;

import com.example.lernapp.model.Post;
import com.example.lernapp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post addPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getPostsByFach(String fach) {
        return postRepository.findByFach(fach);
    }

    public Post updatePost(String id, Post post) {
        if (postRepository.existsById(id)) {
            post.setId(id);
            return postRepository.save(post);
        } else {
            return null;
        }
    }

    public boolean deletePostById(String id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
