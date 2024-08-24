package com.example.lernapp.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Getter
@Setter
@Data
@Document(collection = "Post")
public class Post {

    @Id
    private String id;
    private String title;
    private String content;
    private String author;
    private Instant timestamp;
    private String fach;
    private List<String> comments;
    private List<File> files;

    @Data
    public static class File {
        private String filename;
        private String filetype;
        private String url;
    }
}
