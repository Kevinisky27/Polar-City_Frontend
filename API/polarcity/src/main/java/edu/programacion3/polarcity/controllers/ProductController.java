package edu.programacion3.polarcity.controllers;

import edu.programacion3.polarcity.dto.ProductDTO;
import edu.programacion3.polarcity.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductDTO> findAllProducts(){
        return productService.findAllProducts();
    }

    @GetMapping("/")
    public ResponseEntity<ProductDTO> findByCode(@RequestParam(name = "code") String code){
        return new ResponseEntity<>(productService.findProductByCode(code), HttpStatus.OK);
    }
}
