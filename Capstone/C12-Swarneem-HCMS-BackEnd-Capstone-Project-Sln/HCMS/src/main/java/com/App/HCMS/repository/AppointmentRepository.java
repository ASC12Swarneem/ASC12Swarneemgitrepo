package com.App.HCMS.repository;

import com.App.HCMS.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, Integer> {
}
