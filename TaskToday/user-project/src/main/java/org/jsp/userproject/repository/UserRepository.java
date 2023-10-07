package org.jsp.userproject.repository;

import org.jsp.userproject.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {
	@Query("select u from User u where u.phone=?1 and u.password=?2")
	public User verifyUser(long phone, String password);
}
