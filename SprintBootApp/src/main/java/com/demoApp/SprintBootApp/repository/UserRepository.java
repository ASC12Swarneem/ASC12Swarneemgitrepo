package com.demoApp.SprintBootApp.repository;

import com.demoApp.SprintBootApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}

