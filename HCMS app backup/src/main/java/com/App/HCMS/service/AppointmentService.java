package com.App.HCMS.service;

import com.App.HCMS.entity.AppointmentEntity;
import com.App.HCMS.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AppointmentService {
    int counter = 1;
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public  AppointmentService(AppointmentRepository appointmentRepository){
        this.appointmentRepository = appointmentRepository;
    }

    public List<AppointmentEntity>getAllAppointments(){
        return appointmentRepository.findAll();
    }

    public AppointmentEntity createAppointment(AppointmentEntity appointmentEntity){
        String customId = generateNextId();
        appointmentEntity.setId(customId);
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
        updatedAppointment.setId(id);
        return appointmentRepository.save(updatedAppointment);
    }

    private String generateNextId(){
        AppointmentEntity lastAppointment = appointmentRepository.findTopByOrderByIdDesc();
        if(lastAppointment != null){
            String lastId = lastAppointment.getId();
            int lastCounter = Integer.parseInt(lastId.substring(1));
            counter = lastCounter+1;
        }
        return "A"+ String.format("%04d", counter);
    }
}