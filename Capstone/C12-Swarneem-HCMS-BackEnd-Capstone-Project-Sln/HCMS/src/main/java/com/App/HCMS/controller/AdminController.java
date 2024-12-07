package com.App.HCMS.controller;

import com.App.HCMS.entity.AdminEntity;
import com.App.HCMS.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<AdminEntity> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminEntity> getAdminById(@PathVariable String id) {
        AdminEntity adminEntity = adminService.getAdminById(id);
        return ResponseEntity.ok(adminEntity);
    }

    @PostMapping
    public ResponseEntity<AdminEntity> createAdmin(@RequestBody AdminEntity adminEntity) {
        AdminEntity createdAdmin = adminService.createAdminEntity(adminEntity);
        return ResponseEntity.ok(createdAdmin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminEntity> updateAdmin(@PathVariable String id, @RequestBody AdminEntity adminEntity) {
        AdminEntity updatedAdminEntity = adminService.updateAdminEntity(id, adminEntity);
        return ResponseEntity.ok(updatedAdminEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable String id) {
        adminService.deleteAdminEntity(id);
        return ResponseEntity.noContent().build();
    }
}
