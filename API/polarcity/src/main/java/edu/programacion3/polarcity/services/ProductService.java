package edu.programacion3.polarcity.services;

import edu.programacion3.polarcity.dto.ProductDTO;

import java.util.List;

public interface ProductService {
    List<ProductDTO> findAllProducts();
    ProductDTO findProductByCode(String code);
}
