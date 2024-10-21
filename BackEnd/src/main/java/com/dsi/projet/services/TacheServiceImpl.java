package com.dsi.projet.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Professeur;
import com.dsi.projet.entities.Tache;
import com.dsi.projet.repositories.CompletionRepository;
import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.ProfRepository;
import com.dsi.projet.repositories.TacheRepository;

@Service
public class TacheServiceImpl implements ITacheService{
	@Autowired
	private CompletionRepository compRep;
	@Autowired
	private TacheRepository tacherep;
	@Autowired
    private EtudiantRepository etudiantRepo;
	@Autowired
    private ProfRepository profRep;

	@Override
	public Tache addTacheByProf(Tache t,int idProf) {
		List<Professeur> profs=profRep.findAll();
		for (Professeur professeur : profs) {
			if(professeur.getId_Professeur()==idProf) {
				
				t.setProfesseur(professeur);
				return tacherep.save(t);}
		}
		
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Tache assignTaskToStudents(int idTache, List<Integer> idsEtudiants) {
		 Tache tache = tacherep.findById(idTache).orElseThrow(() -> new RuntimeException("Tâche non trouvée"));
		 for (Integer idEtudiant : idsEtudiants) {
			 Etudiant etudiant = etudiantRepo.findById(idEtudiant).orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));
			 boolean isAlreadyAssigned = tache.getEtudiants().stream()
                     .anyMatch(e -> e.getId_Etudiant()==etudiant.getId_Etudiant());
					 
			 if(!isAlreadyAssigned) {
				 tache.getEtudiants().add(etudiant);
			     Tache t=tacherep.save(tache);
			     Completion c=new Completion(false,etudiant,t);
			     compRep.save(c);
			 }
			 
		}
		return tacherep.save(tache);
	}

	@Override
	public List<Tache> getAll() {
		// TODO Auto-generated method stub
		return tacherep.findAll();
	}

	@Override
	public Tache addTachebyEtudiant(Tache t, int idEtudiant) {

		List<Etudiant> etudiants=etudiantRepo.findAll();
		for (Etudiant etudiant : etudiants) {
			if(etudiant.getId_Etudiant()==idEtudiant) {
				t.getEtudiants().add(etudiant);
				Tache tache=tacherep.save(t);
				Completion c=new Completion(false,etudiant,tache);
				compRep.save(c);
				
				return tache; }
		}
		return null;
	}

	@Override
	public List<Tache> getTasksByEtudiant(int idEtudiant) {
		List<Tache> tachesByEtd= new ArrayList<>();
		Optional<Etudiant> etd=etudiantRepo.findById(idEtudiant);
		List<Tache> taches=tacherep.findAll();
		if(etd.isPresent()) {
			for (Tache tache : taches) {
			if(tache.getEtudiants().contains(etd.get())) {tachesByEtd.add(tache);}
		}
			return tachesByEtd;
			}
		else {return null;}
	}


	@Override
	public List<Tache> getTasksByProf(int id_Professeur) {
		Optional<Professeur> p= profRep.findById(id_Professeur);
		if(p.isPresent()) {
	        return tacherep.findByProfesseurId(id_Professeur);
		}
		return null;
	}

	@Override
	public boolean deleteTaskByProf(int idTache, int idProf) {
	    Optional<Tache> tacheOpt = tacherep.findById(idTache);
	    List<Completion> c=compRep.findAll();
	    
	    if (tacheOpt.isPresent() && tacheOpt.get().getProfesseur().getId_Professeur() == idProf) {
	    	for (Completion completion : c) {
				if(completion.getTache()==idTache) {compRep.delete(completion);}
			}
	        tacherep.deleteById(idTache);
	        return true; 
	    }
	    
	    return false; 
	}

	@Override
	public Tache updateTaskByProf(int idTache, Tache tache) {
	    Optional<Tache> tacheExistante = tacherep.findById(idTache);
	    if (tacheExistante.isPresent()) {
	        Tache t = tacheExistante.get();
	        t.setTitre(tache.getTitre()); 
            t.setDescription(tache.getDescription()); 
            t.setDateLimite(tache.getDateLimite());
            return tacherep.save(t);
	        }
		return null;
	}

	@Override
	public Tache getTaskById(int idTask) {
		Optional<Tache> t =tacherep.findById(idTask);
		if(t.isPresent()) {
			return t.get();
		}
		return null;
	}


}

