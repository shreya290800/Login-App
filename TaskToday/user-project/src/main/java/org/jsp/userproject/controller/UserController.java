package org.jsp.userproject.controller;

import org.jsp.userproject.dto.User;
import org.jsp.userproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	private UserRepository repository;

	@PostMapping("/users")
	public User saveUser(@RequestBody User user) {
		return repository.save(user);
	}

	@PostMapping("/users/verify")
	public User verfifyUser(@RequestParam long phone, @RequestParam String password) {
		return repository.verifyUser(phone, password);
	}
}
