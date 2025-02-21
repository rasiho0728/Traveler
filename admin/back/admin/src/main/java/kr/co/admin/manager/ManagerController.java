package kr.co.admin.manager;

import java.time.LocalDate;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/manager")
public class ManagerController {
    @Autowired
    private ManagerService managerService;

    @GetMapping("/count")
    public Long countAllManagers() {
        return managerService.countAllManagers();
    }

    @GetMapping("/{sabun}")
    public Manager getManager(@PathVariable("sabun") Long sabun) {
        return managerService.getManager(sabun);
    }

    @PostMapping
    public ResponseEntity<?> addManager(@RequestBody Manager entity) {
        managerService.addManager(entity);
        return ResponseEntity.ok(entity);
    }

    @PostMapping("logging/{sabun}")
    public ResponseEntity<?> addManager(@PathVariable("sabun") Long sabun, HttpServletRequest request) {
        String remoteIp = request.getRemoteAddr();
        return ResponseEntity.ok(managerService.logging(sabun, remoteIp));
    }
    
    
}
