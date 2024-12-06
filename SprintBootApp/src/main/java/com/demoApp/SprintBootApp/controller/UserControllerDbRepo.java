package com.demoApp.SprintBootApp.controller;

import java.util.List;

import com.demoApp.SprintBootApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demoApp.SprintBootApp.entity.User;
import com.demoApp.SprintBootApp.repository.UserRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class UserControllerDbRepo {
    private UserRepository userRepository;
    private final UserService userService;
    @Autowired
    public UserControllerDbRepo(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUser();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}
