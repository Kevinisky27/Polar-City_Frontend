package edu.programacion3.polarcity.repositories;

import edu.programacion3.polarcity.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product,Long> {
    Optional<Product> findByCode(String code);
}
