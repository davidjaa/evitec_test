package com.evitec.controller;

import com.evitec.entity.Customer;
import com.evitec.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping
    public ResponseEntity<String> addCustomer(@RequestBody Customer customer) {
        // Kontroll: nimi ainult tähed või sidekriips
        if (!customer.getFirstName().matches("^[A-Za-zÄÖÜÕäöüõ\\-]+$") ||
            !customer.getLastName().matches("^[A-Za-zÄÖÜÕäöüõ\\-]+$")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Nimi võib sisaldada ainult tähti ja sidekriipsu!");
        }

        // Kontroll: isikukood peab olema 11 numbrit
        if (!customer.getPersonalCode().matches("^\\d{11}$")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Isikukood peab olema 11 numbrit!");
        }

        // Kontroll: kas isik on juba olemas
        Optional<Customer> existing = customerRepository.findByPersonalCode(customer.getPersonalCode());
        if (existing.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("Inimene on juba olemas tabelis!");
        }

        customerRepository.save(customer);
        return ResponseEntity.ok("Klient on edukalt lisatud DB2 andmebaasi!");
    }
}
