package com.dsi.projet.services;


import java.util.List;

import com.dsi.projet.entities.Matiere;

public interface IMatiereService {
	public List<Matiere> allMatieres();
	public Matiere createMatiere(Matiere m);
	List<Matiere> getMatieresByIds(List<Integer> ids);
}
