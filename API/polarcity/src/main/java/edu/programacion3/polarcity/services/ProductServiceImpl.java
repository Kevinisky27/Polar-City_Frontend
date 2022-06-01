package edu.programacion3.polarcity.services;

import edu.programacion3.polarcity.dto.ProductDTO;
import edu.programacion3.polarcity.entities.Product;
import edu.programacion3.polarcity.exceptions.NotFoundException;
import edu.programacion3.polarcity.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<ProductDTO> findAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(this::mapDTO).collect(Collectors.toList());
    }

    @Override
    public ProductDTO findProductByCode(String code) {
        Product product = productRepository.findByCode(code).orElseThrow(() -> new NotFoundException("Producto no econtrado"));
        return mapDTO(product);
    }

    //Mapear a DAO los Productos DTO
    private Product mapDAO(ProductDTO productDTO) {
        return modelMapper.map(productDTO, Product.class);
    }

    //Mapear a DTO los Productos DAO
    private ProductDTO mapDTO(Product product) {
        return modelMapper.map(product,ProductDTO.class);
    }

}
