package edu.programacion3.polarcity.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "products")
@Getter @Setter
public class Product {
    @Id
    private Long id;
    private String code;
    private String name;
    private String uom;
    private Double price;


    public Product(){

    }
}
