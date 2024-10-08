package com.dsi.projet.services;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Professeur;

import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.ProfRepository;

@Service
public class AdminService implements IAdmin{
	
	@Autowired
	private EtudiantRepository etdRep;
	@Autowired
	private ProfRepository profRep;
	
	@Override
	public Etudiant addEtudiant(Etudiant e) {
		// TODO Auto-generated method stub
		List <Etudiant> etudiants=etdRep.findAll();
		for (Etudiant etudiant : etudiants) {
			if(String.valueOf(etudiant.getCin_Etd()).equals(e.getCin_Etd())) {
				return null;
				
			}
		}
		
		return etdRep.save(e);
//		java.util.Optional<Etudiant> etudiant = etdRep.findByCin_Etd(e.getCin_Etd());
//		if (etudiant.isPresent()) {
//	        return null;
//	    }
//		return etdRep.save(e);
	}
	@Override
	public List<Etudiant> getAll() {
		// TODO Auto-generated method stub
		return etdRep.findAll();
	}
	@Override
	public List<Professeur> getProfs() {
		
		// TODO Auto-generated method stub
		return profRep.findAll();
	}
	@Override
	public Professeur addProf(Professeur p) {
		List <Professeur> profs=profRep.findAll();
		for (Professeur professeur : profs) {
			if(String.valueOf(professeur.getCin_Prof()).equals(p.getCin_Prof())) {
				return null;
				
			}
		}
		// TODO Auto-generated method stub
		return profRep.save(p);
	}
	

}
