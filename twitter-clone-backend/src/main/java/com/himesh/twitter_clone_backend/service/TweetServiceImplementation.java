package com.himesh.twitter_clone_backend.service;

import com.himesh.exception.TweetException;
import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.model.Tweet;
import com.himesh.twitter_clone_backend.model.User;
import com.himesh.twitter_clone_backend.repository.TweetRepository;
import com.himesh.twitter_clone_backend.request.TweetReplyRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TweetServiceImplementation implements TweetService{
    @Autowired
    private TweetRepository tweetRepository;

    @Override
    public Tweet createTweet(Tweet req, User user) throws UserException, TweetException {
        return setTweet(req, user, true);
    }

    @Override
    public List<Tweet> findAllTweets() {
        return tweetRepository.findAllByIsTweetTrueOrderByCreatedAtDesc();
    }

    @Override
    public Tweet reTweet(Long tweetId, User user) throws UserException, TweetException {
        Tweet tweet = findById(tweetId);
        if(tweet.getReTweetUser().contains(user)){
            tweet.getReTweetUser().remove(user);
        }
        else{
            tweet.getReTweetUser().add(user);
        }
        return tweetRepository.save(tweet);
    }

    @Override
    public Tweet findById(Long tweetId) throws TweetException {
        return tweetRepository.findById(tweetId).orElseThrow(() -> new TweetException("Tweet not found: " + tweetId));
    }

    @Override
    public void deleteTweetById(Long tweetId, Long userID) throws TweetException, UserException {
        Tweet tweet = findById(tweetId);
        if(!userID.equals(tweet.getUser().getId())){
            throw new UserException("You can not delete another user's tweet");
        }

        tweetRepository.deleteById(tweetId);
    }

    @Override
    public Tweet removeFromReTweet(Long tweetId, User user) throws TweetException, UserException {
        //Not Needed
        return null;
    }

    @Override
    public Tweet createReply(Tweet req, User user) throws TweetException, UserException {
        return setTweet(req, user, false);
    }

    @Override
    public List<Tweet> getUserTweet(User user) {
        return tweetRepository.findByReTweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(user, user.getId());
    }

    @Override
    public List<Tweet> findByLikesContainsUser(User user) {
        return tweetRepository.findByLikesUser_id(user.getId());
    }

    private Tweet setTweet(Tweet req, User user, boolean isTweet) throws TweetException {
        Tweet replyFor = findById(req.getId());

        Tweet tweet = new Tweet();
        tweet.setContent(req.getContent());
        tweet.setCreatedAt(LocalDateTime.now());
        tweet.setImage(req.getImage());
        tweet.setUser(user);
        tweet.setReply(!isTweet);
        tweet.setTweet(isTweet);
        tweet.setReplyFor(replyFor);

        Tweet savedReply = tweetRepository.save(tweet);

        tweet.getReplyTweets().add(savedReply);

        tweetRepository.save(replyFor);

        return replyFor;
    }
}
