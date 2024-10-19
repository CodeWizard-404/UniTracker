package com.dsi.projet.entities;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;


@Entity
public class Groupe {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_Groupe;
	private String libelle_Groupe;
	/*---------------------------------------------------------------*/
	@ManyToMany(mappedBy = "groupes")
	private List<Etudiant> etudiants=new ArrayList<>();
	/*---------------------------------------------------------------*/
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "matiere_id") 
	private Matiere matiere;
	

	@Override
	public String toString() {
		return "Groupe [id_Groupe=" + id_Groupe + ", libelle_Groupe=" + libelle_Groupe + ", etudiants=" + etudiants
				+ ", matiere=" + matiere + "]";
	}
	public Groupe(int id_Groupe, String libelle_Groupe, List<Etudiant> etudiants, Matiere matiere) {
		super();
		this.id_Groupe = id_Groupe;
		this.libelle_Groupe = libelle_Groupe;
		this.etudiants = etudiants;
		this.matiere = matiere;
	}
	public Matiere getMatiere() {
		return matiere;
	}
	public void setMatiere(Matiere matiere) {
		this.matiere = matiere;
	}
	public int getId_Groupe() {
		return id_Groupe;
	}
	public void setId_Groupe(int id_Groupe) {
		this.id_Groupe = id_Groupe;
	}
	public String getLibelle_Groupe() {
		return libelle_Groupe;
	}
	public void setLibelle_Groupe(String libelle_Groupe) {
		this.libelle_Groupe = libelle_Groupe;
	}
	public List<Etudiant> getEtudiants() {
		return etudiants;
	}
	public void setEtudiants(List<Etudiant> etudiants) {
		this.etudiants = etudiants;
	}
	public Groupe(int id_Groupe, String libelle_Groupe, List<Etudiant> etudiants) {
		super();
		this.id_Groupe = id_Groupe;
		this.libelle_Groupe = libelle_Groupe;
		this.etudiants = etudiants;
	}
	public Groupe() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
