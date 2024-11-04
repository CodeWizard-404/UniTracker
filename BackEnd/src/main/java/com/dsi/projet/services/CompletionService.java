package com.dsi.projet.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.Completion.ComplexteTache;
import com.dsi.projet.entities.CompletionId;
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
	public Completion markTaskAsCompleted(int tacheId, int etudiantId, boolean isCompleted) {
		 CompletionId idCompletion = new CompletionId(tacheId, etudiantId);
		 Completion completion = comRep.findById(idCompletion)
			        .orElseThrow(() -> new RuntimeException("Réalisation non trouvée"));
		 completion.setMarquer(isCompleted);

		    // Save the updated Completion entity back to the database
		    return comRep.save(completion);
		
	}

	@Override
	public Completion pickDifficulty(int tacheId, int etudiantId, ComplexteTache complexite) {
		CompletionId idCompletion = new CompletionId(tacheId, etudiantId);
		Optional<Completion> c = comRep.findById(idCompletion);
		if(c.isPresent()) {
			c.get().setComplexite(complexite);
			
	    return comRep.save(c.get());}
		else return null;
	
	}
}
