package com.dsi.projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dsi.projet.entities.Matiere;
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
	

	    Matiere savedMatiere = matiereRepository.save(m);
	    
	    // Associate Professors
	    if (m.getProfesseurs() != null) {
	        for (Integer profId : m.getProfesseurs()) {
	            professeurRepository.findById(profId).ifPresent(professeur -> {
	                professeur.getLesMatieres().add(savedMatiere); 
	                professeurRepository.save(professeur);
	            });
	        }
	    }

	  

	    return savedMatiere; 
	}


}