package kr.co.admin.manager;

import org.springframework.data.jpa.repository.JpaRepository;


public interface LoginlogRepository extends JpaRepository<Loginlog, Long>{
    Loginlog findByManager(Manager manager);
}
