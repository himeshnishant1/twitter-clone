package com.himesh.twitter_clone_backend.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.ResponseBody;

@ResponseBody
@Data
public class LikeDto {

    private Long id;

    private UserDto user;

    private TweetDto tweet;
}
