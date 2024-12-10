package com.App.HCMS.repository;

import com.App.HCMS.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AdminEntity, String> {
    AdminEntity findByEmail(String email);
}
