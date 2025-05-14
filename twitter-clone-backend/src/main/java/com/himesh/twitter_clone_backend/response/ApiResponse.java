package com.himesh.twitter_clone_backend.response;

import lombok.*;
import org.springframework.web.bind.annotation.ResponseBody;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ResponseBody
public class ApiResponse {

    private String message;
    private boolean status;
}
