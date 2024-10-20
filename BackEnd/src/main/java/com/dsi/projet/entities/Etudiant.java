package com.dsi.projet.entities;

import java.time.LocalDate;
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
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Etudiant {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id_Etudiant;
	private String nom_Etd;
	private String prenom_Etd;
	private String email_Etd;
	private String mot_de_passe_Etd;
	private String adresse_Etd;
	private boolean redoublant;
	@Temporal(TemporalType.DATE)
	private LocalDate date_de_naissance_Etd;
	private String sexe_Etd;
	public Etudiant() {
		super();
	}

	public Etudiant(int id_Etudiant, String nom_Etd, String prenom_Etd, String email_Etd, String mot_de_passe_Etd,
			String adresse_Etd, boolean redoublant, LocalDate date_de_naissance_Etd, String sexe_Etd,
			String telephone_Etd, String cin_Etd, Classe classe, List<Tache> taches, List<Groupe> groupes,
			List<Completion> completions) {
		super();
		this.id_Etudiant = id_Etudiant;
		this.nom_Etd = nom_Etd;
		this.prenom_Etd = prenom_Etd;
		this.email_Etd = email_Etd;
		this.mot_de_passe_Etd = mot_de_passe_Etd;
		this.adresse_Etd = adresse_Etd;
		this.redoublant = redoublant;
		this.date_de_naissance_Etd = date_de_naissance_Etd;
		this.sexe_Etd = sexe_Etd;
		this.telephone_Etd = telephone_Etd;
		this.cin_Etd = cin_Etd;
		this.classe = classe;
		this.taches = taches;
		this.groupes = groupes;
		this.completions = completions;
	}



	private String telephone_Etd;
	private String cin_Etd;

	@ManyToOne
	@JoinColumn(name = "id_classe")
	// @JsonIgnore
	private Classe classe;

	public List<Tache> getTaches() {
		return taches;
	}

	public void setTaches(List<Tache> taches) {
		this.taches = taches;
	}

	public List<Completion> getCompletions() {
		return completions;
	}

	public void setCompletions(List<Completion> completions) {
		this.completions = completions;
	}

	public void setId_Etudiant(int id_Etudiant) {
		this.id_Etudiant = id_Etudiant;
	}

	public void setGroupes(List<Groupe> groupes) {
		this.groupes = groupes;
	}



	@ManyToMany(mappedBy = "etudiants")
	@JsonIgnore
	private List<Tache> taches = new ArrayList<>();

	/*----------------------------------------------------------*/
	@ManyToMany
	@JoinTable(name = "groupeCreation", joinColumns = { @JoinColumn(name = "Etudiant_Id") }, inverseJoinColumns = {
			@JoinColumn(name = "groupe_id") })
	@JsonIgnore
	private List<Groupe> groupes = new ArrayList<>();
	/*----------------------------------------------------------*/

	/*-------------relationRealisation---------------------------------------------*/
	@OneToMany(mappedBy = "etudiant")
	List<Completion> completions = new ArrayList<>();
	/*----------------------------------------------------------*/

	public Etudiant(
		int id_Etudiant, String nom_Etd, String prenom_Etd, String email_Etd,String mot_de_passe_Etd, 
		Classe classe, List<Tache> taches, List<Groupe> groupes, 
		String adresse_Etd,boolean redoublant, LocalDate date_de_naissance_Etd, 
		String sexe_Etd, String telephone_Etd,String cin_Etd
		) {
		super();
		this.id_Etudiant = id_Etudiant;
		this.nom_Etd = nom_Etd;
		this.prenom_Etd = prenom_Etd;
		this.email_Etd = email_Etd;
		this.mot_de_passe_Etd = mot_de_passe_Etd;

		this.adresse_Etd = adresse_Etd;
		this.redoublant = redoublant;
		this.date_de_naissance_Etd = date_de_naissance_Etd;
		this.sexe_Etd = sexe_Etd;
		this.telephone_Etd = telephone_Etd;
		this.cin_Etd = cin_Etd;
		
		this.classe = classe;
		this.taches = taches;
		this.groupes = groupes;
	}

	@Override
	public String toString() {
		return "Etudiant [id_Etudiant=" + id_Etudiant + ", nom_Etd=" + nom_Etd + ", prenom_Etd=" + prenom_Etd
				+ ", email_Etd=" + email_Etd + ", mot_de_passe_Etd=" + mot_de_passe_Etd +  ", classe="
				+ classe + ", taches=" + taches

				+", adresse_Etd=" + adresse_Etd + ", redoublant=" + redoublant
				+ ", date_de_naissance_Etd=" + date_de_naissance_Etd + ", sexe_Etd=" + sexe_Etd + ", telephone_Etd="
				+ telephone_Etd + ", cin_Etd=" + cin_Etd  + "]";
	}

	public String getNom_Etd() {
		return nom_Etd;
	}

	public void setNom_Etd(String nom_Etd) {
		this.nom_Etd = nom_Etd;
	}

	public String getPrenom_Etd() {
		return prenom_Etd;
	}

	public void setPrenom_Etd(String prenom_Etd) {
		this.prenom_Etd = prenom_Etd;
	}

	public String getEmail_Etd() {
		return email_Etd;
	}

	public void setEmail_Etd(String email_Etd) {
		this.email_Etd = email_Etd;
	}

	public String getAdresse_Etd() {
		return adresse_Etd;
	}

	public void setAdresse_Etd(String adresse_Etd) {
		this.adresse_Etd = adresse_Etd;
	}

	public LocalDate getDate_de_naissance_Etd() {
		return date_de_naissance_Etd;
	}

	public void setDate_de_naissance_Etd(LocalDate date_de_naissance_Etd) {
		this.date_de_naissance_Etd = date_de_naissance_Etd;
	}

	public String getSexe_Etd() {
		return sexe_Etd;
	}

	public void setSexe_Etd(String sexe_Etd) {
		this.sexe_Etd = sexe_Etd;
	}

	public String getTelephone_Etd() {
		return telephone_Etd;
	}

	public void setTelephone_Etd(String telephone_Etd) {
		this.telephone_Etd = telephone_Etd;
	}

	public String getCin_Etd() {
		return cin_Etd;
	}

	public void setCin_Etd(String cin_Etd) {
		this.cin_Etd = cin_Etd;
	}

	public boolean isRedoublant() {
		return redoublant;
	}

	public void setRedoublant(boolean redoublant) {
		this.redoublant = redoublant;
	}

	public String getMot_de_passe_Etd() {
		return mot_de_passe_Etd;
	}

	public void setMot_de_passe_Etd(String mot_de_passe_Etd) {
		this.mot_de_passe_Etd = mot_de_passe_Etd;
	}


	public int getId_Etudiant() {
		return id_Etudiant;
	}




	// public String getClasse() {
	// 		if(this.classe!=null)
	// 			return classe.getNom_Classe();
	// 		else
	// 			return null;
	// }

	// public Classe getClasse() {
	// return classe;
	// }

	// public void setClasse(String Nom_Classe) {
	// 	this.classe.setNom_Classe(Nom_Classe);
	// }
    // public void setAnneeClasse(int Annee_Classe) {
    //     this.classe.setAnnee_Classe(Annee_Classe);
    // }
	// public void setNumClasse(int Num_Classe) {
	// 	this.classe.setNum_Classe(Num_Classe);
	// }


	public String getClasse() {
		return classe.getNom_Classe();
	}
    public int getAnneeClasse() {
        return classe.getAnnee_Classe();
    }
	public int getNumClasse() {
		return classe.getNum_Classe();
	}
	

	public void setClasse(Classe classe) {
		this.classe = classe;
	}
	
	public void setClasse(String nomClasse, int anneeClasse, int numClasse) {
		this.classe.setNom_Classe(nomClasse);
		this.classe.setAnnee_Classe(anneeClasse);
		this.classe.setNum_Classe(numClasse);
	}
	
	

	public List<Groupe> getGroupes() {
		return groupes;
	}

    public void setId(int id_Etudiant) {
		this.id_Etudiant = id_Etudiant;
    }

	/*
	 * 
	 * public void setGroupes(List<Groupe> groupes) {
	 * this.groupes = groupes;
	 * }
	 * 
	 */

}
