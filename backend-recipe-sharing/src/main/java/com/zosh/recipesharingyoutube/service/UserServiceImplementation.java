package com.zosh.recipesharingyoutube.service;

import com.zosh.recipesharingyoutube.config.JwtProvider;
import com.zosh.recipesharingyoutube.model.User;
import com.zosh.recipesharingyoutube.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService{

    private UserRepository userRepository;
    private JwtProvider jwtProvider;

    public UserServiceImplementation(UserRepository userRepository, JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
    }

    @Override
    public User findByUserId(Long userId) throws Exception {
        Optional<User> opt = userRepository.findById(userId);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new Exception("user not found with id "+userId);
    }

    @Override
    public User findUserByJwt(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);

        if(email == null){
            throw new Exception("provide valid jwt token");
        }
        User user = userRepository.findByEmail(email);
        if(user == null){
            throw new Exception("user not found with email"+email);
        }
        return user;
    }
}
