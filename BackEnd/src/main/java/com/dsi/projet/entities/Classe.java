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
	// @JsonIgnore
	private List<Etudiant> etudiants = new ArrayList<>();

	@ManyToMany
	@JoinTable(name = "classe_matiere", joinColumns = { @JoinColumn(name = "classe_id") }, inverseJoinColumns = {
			@JoinColumn(name = "matiere_id") })
	private List<Matiere> matieres = new ArrayList<>();

	public Classe() {
		super();
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

	
	public List<Integer> getEtudiants() {
        List<Integer> etudiantIds = new ArrayList<>();
        for (Etudiant etudiant : etudiants) {
            etudiantIds.add(etudiant.getId_Etudiant());
        }
        return etudiantIds;
    }

	public void setEtudiants(List<Integer> etudiantIds) {
        this.etudiants = new ArrayList<>();
        for (Integer id : etudiantIds) {
            Etudiant etudiant = new Etudiant();
            etudiant.setId_Etudiant(id);
            this.etudiants.add(etudiant);
        }
    }

	public List<Integer> getMatieres() {
	    List<Integer> matiereIds = new ArrayList<>();
	    if (matieres != null) {
	        for (Matiere matiere : matieres) {
	            matiereIds.add(matiere.getId_Matiere());
	        }
	    }
	    return matiereIds;
	}


	public Classe(int id_Classe, int num_Classe, String nom_Classe, int annee_Classe, List<Etudiant> etudiants,
			List<Matiere> matieres) {
		super();
		this.id_Classe = id_Classe;
		this.num_Classe = num_Classe;
		this.nom_Classe = nom_Classe;
		this.annee_Classe = annee_Classe;
		this.etudiants = etudiants;
		this.matieres = matieres;
	}

	public void setMatieresByIds(List<Integer> matiereIds) {
	    this.matieres = new ArrayList<>();
	    for (Integer id : matiereIds) {
	        Matiere matiere = new Matiere(); // Créer un nouvel objet Matiere
	        matiere.setId_Matiere(id); // Définir uniquement l'ID
	        this.matieres.add(matiere); // Ajouter à la liste
	    }
	}
	public void setMatieres(List<Matiere> matieres) {
	    this.matieres = matieres; // Assurez-vous d'avoir un attribut 'matieres' de type List<Matiere>
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
