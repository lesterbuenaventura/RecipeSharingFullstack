package com.zosh.recipesharingyoutube.repository;

import com.zosh.recipesharingyoutube.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Long> {
    public User findByEmail(String email);
}
