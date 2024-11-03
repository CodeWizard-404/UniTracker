package com.dsi.projet.services;

import java.util.List;

import com.dsi.projet.entities.Notification;

public interface INotificationService {
	public void saveNotification(Notification notification);
	public List<Notification> getNotificationsByEtudiant(int idEtudiant);
}
