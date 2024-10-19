package com.dsi.projet.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Classe;
import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Matiere;
import com.dsi.projet.entities.Professeur;
import com.dsi.projet.repositories.ClasseRepository;
import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.MatiereRepository;
import com.dsi.projet.repositories.ProfRepository;

@Service
public class ClasseServiceImpl implements IClasseService {

	@Autowired
	private ClasseRepository classeRepository;

	@Autowired
	private EtudiantRepository etudiantRepository;

	@Autowired
	private MatiereRepository matiereRepository;

	

	@Override
	public List<Classe> allClasses() {
		return classeRepository.findAll();
	}

	@Override
	public Classe createClass(Classe c) {
	    if (classeExistente(c)) {
	        return null; 
	    }
	    c.setEtudiants(c.getEtudiants()); 
	    c.setMatieres(c.getMatieres()); 
	    Classe savedClass = classeRepository.save(c);
	    for (Integer etudiantId : savedClass.getEtudiants()) {
	        etudiantRepository.findById(etudiantId).ifPresent(etudiant -> {
	            etudiant.setClasse(savedClass); 
	            etudiantRepository.save(etudiant);
	        });
	    }
	    for (Integer matiereId : savedClass.getMatieres()) {
	        matiereRepository.findById(matiereId).ifPresent(matiere -> {
	            matiere.getClasses().add(savedClass); 
	            matiereRepository.save(matiere);
	        });
	    }

	    return savedClass; 
	}

	private boolean classeExistente(Classe c) {

	    return classeRepository.findAll().stream().anyMatch(classe ->
	            classe.getAnnee_Classe() == c.getAnnee_Classe() &&
	            classe.getNum_Classe() == c.getNum_Classe() &&
	            classe.getNom_Classe().equals(c.getNom_Classe()));
	}

		
		
		
}
		
		
		
		
		
		
		
		
		
		
		
		//
		// List<Matiere> matieres = new ArrayList<>();
		//
		// for (Matiere matiere : c.getMatieres()) {
		// matieres.add(matiereRepository.findById(matiere.getId_Matiere()).orElse(null));
		// }
		// c.setMatieres(matieres);
		//
		//
		//
		// // Récupérer et associer les professeurs à partir des matières
		// List<Professeur> professeurs = new ArrayList<>();
		// for (Matiere matiere : matieres) {
		// List<Professeur> professeurFromDb = matiere.getProfesseurs(); // Récupérer
		// les professeurs associés à la matière
		// for (Professeur p : professeurFromDb) {
		// Professeur pro =
		// professeurRepository.findById(p.getId_Professeur()).orElse(null);
		// if (pro != null) {
		// professeurs.add(pro);
		// }
		// }
		// }
		//
		//
		//
		// //c.setMatieres(c.getMatieres());
		//
		// return classeRepository.save(c);

	
