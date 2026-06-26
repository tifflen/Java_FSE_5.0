package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository cr;

    @Transactional
    public List<Country> getAllCountries(){
        return cr.findAll();
    }

    public Optional<Country> getCountry(String code){
        Optional<Country> res = cr.findById(code);
        return res;
    }
}
