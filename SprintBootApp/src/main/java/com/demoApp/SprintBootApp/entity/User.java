package com.demoApp.SprintBootApp.entity;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="USER_ID")
    private int id;
    @Column(name="FIRST_NAME", nullable=false)
    private String fname;
    @Column(name="LAST_NAME", nullable=false)
    private String lname;
    @Column(name="EMAIL", nullable=false)
    private String email;

    public User(){

    }

    public User(int id, String fname, String lname, String email){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public String getEmail() {
        return email;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }
}
