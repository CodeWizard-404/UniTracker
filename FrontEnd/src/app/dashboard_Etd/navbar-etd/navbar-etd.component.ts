import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from 'src/app/classes/notification';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-navbar-etd',
  templateUrl: './navbar-etd.component.html',
  styleUrls: ['./navbar-etd.component.css']
})
export class NavbarEtdComponent implements OnInit{
  notifications: Notification[] = [];
  idEtudiant!: number;
  hasNewNotifications: boolean = false;

  constructor(private route:ActivatedRoute, private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
    this.getNotifications();
  }


  getNotifications(): void {
    this.notificationService.getNotificationsByEtudiant(this.idEtudiant).subscribe(
      (data) => {
        this.notifications = data;
        const readNotifications = JSON.parse(localStorage.getItem('readNotifications') || '[]');
      
      // Mettre à jour la classe pour chaque notification
      this.notifications.forEach(notification => {
        notification.read = readNotifications.includes(notification.id); // Ici, j'utilise une propriété fictive 'read'
      });
      this.updateNewNotificationsCount();
      },
      error => {
        console.error('Erreur lors de la récupération des notifications', error);
      }
    );
    
  }
  markAsRead(notification: Notification): void {
    const readNotifications = JSON.parse(localStorage.getItem('readNotifications') || '[]');
  
    if (!readNotifications.includes(notification.id)) {
      readNotifications.push(notification.id);
      localStorage.setItem('readNotifications', JSON.stringify(readNotifications));
    }
    
    // Marquer la notification comme lue dans l'interface utilisateur
    notification.read = true;
    this.updateNewNotificationsCount();
  }


  updateNewNotificationsCount(): void {
    this.hasNewNotifications = this.notifications.some(notification => !notification.read);
  }
}
