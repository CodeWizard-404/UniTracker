package com.dsi.projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.projet.entities.Notification;
import com.dsi.projet.services.INotificationService;
import com.dsi.projet.services.NotificationServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NotificationController {
	@Autowired
	private NotificationServiceImpl notificationService;
	

    @GetMapping("/notifications/{idEtudiant}")
    public List<Notification> getNotificationsByEtudiant(@PathVariable int idEtudiant) {
        return notificationService.getNotificationsByEtudiant(idEtudiant);
    }
}
