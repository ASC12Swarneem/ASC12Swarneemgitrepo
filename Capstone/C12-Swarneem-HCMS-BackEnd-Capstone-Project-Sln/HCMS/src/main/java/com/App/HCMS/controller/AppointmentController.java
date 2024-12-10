package com.App.HCMS.controller;

import java.util.List;

import com.App.HCMS.entity.AppointmentEntity;
import com.App.HCMS.repository.AppointmentRepository;
import com.App.HCMS.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {
    private int count =1;
    private AppointmentRepository appointmentRepository;
    private final AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping
    public  ResponseEntity<List<AppointmentEntity>>getAllAppointment(){
        List<AppointmentEntity> appointmentEntities = appointmentService.getAllAppointments();
        return new ResponseEntity<>(appointmentEntities, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AppointmentEntity> createAppointment(@RequestBody AppointmentEntity appointmentEntity) {
        AppointmentEntity savedAppointment = appointmentService.createAppointment(appointmentEntity);
        return new ResponseEntity<>(savedAppointment, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public AppointmentEntity updateAppointment(@PathVariable String id, @RequestBody AppointmentEntity updatedAppointment) {
        return appointmentService.updateAppointment(id, updatedAppointment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentEntity> getAppointmentById(@PathVariable String id) {
        AppointmentEntity appointment = appointmentService.getAppointmentById(id);
        if (appointment == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(appointment);
    }

    @DeleteMapping("/{id}")
    private void deleteAppointment(@PathVariable String id){
        appointmentService.deleteAppointment(id);
    }
}