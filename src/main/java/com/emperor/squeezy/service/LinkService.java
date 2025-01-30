package com.emperor.squeezy.service;

import com.emperor.squeezy.model.ApiResponse;
import com.emperor.squeezy.model.Link;
import com.emperor.squeezy.repository.LinkRepository;
import com.emperor.squeezy.utility.PasswordHashingUtil;
import com.emperor.squeezy.utility.SuffixGenerator;
import org.springframework.stereotype.Service;

@Service
public class LinkService {

    private LinkRepository repo;

    public LinkService(LinkRepository repo) {
        this.repo = repo;
    }

    public ApiResponse createLink(Link link) {
        try {
            String suffix = SuffixGenerator.generate();
            link.setSuffix(suffix);
            link.setPassword(PasswordHashingUtil.hash(link.getPassword()));
            repo.save(link);

            return new ApiResponse(true, suffix);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage());
        }
    }

    public String getRedirectUrl(String suffix) {
        Link link = getLink(suffix);

        if (link == null) {
            return "/404";
        } else if (link.getPassword().isEmpty()) {
            return link.getUrl();
        } else {
            return "/validate?suffix=" + suffix;
        }

    }

    public ApiResponse isPasswordValid(Link link) {
        //suffix & password
        String suffix = link.getSuffix();
        String password = link.getPassword();

        Link foundLink = getLink(suffix, password);

        if (foundLink != null) {
            return new ApiResponse(true, foundLink.getUrl());
        } else {
            return new ApiResponse(false, "Invalid password");
        }
    }

    public Link getLink(String suffix) {
        return repo.findLinkBySuffix(suffix);
    }

    public Link getLink(String suffix, String password) {
        return repo.findLinkBySuffixAndPassword(suffix, password);
    }
}
