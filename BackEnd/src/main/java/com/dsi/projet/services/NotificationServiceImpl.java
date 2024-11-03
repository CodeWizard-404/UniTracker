package com.dsi.projet.services;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Notification;
import com.dsi.projet.entities.Tache;
import com.dsi.projet.repositories.CompletionRepository;
import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.NotificationRepository;
import com.dsi.projet.repositories.TacheRepository;

@Service
public class NotificationServiceImpl implements INotificationService{
	@Autowired
	private NotificationRepository notificationRepository;
	
	@Autowired
	private TacheRepository tacheRepository;
	
	@Autowired
	private EtudiantRepository etudiantRepository;
	@Autowired 
	private CompletionRepository completionRepository;
    
	@Scheduled(cron = "0 * * * * ?")  // Exécute chaque minute
    public void verifierDatesLimites() {
		
	    List<Etudiant> etudiants = etudiantRepository.findAll();
        LocalDate aujourdHui = LocalDate.now();
        
        // Rechercher les tâches dont la date limite est proche pour chaque etudiant
        for (Etudiant etudiant : etudiants) {
            List<Tache> taches = completionRepository.findTasksByEtudiantId(etudiant.getId_Etudiant());
            for (Tache tache : taches) {
            LocalDate dateLimite = tache.getDateLimite().toLocalDate();
            long joursRestants = ChronoUnit.DAYS.between(aujourdHui, dateLimite);
            System.out.println(joursRestants);
            if (joursRestants <=2 && joursRestants>0 ) {  // Notification 1 ou 2 jours avant la date limite
            	if (!notificationExistsForTask(tache.getTitre(),etudiant.getId_Etudiant())) { //eviter la répetition des notifications
                Notification notification = new Notification("La tâche " + tache.getTitre() +
                " arrive à échéance dans " + joursRestants + " jour(s)");
                notification.setEtudiant(etudiant);
                saveNotification(notification);
            }}
        }
            }
    }
	private boolean notificationExistsForTask(String titre,int idetud) {
	    List<Notification> notifications = notificationRepository.findAll();
	    for (Notification notification : notifications) {
	        if (notification.getMessage().contains("La tâche " + titre) && notification.getEtudiant().getId_Etudiant()==idetud) {
	            return true; 
	        }
	    }
	    return false; 
	}
	public void saveNotification(Notification notification) {
        notificationRepository.save(notification);
    }

	@Override
	
	public List<Notification> getNotificationsByEtudiant(int idEtudiant) {
	    return notificationRepository.findByEtudiant_Id(idEtudiant);}
	
}
