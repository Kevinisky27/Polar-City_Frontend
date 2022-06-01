package edu.programacion3.polarcity.controllers;

import edu.programacion3.polarcity.dto.LogInDTO;
import edu.programacion3.polarcity.dto.SignUpDTO;
import edu.programacion3.polarcity.entities.Role;
import edu.programacion3.polarcity.entities.UserE;
import edu.programacion3.polarcity.exceptions.NotFoundException;
import edu.programacion3.polarcity.repositories.RoleRepository;
import edu.programacion3.polarcity.repositories.UserRepository;
import edu.programacion3.polarcity.security.JwtAuthResponseDTO;
import edu.programacion3.polarcity.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController()
@RequestMapping("/api/user")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponseDTO> authenticateUser(@RequestBody LogInDTO loginDTO){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        //Se obtiene el token del jwtTokenProvider
        String token = jwtTokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JwtAuthResponseDTO(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUpUser(@RequestBody SignUpDTO signUpDTO){
        if(Boolean.TRUE.equals(userRepository.existsByUsername(signUpDTO.getUsername()))){
            return new ResponseEntity<>("Username already exist", HttpStatus.BAD_REQUEST);
        }

        if(Boolean.TRUE.equals(userRepository.existsByEmail(signUpDTO.getEmail()))){
            return new ResponseEntity<>("Email already exist", HttpStatus.BAD_REQUEST);
        }

        UserE user = new UserE();
        user.setUsername(signUpDTO.getUsername());
        user.setEmail(signUpDTO.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDTO.getPassword()));

        Role roles = roleRepository.findByName("ROLE_USER").orElseThrow(() -> new NotFoundException("Rol no encontrado"));
        user.setRoles(Collections.singleton(roles));
        userRepository.save(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }
}
