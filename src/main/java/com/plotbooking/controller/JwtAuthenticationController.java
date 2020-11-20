package com.plotbooking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plotbooking.exception.ResourceAlreadyExistsException;
import com.plotbooking.model.AuthenticationRequest;
import com.plotbooking.model.AuthenticationResponse;
import com.plotbooking.model.UserCredentials;
import com.plotbooking.services.JwtUserDetailsService;
import com.plotbooking.services.JwtUtil;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@PostMapping(value = "/login")
	public ResponseEntity<AuthenticationResponse> createAuthenticationToken(
			@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException e) {
			return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse("", ""),
					HttpStatus.UNAUTHORIZED);
		}

		final UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		String jwt = jwtTokenUtil.generateToken(userDetails);

		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse(jwt, userDetails.getUsername()), HttpStatus.OK);

	}
	
	@PostMapping(value = "/register")
	public ResponseEntity<String> registerUser(@RequestBody UserCredentials user) throws Exception {

		try {
			jwtUserDetailsService.createUser(user);
			return new ResponseEntity<String>("Successfully created user", HttpStatus.CREATED);

		} catch (ResourceAlreadyExistsException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			return new ResponseEntity<String>("Failed to create user", HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}
