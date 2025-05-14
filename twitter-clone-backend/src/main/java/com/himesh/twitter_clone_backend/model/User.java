package com.himesh.twitter_clone_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fullName;
    private String location;
    private String website;
    private String birthDate;
    private String email;
    private String password;
    private String mobile;
    private String image;
    private String backgroundImage;
    private String bio;
    private boolean reqUser;
    private boolean loginWithGoogle;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Tweet> tweets=new ArrayList<Tweet>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Like> likes=new ArrayList<Like>();

    @Embedded
    private Verification verification;

    @JsonIgnore
    @ManyToMany
    private List<User> followers = new ArrayList<User>();

    @JsonIgnore
    @ManyToMany
    private List<User> followings = new ArrayList<User>();
}
