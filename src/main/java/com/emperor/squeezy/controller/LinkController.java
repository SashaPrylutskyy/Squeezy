package com.emperor.squeezy.controller;

import com.emperor.squeezy.model.ApiResponse;
import com.emperor.squeezy.model.Link;
import com.emperor.squeezy.service.LinkService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
public class LinkController {

    private LinkService service;

    public LinkController(LinkService service) {
        this.service = service;
    }

    @GetMapping("/")
    public String welcome() {
        return "index.html";
    }

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> create(@RequestBody Link link) {
        ApiResponse response = service.createLink(link);

        return response.isSuccess() ?
                ResponseEntity.ok(response) :
                ResponseEntity.badRequest().body(response);
    }

    @GetMapping("/API/{suffix}")
    public void redirect(@PathVariable String suffix,
                         HttpServletResponse response) throws IOException {
        String redirectUrl = service.getRedirectUrl(suffix);
        response.sendRedirect(redirectUrl);
    }

    @GetMapping("/validate")
    public String validate(@RequestParam String suffix) {
        return "validate.html";
    }

    @PostMapping("/validate")
    public ResponseEntity<ApiResponse> validation(@RequestBody Link link) {
        ApiResponse response = service.isPasswordValid(link);

        return response.isSuccess() ?
                ResponseEntity.ok(response) :
                ResponseEntity.badRequest().body(response);
    }
}
