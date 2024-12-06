package com.App.HCMS.entity;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "appointments")

public class AppointmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "patient_name", nullable = false)
    private String patientName;

    @Column(name = "patient_age")
    private Integer patientAge;

    @Column(name = "patient_weight")
    private Double patientWeight;

    @Column(name = "patient_city")
    private String patientCity;

    @Column(name = "department")
    private String department;

    @Column(name = "doctor")
    private String doctor;

    @Column(name = "appointment_date")
    private LocalDate appointmentDate;

    // Constructors
    public AppointmentEntity() {
    }

    public AppointmentEntity(String patientName, Integer patientAge, Double patientWeight, String patientCity, String department, String doctor, LocalDate appointmentDate) {
        this.patientName = patientName;
        this.patientAge = patientAge;
        this.patientWeight = patientWeight;
        this.patientCity = patientCity;
        this.department = department;
        this.doctor = doctor;
        this.appointmentDate = appointmentDate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public Integer getPatientAge() {
        return patientAge;
    }

    public void setPatientAge(Integer patientAge) {
        this.patientAge = patientAge;
    }

    public Double getPatientWeight() {
        return patientWeight;
    }

    public void setPatientWeight(Double patientWeight) {
        this.patientWeight = patientWeight;
    }

    public String getPatientCity() {
        return patientCity;
    }

    public void setPatientCity(String patientCity) {
        this.patientCity = patientCity;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDate appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    // toString method for debugging
    @Override
    public String toString() {
        return "Appointment{" +
                "id=" + id +
                ", patientName='" + patientName + '\'' +
                ", patientAge=" + patientAge +
                ", patientWeight=" + patientWeight +
                ", patientCity='" + patientCity + '\'' +
                ", department='" + department + '\'' +
                ", doctor='" + doctor + '\'' +
                ", appointmentDate=" + appointmentDate +
                '}';
    }

}


