package edu.programacion3.polarcity.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProductDTO {
    private Long id;
    private String code;
    private String name;
    private String uom;
    private Double price;

    public ProductDTO(){

    }
}
