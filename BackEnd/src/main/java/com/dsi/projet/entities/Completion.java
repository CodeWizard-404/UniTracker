package com.dsi.projet.entities;



import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class Completion {
	@EmbeddedId
//	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	private CompletionId id_Completion;
	@Column(nullable = false, columnDefinition = "boolean default false")
	private boolean marquer=false;
	public enum ComplexteTache{
		Easy,
		Medium,
		Hard
	}
	private ComplexteTache complexite;

	@ManyToOne
	@MapsId("etudiant_id") // Mappe l'ID composite à l'association
    @JoinColumn(name = "etudiant_id", insertable = false, updatable = false) // Désactiver insertable et updatable
	//@JoinColumn(name = "etudiant_id")
	//@JsonIgnore
	private Etudiant etudiant;
	
	@ManyToOne
	@MapsId("tache_id") // Mappe l'ID composite à l'association
    @JoinColumn(name = "tache_id", insertable = false, updatable = false) // Désactiver insertable et updatable
	//@JoinColumn(name = "tache_id")
	//@JsonIgnore
	private Tache tache;

	public Completion() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Completion(boolean marquer, Etudiant etudiant, Tache tache) {
		super();
		this.marquer = marquer;
		this.etudiant = etudiant;
		this.tache = tache;
	}

	public boolean isMarquer() {
		return marquer;
	}

	public void setMarquer(boolean marquer) {
		this.marquer = marquer;
	}

	public Integer getEtudiant() {
		
		return etudiant.getId_Etudiant();
	}

	public void setEtudiant(Etudiant etudiant) {
		this.etudiant = etudiant;
	}

	public Integer getTache() {
		return tache.getId_Tache();
	}

	public void setTache(Tache tache) {
		this.tache = tache;
	}

	public CompletionId getId_Completion() {
		return id_Completion;
	}
	
	public ComplexteTache getComplexite() {
		return complexite;
	}
	public void setComplexite(ComplexteTache complexite) {
		this.complexite = complexite;
	}
	
	
}
