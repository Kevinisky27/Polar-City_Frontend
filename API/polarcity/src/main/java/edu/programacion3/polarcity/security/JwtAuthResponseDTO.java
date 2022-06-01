package edu.programacion3.polarcity.security;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class JwtAuthResponseDTO {
    private String accessToken;
    private String tokenType = "Bearer";

    public JwtAuthResponseDTO(String accessToken, String tokenType) {
        this.accessToken = accessToken;
        this.tokenType = tokenType;
    }

    public JwtAuthResponseDTO(String accessToken) {
        this.accessToken = accessToken;
    }
}
