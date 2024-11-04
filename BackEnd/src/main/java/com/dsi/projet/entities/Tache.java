package com.dsi.projet.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Tache {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_Tache;
	private String titre;
	private String description;
	private LocalDateTime dateLimite;
	
	
	@ManyToOne
	@JoinColumn(name = "id_Professeur")
	private Professeur professeur;
	
	
	//realisation
	@ManyToMany
	@JoinTable(name = "completion",joinColumns = {@JoinColumn(name="tache_id")},inverseJoinColumns = {@JoinColumn(name="etudiant_id")})
	@JsonIgnore
	private List<Etudiant> etudiants=new ArrayList<>();
	
	
	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "id_Matiere") private Matiere matiere;
	 */
	
	/*-------------relationRealisation---------------------------------------------*/
	@OneToMany(mappedBy = "tache")
	List<Completion>completions=new ArrayList<>();
	/*----------------------------------------------------------*/
	
	public Tache() {
		super();
		// TODO Auto-generated constructor stub
	}
	/*
	 * public Matiere getMatiere() { return matiere; }
	 * 
	 * public void setMatiere(Matiere matiere) { this.matiere = matiere; }
	 */

//	public List<Integer> getCompletions() {
//		 List<Integer> compsIds = new ArrayList<>();
//		 for (Completion c : completions) {
//			 compsIds.add(c.getId_Completion());
//		}
//		return compsIds;
//	}
	
	public List<Completion> getCompletions() {
		return completions;
	}
	
	

	public void setCompletions(List<Completion> completions) {
		this.completions = completions;
	}

	public void setId_Tache(int id_Tache) {
		this.id_Tache = id_Tache;
	}

	public Tache(int id_Tache, String titre, String description, LocalDateTime dateLimite, Professeur professeur,
			List<Etudiant> etudiants, Matiere matiere, List<Completion> completions) {
		super();
		this.id_Tache = id_Tache;
		this.titre = titre;
		this.description = description;
		this.dateLimite = dateLimite;
		this.professeur = professeur;
		this.etudiants = etudiants;

		this.completions = completions;
	}

	public Tache(String titre, String description, LocalDateTime dateLimite) {
		super();
		this.titre = titre;
		this.description = description;
		this.dateLimite = dateLimite;
		//this.marquer=false;
	}
	
	
	@Override
	public String toString() {
		return "Tache [id_Tache=" + id_Tache + ", titre=" + titre + ", description=" + description + ", dateLimite="
				+ dateLimite + ", professeur=" + professeur + ", etudiants=" + etudiants 
				+ ", completions=" + completions + "]";
	}

	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDateTime getDateLimite() {
		return dateLimite;
	}
	public void setDateLimite(LocalDateTime dateLimite) {
		this.dateLimite = dateLimite;
	}
	
	public int getId_Tache() {
		return id_Tache;
	}
    ////pas fait au debut
	public Professeur getProfesseur() {
		return professeur;
	}

	public void setProfesseur(Professeur professeur) {
		this.professeur = professeur;
	}

	

	public List<Etudiant> getEtudiants() {
		return etudiants;
	}

	public void setEtudiants(List<Etudiant> etudiants) {
		this.etudiants = etudiants;
	}

//	public boolean isMarquer() {
//		return marquer;
//	}
//
//	public void setMarquer(boolean marquer) {
//		this.marquer = marquer;
//	}
	
		
	

}
