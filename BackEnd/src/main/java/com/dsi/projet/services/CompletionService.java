package com.dsi.projet.services;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.Completion.ComplexteTache;
import com.dsi.projet.entities.CompletionId;
import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Tache;
import com.dsi.projet.repositories.CompletionRepository;
import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.TacheRepository;

@Service
public class CompletionService implements ICompletion{
	@Autowired
	private CompletionRepository comRep;
	
	@Autowired
	private EtudiantRepository etdRep;
	@Autowired
	private TacheRepository tacheRepo;

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
		/////
		Tache tache = tacheRepo.findById(tacheId)
					        .orElseThrow(() -> new RuntimeException("tache non trouvée"));
		Optional<Tache> tacheP=tacheRepo.findById((Integer) tache.getTachePrincipaleId());
		if(tacheP.isPresent()) {
		List<Completion>completions=tacheP.get().getCompletions();
		int p=0;
		for (Completion c : completions) {
			if(c.getEtudiant()==etudiantId && c.isMarquer()) {p++;}
		    }
		 CompletionId idCompletionP = new CompletionId(tacheId,(int) tache.getTachePrincipaleId());
		 Completion completionP = comRep.findById(idCompletion)
			        .orElseThrow(() -> new RuntimeException("Réalisation non trouvée"));
		 completionP.setProgression(p);
		// if(p>)
		}
		
				 ////
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

	public List<String> getRappelByEtudiant(int id_etd) {
	    List<Tache> taches = comRep.findTasksByEtudiantId(id_etd); 
	    List<String> rappels = new ArrayList<>();
	    for (Tache tache : taches) {
	        String rappel = notifierSiDateProche(tache);  
	        if (rappel != null) {
	            rappels.add(rappel);
	        }
	    }
	    return rappels.isEmpty() ? null : rappels; 
	}

	public String notifierSiDateProche(Tache tache) {
	    LocalDate aujourdHui = LocalDate.now();
	    LocalDate dateLimite = tache.getDateLimite().toLocalDate();
	    long joursRestants = ChronoUnit.DAYS.between(aujourdHui, dateLimite);
	    
	    if (joursRestants <= 2 && joursRestants > 0) { //jours restants pour la fin de la tâche 1 ou 2 jours
	        return "La tâche '" + tache.getTitre() + "' arrive à échéance dans " + joursRestants + " jour(s).";
	    }
	    return null;
	}

	@Override
	public Completion addComment(int tacheId, int etudiantId,String comment) {
		CompletionId idCompletion = new CompletionId(tacheId, etudiantId);
		Optional<Completion> c = comRep.findById(idCompletion);
		if(c.isPresent()) {
			//if(c.get().getCommentaires()==null) {
				List<String> comments=c.get().getCommentaires();
				if(comments==null) {comments=new ArrayList<>();}
				comments.add(comment);	
				c.get().setCommentaires(comments);
			
			
			
		    return comRep.save(c.get());
		}
		return null;
	}
	
}
