package com.app.hcms.repository;

import com.app.hcms.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, String> {
    AppointmentEntity findTopByOrderByIdDesc();
}
