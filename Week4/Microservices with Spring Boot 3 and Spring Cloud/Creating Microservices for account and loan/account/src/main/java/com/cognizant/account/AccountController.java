package com.cognizant.account;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class AccountController {

    @GetMapping("/accounts/{acc_no}")
    public Map<String, Object> getAccount(@PathVariable String acc_no) {
        Map<String, Object> res = new HashMap<>();
        res.put("number", acc_no);
        res.put("type", "savings");
        res.put("balance", 234343);
        return res;
    }
}
