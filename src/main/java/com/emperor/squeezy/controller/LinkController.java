package com.emperor.squeezy.controller;

import com.emperor.squeezy.model.Link;
import com.emperor.squeezy.service.LinkService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

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
    public ResponseEntity<Map<String, String>> create(@RequestBody Link link) {
        Map<String, String> response = service.save(link);

        if (response.containsKey("error")) {
            return ResponseEntity.badRequest().body(response);
        } else {
            return ResponseEntity.ok(response);
        }
    }

    @GetMapping("/API/{suffix}")
    public void redirect(@PathVariable String suffix, HttpServletResponse response) throws IOException {
        Link link = service.getLink(suffix);

        if (link == null) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "Link not found");
            return;
        }
        if (link.getPassword().isEmpty()) {
            response.sendRedirect(link.getUrl());
        } else {
            response.sendRedirect("/validate?suffix=" + suffix);
        }
    }

    @GetMapping("/validate")
    public String validate(@RequestParam String suffix, Model model) {
        model.addAttribute("suffix", suffix);
        return "validate.html";
    }

    @PostMapping("/validate")
    public ResponseEntity<Map<String, String>> passwordValidation(
            @RequestBody Link model) throws IOException {

        Map<String, String> map = new HashMap<>();
        String suffix = model.getSuffix();
        String password = model.getPassword();

        Link link = service.getLink(suffix, password);
        System.err.println(link);

        if (link != null) {
            map.put("url", link.getUrl());
        } else {
            map.put("error", "invalid password");
        }
        return ResponseEntity.badRequest().body(map);
    }
}
