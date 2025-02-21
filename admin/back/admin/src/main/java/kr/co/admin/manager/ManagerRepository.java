package kr.co.admin.manager;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long>{
    @Query("SELECT m.loginlog FROM Manager m WHERE m.sabun = :sabun")
    Loginlog getLoginLog(@Param("sabun") Long sabun);

    @Query("SELECT m.notifications FROM Manager m")
    List<Notification> getNotifications();

    Manager findBySabun(Long sabun);

    @Query("SELECT COUNT(m) FROM Manager m")
    Long countAllManagers();
}
