package com.plotbooking.repository;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.plotbooking.model.UserCredentials;

@Repository
public interface UserRepository extends CrudRepository<UserCredentials, String>  {

	UserCredentials findByUsername(String username);

}
