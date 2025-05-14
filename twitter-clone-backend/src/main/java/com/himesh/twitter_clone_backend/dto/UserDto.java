package com.himesh.twitter_clone_backend.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@ResponseBody
@Data
public class UserDto {

    private Long id;

    private String fullName;

    private String email;

    private String image;

    private String location;

    private String website;

    private String birthDate;

    private String mobile;

    private String backgroundImage;

    private String bio;

    private boolean reqUser;

    private boolean loginWithGoogle;

    private List<UserDto> followers=new ArrayList<>();

    private List<UserDto> following=new ArrayList<>();

    private boolean followed;

    private boolean isVerified;
}
