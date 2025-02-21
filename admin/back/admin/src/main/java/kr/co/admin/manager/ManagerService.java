package kr.co.admin.manager;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerService {
    @Autowired
    private ManagerRepository managerRepository;
    
    @Autowired
    private LoginlogRepository loginlogRepository;

    public Long countAllManagers(){
        return managerRepository.countAllManagers();
    }

    public Manager getManager(Long sabun){
        return managerRepository.findBySabun(sabun);
    }

    public Loginlog getLoginLog(Long sabun){
        return managerRepository.getLoginLog(sabun);
    }

    public List<Notification> getNotifications(){
        return managerRepository.getNotifications();
    }

    public Manager addManager(Manager entity){
        entity.setMdate(new Date());
        entity.setNotifications(new ArrayList<>());
        return managerRepository.save(entity);
    }

    public Loginlog logging(Long sabun, String ip){
        Manager manager = managerRepository.findBySabun(sabun);
        Loginlog log = loginlogRepository.findByManager(manager);
        log.setAccessip(ip);
        log.setManager(manager);
        log.setLdate(new Date());
        return loginlogRepository.save(log);
    }
}
