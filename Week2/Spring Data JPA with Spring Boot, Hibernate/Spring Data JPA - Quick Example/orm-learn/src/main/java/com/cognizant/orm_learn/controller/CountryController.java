package com.cognizant.orm_learn.controller;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService cntrySer;

    @GetMapping("/")
    public List<Country> getCountries(){
        return cntrySer.getAllCountries();
    }

    @GetMapping("/{code}")
    public Optional<Country> getCountries(@PathVariable String code){
        return cntrySer.getCountry(code);
    }

}
