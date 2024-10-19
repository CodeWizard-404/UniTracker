package com.dsi.projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Professeur;
import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.ProfRepository;

@Service
public class ProfServiceImpl implements IProfService{
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
		// TODO Auto-generated method stub
		return profRep.save(p);
	}

}
