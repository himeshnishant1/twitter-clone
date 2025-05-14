package com.himesh.twitter_clone_backend.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDateTime;
import java.util.List;

@Data
@ResponseBody
public class TweetDto {

    private Long id;

    private String content;

    private String image;

    private String video;

    private UserDto user;

    private LocalDateTime createdAt;

    private int totalLikes;

    private int totalReplies;

    private int totalReTweets;

    private boolean isLiked;

    private boolean isReTweet;

    private List<Long> reTweetUserIds;

    private List<TweetDto> replyTweets;
}
