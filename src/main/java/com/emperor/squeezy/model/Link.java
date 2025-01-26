package com.emperor.squeezy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "links")
public class Link {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String url;
    private String suffix;
    private String password;

    public Link() {

    }

    public Link(String url, String password) {
        this.url = url;
        this.password = password;
    }

    public Link(String url, String suffix, String password) {
        this.url = url;
        this.suffix = suffix;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Link{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", suffix='" + suffix + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
