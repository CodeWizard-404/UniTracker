package com.dsi.projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Professeur;
import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.ProfRepository;

@Service
public class ProfService implements IProf{
	@Autowired
	private EtudiantRepository etdRep;
	@Autowired
	private ProfRepository profRep;

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
