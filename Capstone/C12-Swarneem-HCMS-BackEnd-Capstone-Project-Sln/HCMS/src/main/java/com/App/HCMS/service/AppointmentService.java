package com.App.HCMS.service;

import com.App.HCMS.entity.AppointmentEntity;
import com.App.HCMS.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public  AppointmentService(AppointmentRepository appointmentRepository){
        this.appointmentRepository = appointmentRepository;
    }

    public List<AppointmentEntity>getAllUser(){
        return appointmentRepository.findAll();
    }

    public AppointmentEntity createAppointment(AppointmentEntity appointmentEntity){
        return appointmentRepository.save(appointmentEntity);
    }

    public void deleteAppointment(String id){
        appointmentRepository.deleteById(id);
    }

    public AppointmentEntity getAppointmentById(String appointmentId) {
        return appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Match not found with id: " + appointmentId));
    }

    public AppointmentEntity updateAppointment(String id, AppointmentEntity updatedAppointment) {
        updatedAppointment.setId(id); // Ensure the ID is set
        return appointmentRepository.save(updatedAppointment); // Save and update the match
    }

//    public List<AppointmentEntity> searchAppointment(String query) {
//        return appointmentRepository.findByNameContainingIgnoreCase(query);
//    }
}
