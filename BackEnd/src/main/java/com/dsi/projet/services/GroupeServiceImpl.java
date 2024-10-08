package com.dsi.projet.services;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Groupe;
import com.dsi.projet.repositories.GroupeRepository;
import com.dsi.projet.repositories.EtudiantRepository;

import com.dsi.projet.services.GroupeService;


@Service
public class GroupeServiceImpl implements GroupeService {
	@Autowired
	private GroupeRepository Repository;
	@Autowired
	private EtudiantRepository EtudiantRepository;
	
	@Override
	public Groupe addGroupe(Groupe g) {
    List<Etudiant> etudiants = new ArrayList<>();
        g.getEtudiants().forEach(e -> EtudiantRepository.findById(e.getId_Etudiant()).ifPresent(etudiant -> {
            etudiant.getGroupes().add(g);
            etudiants.add(etudiant);
        }));

        g.setEtudiants(etudiants);
        return Repository.save(g);
    }
	}
