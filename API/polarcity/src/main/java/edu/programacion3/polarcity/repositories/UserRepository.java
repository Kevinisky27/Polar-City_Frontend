package edu.programacion3.polarcity.repositories;

import edu.programacion3.polarcity.entities.UserE;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserE, Long> {
    Optional<UserE> findByUsername(String username);
    Optional<UserE> findByEmail(String email);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String username);
}
