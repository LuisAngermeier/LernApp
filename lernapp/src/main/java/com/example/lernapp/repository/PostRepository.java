package com.example.lernapp.repository;

import com.example.lernapp.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findByFach(String fach);
}
