package com.dsi.projet.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Classe;
import com.dsi.projet.entities.Matiere;
import com.dsi.projet.entities.Professeur;
import com.dsi.projet.repositories.ClasseRepository;
import com.dsi.projet.repositories.MatiereRepository;
import com.dsi.projet.repositories.ProfRepository;

@Service
public class MatiereServiceImpl implements IMatiereService {

	@Autowired
	private MatiereRepository matiereRepository;

	@Autowired
	private ProfRepository professeurRepository;

	@Autowired
	private ClasseRepository classeRepository;

	@Override
	public List<Matiere> allMatieres() {
		return matiereRepository.findAll();
	}

	@Override
	public Matiere createMatiere(Matiere m) {
		System.out.println("Matière reçue : " + m.getLibelle());

		List<Matiere> matieres = matiereRepository.findAll();
		for (Matiere matiere : matieres) {
			if ((String.valueOf(matiere.getLibelle())).equals(m.getLibelle())) {
				return null;
			}
		}

		List<Professeur> professeurs = new ArrayList<>();
		for (Professeur professeur : m.getProfesseurs()) {
			System.out.println("Professeur : " + professeur.getId_Professeur());
			Professeur professeurFromDb = professeurRepository.findById(professeur.getId_Professeur()).orElse(null);
			if (professeurFromDb != null) {
				professeurs.add(professeurFromDb);
			} else {
				professeurRepository.save(professeur);
				professeurs.add(professeur);
			}
		}

		// Même chose pour les classes
		List<Classe> classes = new ArrayList<>();
		for (Classe classe : m.getClasses()) {
			System.out.println("Classe : " + classe.getId_Classe());
			Classe classeFromDb = classeRepository.findById(classe.getId_Classe()).orElse(null);
			if (classeFromDb != null) {
				classes.add(classeFromDb);
			} else {
				classeRepository.save(classe);
				classes.add(classe);
			}
		}

		m.setProfesseurs(professeurs);
		m.setClasses(classes);
		return matiereRepository.save(m);
	}

	// List<Classe> classes = new ArrayList<>();
	// List<Etudiant> etudiants = new ArrayList<>();
	//
	// for (Classe classe : m.getClasses()) { // Itérer sur les classes associées
	// Classe classeFromDb =
	// classeRepository.findById(classe.getId_Classe()).orElse(null);
	// if (classeFromDb != null) {
	// classes.add(classeFromDb);
	//
	//
	//
	// List<Etudiant> etu = classeFromDb.getEtudiants();
	// for (Etudiant e : etu) {
	// Etudiant etudiantFromDb =
	// etudiantRepository.findById(e.getId_Etudiant()).orElse(null);
	// if (etudiantFromDb != null) {
	// etudiants.add(etudiantFromDb);
	// }else {
	// etudiantRepository.save(e);
	// etudiants.add(e);
	// }
	// }
	// }else {
	// classeRepository.save(classe);
	// classes.add(classe);
	//
	// }
	// }
	//
	//
	// m.setClasses(classes);
	//
	//
	//
	//
	// return matiereRepository.save(m);
	// }
}