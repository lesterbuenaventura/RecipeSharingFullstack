package com.zosh.recipesharingyoutube.controller;

import com.zosh.recipesharingyoutube.model.User;
import com.zosh.recipesharingyoutube.repository.UserRepository;
import com.zosh.recipesharingyoutube.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {


    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/api/users/profile")
    public User findUserByJwt(@RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);
        return user;
    }

}
