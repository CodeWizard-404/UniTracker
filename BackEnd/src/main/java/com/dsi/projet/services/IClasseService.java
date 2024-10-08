package com.dsi.projet.services;

import java.util.List;

import com.dsi.projet.entities.Classe;

public interface IClasseService {
	public List<Classe> allClasses();
	public Classe createClass(Classe c);
}
