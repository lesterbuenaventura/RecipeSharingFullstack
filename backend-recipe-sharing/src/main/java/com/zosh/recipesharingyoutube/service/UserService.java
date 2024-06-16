package com.zosh.recipesharingyoutube.service;

import com.zosh.recipesharingyoutube.model.User;

public interface UserService {
    public User findByUserId (Long userId) throws Exception;

    public User findUserByJwt(String jwt) throws Exception;
}
