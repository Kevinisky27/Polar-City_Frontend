package edu.programacion3.polarcity.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SignUpDTO {
    private String username;
    private String email;
    private String password;

    public SignUpDTO(){

    }
}
