package com.emperor.squeezy.repository;

import com.emperor.squeezy.model.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkRepository extends JpaRepository<Link, Long> {

    Link findLinkBySuffix(String suffix);

    Link findLinkBySuffixAndPassword(String suffix, String password);

}
