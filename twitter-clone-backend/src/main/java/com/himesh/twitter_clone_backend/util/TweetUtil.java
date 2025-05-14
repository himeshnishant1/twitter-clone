package com.himesh.twitter_clone_backend.util;

import com.himesh.twitter_clone_backend.model.Like;
import com.himesh.twitter_clone_backend.model.Tweet;
import com.himesh.twitter_clone_backend.model.User;

public class TweetUtil {

    public static boolean isLikedByReqUser(User reqUser, Tweet tweet){

        for(Like like: tweet.getLikes()){
            if(like.getUser().getId().equals(reqUser.getId())){
                return true;
            }
        }

        return false;
    }

    public static boolean isReTweetedByReqUser(User reqUser, Tweet tweet){
        for (User user: tweet.getReTweetUser()){
            if(user.getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }
}
