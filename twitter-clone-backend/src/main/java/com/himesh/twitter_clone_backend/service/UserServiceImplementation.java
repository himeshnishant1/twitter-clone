package com.himesh.twitter_clone_backend.service;

import com.himesh.twitter_clone_backend.config.JwtProvider;
import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.model.User;
import com.himesh.twitter_clone_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserById(Long userId) throws UserException {
        return userRepository.findById(userId).orElseThrow(() -> new UserException("User not found with id: " + userId));
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email = jwtProvider.getEmailFromToken(jwt);
        User user = userRepository.findByEmail(email);
        if(user==null){
            throw new UserException("User not found with email: " + email);
        }
        return user;
    }

    @Override
    public User updateUser(Long userId, User req) throws UserException {
        User user = findUserById(userId);

        if(req.getFullName()!=null){
            user.setFullName(req.getFullName());
        }

        if(req.getImage()!=null){
            user.setImage(req.getImage());
        }

        if(req.getBackgroundImage()!=null){
            user.setBackgroundImage(req.getBackgroundImage());
        }

        if(req.getBirthDate()!=null){
            user.setBirthDate(req.getBirthDate());
        }

        if(req.getLocation()!=null){
            user.setLocation(req.getLocation());
        }

        if(req.getBio()!=null){
            user.setBio(req.getBio());
        }

        if(req.getWebsite()!=null){
            user.setWebsite(req.getWebsite());
        }

        return userRepository.save(user);
    }

    @Override
    public User followUnfollowUser(Long userId, User user) throws UserException {
        User followToUser=findUserById(userId);
        if(user.getFollowings().contains(followToUser) && followToUser.getFollowers().contains(user)){
            user.getFollowings().remove(followToUser);
            followToUser.getFollowers().remove(user);
        }
        else{
            user.getFollowings().add(followToUser);
            followToUser.getFollowers().add(user);
        }

        userRepository.save(followToUser);
        userRepository.save(user);

        return followToUser;
    }

    @Override
    public List<User> searchUser(String query) {
        return userRepository.searchUser(query);
    }
}
