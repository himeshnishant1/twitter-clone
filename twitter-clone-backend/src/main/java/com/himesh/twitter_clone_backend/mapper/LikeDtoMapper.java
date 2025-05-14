package com.himesh.twitter_clone_backend.mapper;

import com.himesh.twitter_clone_backend.dto.LikeDto;
import com.himesh.twitter_clone_backend.dto.TweetDto;
import com.himesh.twitter_clone_backend.dto.UserDto;
import com.himesh.twitter_clone_backend.model.Like;
import com.himesh.twitter_clone_backend.model.User;

import java.util.ArrayList;
import java.util.List;

public class LikeDtoMapper {
    public static LikeDto toLikeDo(Like like, User reqUser){

        UserDto userDto = UserDtoMapper.toUserDto(like.getUser());
        UserDto reqUserDto = UserDtoMapper.toUserDto(reqUser);
        TweetDto tweetDto = TweetDtoMapper.toTweetDto(like.getTweet(), reqUser);

        LikeDto likeDto = new LikeDto();
        likeDto.setId(like.getId());
        likeDto.setTweet(tweetDto);
        likeDto.setUser(userDto);

        return likeDto;
    }

    public static List<LikeDto> toLikeDtos(List<Like> likes, User reqUser){
        List<LikeDto> likeDtos = new ArrayList<>();

        for(Like like: likes){
            UserDto userDto = UserDtoMapper.toUserDto(like.getUser());
            TweetDto tweetDto = TweetDtoMapper.toTweetDto(like.getTweet(), reqUser);

            LikeDto likeDto = new LikeDto();
            likeDto.setId(like.getId());
            likeDto.setTweet(tweetDto);
            likeDto.setUser(userDto);

            likeDtos.add(likeDto);
        }

        return likeDtos;
    }
}
