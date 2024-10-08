package com.dsi.projet.services;

import java.util.List;

import com.dsi.projet.entities.Professeur;

public interface IProfService {
	public List<Professeur> getProfs();
	public Professeur addProf(Professeur p);

}