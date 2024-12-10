package com.App.HCMS.service;

import com.App.HCMS.entity.AdminEntity;
import com.App.HCMS.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {


    private static final int MAX_FAILED_ATTEMPTS = 3;
    private static final int BLOCK_DURATION_MINUTES = 30;

    @Autowired
    private AdminRepository adminRepository;

    public List<AdminEntity> getAllAdmins() {
        return adminRepository.findAll();
    }

    public AdminEntity createAdminEntity(AdminEntity adminEntity) {
        if (!adminEntity.getPassword().equals(adminEntity.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match!");
        }
        return adminRepository.save(adminEntity);
    }


    public AdminEntity getAdminById(String id) {
        return adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found with ID: " + id));
    }

    public void deleteAdminEntity(String id) {
        adminRepository.deleteById(id);
    }

}
