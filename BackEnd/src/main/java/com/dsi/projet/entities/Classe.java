package com.dsi.projet.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;


@Entity
public class Classe {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_Classe;
    private String libelle_Classe;

  
    @OneToMany(mappedBy = "classe")
    private List<Etudiant> etudiants = new ArrayList<>();

    @ManyToMany
    @JoinTable(
        name = "classe_matiere",
        joinColumns = {@JoinColumn(name = "classe_id")},
        inverseJoinColumns = {@JoinColumn(name = "matiere_id")}
    )
    private List<Matiere> matieres = new ArrayList<>();
	

	
	public Classe() {
		super();
		// TODO Auto-generated constructor stub
	}





	public Classe(String libelle_Classe) {
		super();
		this.libelle_Classe = libelle_Classe;
	}





	public String getLibelle_Classe() {
		return libelle_Classe;
	}





	public void setLibelle_Classe(String libelle_Classe) {
		this.libelle_Classe = libelle_Classe;
	}





	public List<Etudiant> getEtudiants() {
		return etudiants;
	}





	public void setEtudiants(List<Etudiant> etudiants) {
		this.etudiants = etudiants;
	}





	public List<Matiere> getMatieres() {
		return matieres;
	}





	public void setMatieres(List<Matiere> matieres) {
		this.matieres = matieres;
	}





	public int getId_Classe() {
		return id_Classe;
	}





	@Override
	public String toString() {
		return "Classe [id_Classe=" + id_Classe + ", libelle_Classe=" + libelle_Classe + ", etudiants=" + etudiants
				+ ", matieres=" + matieres + "]";
	}
	
	
	
	
	

}
