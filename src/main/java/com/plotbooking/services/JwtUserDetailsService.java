package com.plotbooking.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.plotbooking.exception.ResourceAlreadyExistsException;
import com.plotbooking.model.UserCredentials;
import com.plotbooking.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserCredentials user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}

		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
	}
	
	public void createUser(UserCredentials user) throws ResourceAlreadyExistsException {
		UserCredentials dbUser = userRepository.findByUsername(user.getUsername());

		if (dbUser != null) {
			throw new ResourceAlreadyExistsException("User already exists with username: " + user.getUsername());
		}

		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		
		userRepository.save(user);
	}

}
