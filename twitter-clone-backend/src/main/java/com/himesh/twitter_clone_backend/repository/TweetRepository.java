package com.himesh.twitter_clone_backend.repository;

import com.himesh.twitter_clone_backend.model.Tweet;
import com.himesh.twitter_clone_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TweetRepository extends JpaRepository<Tweet, Long> {

    List<Tweet> findAllByIsTweetTrueOrderByCreatedAtDesc();

    List<Tweet> findByReTweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(User user, Long userId);

    List<Tweet> findByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("SELECT t FROM Tweet t JOIN t.likes l WHERE l.user.id=:userId")
    List<Tweet> findByLikesUser_id(Long userId);
}
