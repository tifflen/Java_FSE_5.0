package com.cognizant.loans;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class LoansController {

    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoan(@PathVariable String number) {
        Map<String, Object> res = new HashMap<>();
        res.put("number", number);
        res.put("type", "car");
        res.put("loan", 400000);
        res.put("emi", 3258);
        res.put("tenure", 18);
        return res;
    }
}
