package com.himesh.twitter_clone_backend.service;

import com.himesh.exception.TweetException;
import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.model.Like;
import com.himesh.twitter_clone_backend.model.Tweet;
import com.himesh.twitter_clone_backend.model.User;
import com.himesh.twitter_clone_backend.repository.LikeRepository;
import com.himesh.twitter_clone_backend.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeServiceImplementation implements LikeService{

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private TweetService tweetService;

    @Autowired
    private TweetRepository tweetRepository;

    @Override
    public Like likeTweet(Long tweetId, User user) throws UserException, TweetException {
        Like isLikeExists = likeRepository.isLikeExists(user.getId(), tweetId);

        if(isLikeExists!=null){
            likeRepository.deleteById(isLikeExists.getId());
            return isLikeExists;
        }

        Tweet tweet = tweetService.findById(tweetId);

        Like like = new Like();
        like.setTweet(tweet);
        like.setUser(user);
        Like savedLike = likeRepository.save(like);

        tweet.getLikes().add(savedLike);
        tweetRepository.save(tweet);

        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long tweetId) throws TweetException {
        Tweet tweet = tweetService.findById(tweetId);

        return likeRepository.findByTweetId(tweetId);
    }
}
