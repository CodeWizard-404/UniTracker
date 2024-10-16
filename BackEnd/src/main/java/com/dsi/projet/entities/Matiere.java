package com.dsi.projet.entities;

import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Matiere {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_Matiere;
	private String libelle;
	private String semestre;
	
	@ManyToMany
	@JoinTable(name = "matiere_professeur",joinColumns = {@JoinColumn(name="matiere_id")},inverseJoinColumns = {@JoinColumn(name="professeur_id")})
	private List<Professeur> professeurs=new ArrayList<>();
	
	
	@ManyToMany(mappedBy = "matieres")
	private List<Classe> classes=new ArrayList<>();
	
	@OneToMany(mappedBy = "matiere")
	private List<Tache> taches=new ArrayList<>();
	
	
	


	public Matiere(String libelle, String semestre) {
		super();
		this.libelle = libelle;
		this.semestre = semestre;
	}

	@Override
	public String toString() {
		return "Matiere [id_Matiere=" + id_Matiere + ", libelle=" + libelle + ", professeurs=" + professeurs
				+ ", classes=" + classes + "]";
	}

	public Matiere() {
		super();
		this.professeurs = new ArrayList<>();
	    this.classes = new ArrayList<>();
		// TODO Auto-generated constructor stub
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public int getId_Matiere() {
		return id_Matiere;
	}
	


	public List<Professeur> getProfesseurs() {
		return professeurs;
	}
	public void setProfesseurs(List<Professeur> professeurs) {
		this.professeurs = professeurs;
	}
	public List<Classe> getClasses() {
		return classes;
	}
	
	public void setClasses(List<Classe> classes) {
		this.classes = classes;
	}

	public String getSemestre() {
		return semestre;
	}

	public void setSemestre(String semestre) {
		this.semestre = semestre;
	}
	
	

}
