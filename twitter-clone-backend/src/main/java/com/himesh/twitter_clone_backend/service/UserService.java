package com.himesh.twitter_clone_backend.service;

import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.model.User;

import java.util.List;

public interface UserService {

    public User findUserById(Long userId)throws UserException;

    public User findUserProfileByJwt(String jwt)throws UserException;

    public User updateUser(Long userId, User req)throws UserException;

    public User followUnfollowUser(Long userId, User user)throws UserException;

    public List<User> searchUser(String query);
}
