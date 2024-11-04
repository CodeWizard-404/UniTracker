package com.dsi.projet.services;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.Completion.ComplexteTache;

public interface ICompletion {
	public Completion Consulter(int idEtd,int idTache);
	
	public Completion markTaskAsCompleted(int tacheId, int etudiantId, boolean isCompleted);
	public Completion pickDifficulty(int tacheId, int etudiantId, ComplexteTache complexite);

}
