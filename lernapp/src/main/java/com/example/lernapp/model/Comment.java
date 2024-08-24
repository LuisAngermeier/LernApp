package com.example.lernapp.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Getter
@Setter
@Data
@Document(collection = "Comment")
public class Comment {

    @Id
    private String id;
    private String postId;
    private String author;
    private String content;
    private Instant timestamp;
}
