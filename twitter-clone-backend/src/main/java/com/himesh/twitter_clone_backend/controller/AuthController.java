package com.himesh.twitter_clone_backend.controller;

import com.himesh.twitter_clone_backend.config.JwtProvider;
import com.himesh.twitter_clone_backend.exception.UserException;
import com.himesh.twitter_clone_backend.model.User;
import com.himesh.twitter_clone_backend.model.Verification;
import com.himesh.twitter_clone_backend.repository.UserRepository;
import com.himesh.twitter_clone_backend.response.AuthResponse;
import com.himesh.twitter_clone_backend.service.CustomUserDetailsServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomUserDetailsServiceImplementation customUserDetailsServiceImplementation;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user){
        try{
            String email = user.getEmail();
            String password = user.getPassword();
            String fullName = user.getFullName();
            String birthDate = user.getBirthDate();

            User isEmailExists = userRepository.findByEmail(email);

            if (isEmailExists != null) throw new UserException("Email already used for another account");

            User createdUser = new User();
            createdUser.setEmail(email);
            createdUser.setFullName(fullName);
            createdUser.setPassword(passwordEncoder.encode(password));
            createdUser.setBirthDate(birthDate);
            createdUser.setVerification(new Verification());

            User savedUser = userRepository.save(createdUser);

            Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String token = jwtProvider.generateToken(authentication);

            AuthResponse authResponse = new AuthResponse(token, true);

            return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<AuthResponse>(new AuthResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signIn(@RequestBody User user){
        String username = user.getEmail();
        String password = user.getPassword();

        Authentication authentication = null;

        try{
            authentication = authenticate(username, password);
        } catch (Exception e){
            return new ResponseEntity<AuthResponse>(new AuthResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse(token, true);

        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.ACCEPTED);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetailsServiceImplementation.loadUserByUsername(username);

        if(userDetails == null){
            throw new BadCredentialsException("Invalid Username");
        }
        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
