package com.himesh.twitter_clone_backend.service;

import com.himesh.exception.TweetException;
import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.model.Like;
import com.himesh.twitter_clone_backend.model.User;

import java.util.List;

public interface LikeService {

    public Like likeTweet(Long tweetId, User user) throws UserException, TweetException;

    public List<Like> getAllLikes(Long tweetId)throws TweetException;

}
