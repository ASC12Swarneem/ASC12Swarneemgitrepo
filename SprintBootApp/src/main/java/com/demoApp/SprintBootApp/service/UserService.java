package com.demoApp.SprintBootApp.service;

import com.demoApp.SprintBootApp.entity.User;
import com.demoApp.SprintBootApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public  UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User>getAllUser(){
        return userRepository.findAll();
    }
}
