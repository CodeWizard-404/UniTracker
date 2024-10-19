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

	@Autowired
	private ProfRepository professeurRepository;

	@Override
	public List<Classe> allClasses() {
		return classeRepository.findAll();
	}

	@Override
	public Classe createClass(Classe c) {
	
	    List<Classe> classes = classeRepository.findAll();
	    for (Classe classe : classes) {
	        if (classe.getAnnee_Classe() == c.getAnnee_Classe() 
	            && classe.getNum_Classe() == c.getNum_Classe()
	            && classe.getNom_Classe().equals(c.getNom_Classe())) { 
	            return null; 
	        }
	    }

	 
	    List<Integer> etudiantIds = c.getEtudiants();
	    List<Etudiant> etudiants = new ArrayList<>();
	    for (Integer etudiantId : etudiantIds) {
	        Etudiant etudiantFromDb = etudiantRepository.findById(etudiantId).orElse(null);
	        if (etudiantFromDb != null) {
	            etudiantFromDb.setClasse(c); // Lier l'étudiant à la classe
	            etudiants.add(etudiantFromDb);
	        }
	    }
	    c.setEtudiantsByIds(etudiantIds); 
	    /*---------------------------------------------------------------------------*/
	    List<Integer> matiereIds = c.getMatiereIds();
	    List<Matiere> matieres = new ArrayList<>();
	    for (Integer matiereId : matiereIds) {
	        Matiere matiereFromDb = matiereRepository.findById(matiereId).orElse(null);
	        if (matiereFromDb != null) {
	            List<Professeur> professeursFromDb = new ArrayList<>();
	            for (Professeur professeur : matiereFromDb.getProfesseurs()) {
	                Professeur profFromDb = professeurRepository.findById(professeur.getId_Professeur()).orElse(null);
	                if (profFromDb != null) {
	                    professeursFromDb.add(profFromDb);
	                }
	            }
	            matiereFromDb.setProfesseurs(professeursFromDb); 
	            matieres.add(matiereFromDb);
	        }
	    }

	    c.setMatieresByIds(matiereIds); 

	    return classeRepository.save(c); 
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

	}
