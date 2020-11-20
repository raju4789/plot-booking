package com.plotbooking.model;

public class AuthenticationResponse {

	private String jwt;
	private String userName;
	
	

	public AuthenticationResponse(String jwt, String userName) {
		super();
		this.jwt = jwt;
		this.userName = userName;
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
