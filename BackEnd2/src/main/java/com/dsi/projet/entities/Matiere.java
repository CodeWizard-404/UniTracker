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
import jakarta.persistence.ManyToOne;

@Entity
public class Matiere {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_Matiere;
	private String libelle;
	
	@ManyToOne
	@JoinColumn(name = "id_Professeur")
	private Professeur professeur;
	
	@ManyToMany
	@JoinTable(name = "suivie",joinColumns = {@JoinColumn(name="matiere_id")},inverseJoinColumns = {@JoinColumn(name="classe_id")})
	private List<Classe>classes=new ArrayList<>();
	
	public Matiere(String libelle) {
		super();
		this.libelle = libelle;
	}
	@Override
	public String toString() {
		return "Matiere [id_Matiere=" + id_Matiere + ", libelle=" + libelle + "]";
	}
	public Matiere() {
		super();
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
	
	

}
