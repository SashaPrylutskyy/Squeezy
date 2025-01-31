package com.emperor.squeezy;

import com.emperor.squeezy.model.Link;
import com.emperor.squeezy.repository.LinkRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@ActiveProfiles("test")
@DataJpaTest
public class LinkRepositoryTest {

    /*@Autowired
    private LinkRepository repo;
    private static final String URL = "https://squeezy.com/";
    private static final String SUFFIX = "Hlk4sXk2q";
    private static final String PASSWORD = "";

    @BeforeEach
    void setup() {
        repo.deleteAll();
        repo.save(new Link(URL, SUFFIX, PASSWORD));
    }

    @Test
    void getLinkBySuffix() {
        Link link = repo.findLinkBySuffix(SUFFIX);
        assertNotNull(link);
    }

    @Test
    void getLinkBySuffixAndPassword() {
        Link link = repo.findLinkBySuffixAndPassword(SUFFIX, PASSWORD);
        assertNotNull(link);
    }*/

}
