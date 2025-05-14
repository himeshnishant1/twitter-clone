package com.himesh.twitter_clone_backend.response;


import com.himesh.twitter_clone_backend.model.User;
import lombok.Data;
import org.springframework.web.bind.annotation.ResponseBody;

@Data
@ResponseBody
public class AuthResponse {
    private String jwt;
    private boolean status;
    private String message;
    private User user;

    public AuthResponse(String jwt, boolean status, String message, User user){
        this.jwt = jwt;
        this.status = status;
        this.message = message;
        this.user = user;
    }

    public AuthResponse(String jwt, boolean status){
        this.jwt = jwt;
        this.status = status;
    }

    public AuthResponse(String jwt, boolean status, User user){
        this.jwt = jwt;
        this.status = status;
        this.user = user;
    }

    public AuthResponse(String message){
        this.message = message;
    }
}
