package com.emperor.squeezy.service;

import com.emperor.squeezy.model.Link;
import com.emperor.squeezy.repository.LinkRepository;
import com.emperor.squeezy.utility.SuffixGenerator;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class LinkService {

    private LinkRepository repo;

    public LinkService(LinkRepository repo) {
        this.repo = repo;
    }

    public Map<String, String> save(Link link) {
        Map<String, String> response = new HashMap<>();

        try {
            String suffix = SuffixGenerator.generate();
            link.setSuffix(suffix);
            repo.save(link);

            response.put("suffix", suffix);
        } catch (Exception e) {
            response.put("error", e.getMessage());
        }
        return response;
    }

    public Link getLink(String suffix) {
        return repo.findLinkBySuffix(suffix);
    }

    public Link getLink(String suffix, String password) {
        return repo.findLinkBySuffixAndPassword(suffix, password);
    }
}
