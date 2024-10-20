package com.dsi.projet.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.Completion.ComplexteTache;
import com.dsi.projet.repositories.CompletionRepository;

@Service
public class CompletionService implements ICompletion{
	@Autowired
	private CompletionRepository comRep;

	@Override
	public Completion Consulter(int idEtd, int idTache) {
		List<Completion>completions=comRep.findAll();
		for (Completion completion : completions) {
			if(completion.getEtudiant()==idEtd)
				if(completion.getTache()==idTache)
					return completion;
		}
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Completion markTaskAsCompleted(int idCompletion, boolean isCompleted) {
		Completion c = comRep.findById(idCompletion).orElseThrow(() -> new RuntimeException("realisation non trouvée"));
		c.setMarquer(isCompleted);
		return comRep.save(c);

//	    Tache tache = comRep.findById(idTache)
//	            .orElseThrow(() -> new RuntimeException("Tâche non trouvée"));
//
//	    tache.setMarquer(isCompleted);  
//	    return tacherep.save(tache);  
//	}
		// TODO Auto-generated method stub
		//return null;
	}

	@Override
	public Completion pickDifficulty(int idCompletion, ComplexteTache complexite) {
		Optional<Completion> c = comRep.findById(idCompletion);
		if(c.isPresent()) {
			c.get().setComplexite(complexite);
	    return comRep.save(c.get());}
		else return null;
	
	}

}
