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
public class Classe {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_Classe;

    private int num_Classe;
    private String nom_Classe;
    private int annee_Classe;

  
    @OneToMany(mappedBy = "classe")
    //@JsonIgnore
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










	public Classe(int num_Classe, String nom_Classe, int annee_Classe) {
		super();
		this.num_Classe = num_Classe;
		this.nom_Classe = nom_Classe;
		this.annee_Classe = annee_Classe;
	}










	





	public int getNum_Classe() {
		return num_Classe;
	}










	public void setNum_Classe(int num_Classe) {
		this.num_Classe = num_Classe;
	}










	public String getNom_Classe() {
		return nom_Classe;
	}










	public void setNom_Classe(String nom_Classe) {
		this.nom_Classe = nom_Classe;
	}










	public int getAnnee_Classe() {
		return annee_Classe;
	}










	public void setAnnee_Classe(int annee_Classe) {
		this.annee_Classe = annee_Classe;
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
		return "Classe [id_Classe=" + id_Classe + ", num_Classe=" + num_Classe + ", nom_Classe=" + nom_Classe
				+ ", annee_Classe=" + annee_Classe + ", etudiants=" + etudiants + ", matieres=" + matieres + "]";
	}
	
	

}
