package com.dsi.projet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dsi.projet.entities.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long>{
    @Query("SELECT n FROM Notification n WHERE n.etudiant.id = ?1")
    List<Notification> findByEtudiant_Id(int idEtudiant); 
}
