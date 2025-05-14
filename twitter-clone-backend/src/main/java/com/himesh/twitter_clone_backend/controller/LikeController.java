package com.himesh.twitter_clone_backend.controller;

import com.himesh.exception.TweetException;
import com.himesh.twitter_clone_backend.dto.LikeDto;
import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.mapper.LikeDtoMapper;
import com.himesh.twitter_clone_backend.model.Like;
import com.himesh.twitter_clone_backend.model.User;
import com.himesh.twitter_clone_backend.service.LikeService;
import com.himesh.twitter_clone_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LikeController {
    @Autowired
    private UserService userService;

    @Autowired
    private LikeService likeService;

    @PostMapping("/{tweetId}/likes")
    public ResponseEntity<LikeDto> likeTweet(@PathVariable Long tweetId, @RequestHeader("Authorization") String jwt)throws UserException, TweetException {
        User user = userService.findUserProfileByJwt(jwt);
        Like like = likeService.likeTweet(tweetId, user);

        LikeDto likeDto = LikeDtoMapper.toLikeDo(like, user);

        return new ResponseEntity<>(likeDto, HttpStatus.OK);
    }

    @PostMapping("/tweet/{tweetId}")
    public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long tweetId, @RequestHeader("Authorization") String jwt)throws UserException, TweetException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Like> likes = likeService.getAllLikes(tweetId);

        List<LikeDto> likeDtos = LikeDtoMapper.toLikeDtos(likes, user);

        return new ResponseEntity<>(likeDtos, HttpStatus.OK);
    }
}
