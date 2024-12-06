package com.App.HCMS.service;

import com.App.HCMS.entity.AdminEntity;
import com.App.HCMS.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

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

    public AdminEntity updateAdminEntity(Long id, AdminEntity updatedAdminEntity) {
        AdminEntity existingAdminEntity = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found!"));

        existingAdminEntity.setFirstName(updatedAdminEntity.getFirstName());
        existingAdminEntity.setLastName(updatedAdminEntity.getLastName());
        existingAdminEntity.setEmail(updatedAdminEntity.getEmail());
        existingAdminEntity.setPhoneNo(updatedAdminEntity.getPhoneNo());
        existingAdminEntity.setPassword(updatedAdminEntity.getPassword());
        return adminRepository.save(existingAdminEntity);
    }

    public AdminEntity getAdminById(Long id) {
        return adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found with ID: " + id));
    }


    public void deleteAdminEntity(Long id) {

    }

}
