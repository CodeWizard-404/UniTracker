package com.dsi.projet.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Notification {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	    private String message;

	    private LocalDateTime dateCreation;
	    
	    @ManyToOne // Relation ManyToOne avec l'entité Etudiant
	    @JoinColumn(name = "etudiant_id") // Colonne qui contient l'ID de l'étudiant dans la table notifications
	    private Etudiant etudiant;

	    private int tacheId;
	    public Notification() {}

	    public Notification(String message) {
	        this.message = message;
	        this.dateCreation = LocalDateTime.now();
	    }

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public LocalDateTime getDateCreation() {
			return dateCreation;
		}

		public void setDateCreation(LocalDateTime dateCreation) {
			this.dateCreation = dateCreation;
		}

		public Etudiant getEtudiant() {
			return etudiant;
		}

		public void setEtudiant(Etudiant etudiant) {
			this.etudiant = etudiant;
		}

		public int getTacheId() {
			return tacheId;
		}

		public void setTacheId(int tacheId) {
			this.tacheId = tacheId;
		}

		@Override
		public String toString() {
			return "Notification [id=" + id + ", message=" + message + ", dateCreation=" + dateCreation + "]";
		}

	    
}
