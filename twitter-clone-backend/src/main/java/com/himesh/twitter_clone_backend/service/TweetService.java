package com.himesh.twitter_clone_backend.service;

import com.himesh.exception.TweetException;
import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.model.Tweet;
import com.himesh.twitter_clone_backend.model.User;
import com.himesh.twitter_clone_backend.request.TweetReplyRequest;

import java.util.List;

public interface TweetService {
    public Tweet createTweet(Tweet req, User user)throws UserException, TweetException;
    public List<Tweet> findAllTweets();
    public Tweet reTweet(Long tweetId, User user)throws UserException, TweetException;
    public Tweet findById(Long tweetId)throws TweetException;
    public void deleteTweetById(Long tweetId, Long userId)throws TweetException, UserException;
    public Tweet removeFromReTweet(Long tweetId, User user)throws TweetException, UserException;
    public Tweet createReply(Tweet req, User user)throws TweetException, UserException;
    public List<Tweet> getUserTweet(User user);
    public List<Tweet> findByLikesContainsUser(User user);
}
