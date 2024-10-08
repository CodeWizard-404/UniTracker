package com.dsi.projet.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Classe {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_Classe;
	private String libelle_Classe;
	
	@OneToMany(mappedBy = "classe")
	private List<Etudiant> etudiants=new ArrayList<>();
	
	@ManyToMany(mappedBy = "classes")
	private List<Matiere> matieres=new ArrayList<>();
	
	public Classe(String libelle_Classe) {
		super();
		this.libelle_Classe = libelle_Classe;
	}
	

}
