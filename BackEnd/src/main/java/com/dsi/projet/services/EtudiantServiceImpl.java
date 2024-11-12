package com.dsi.projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Classe;
import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.repositories.ClasseRepository;
import com.dsi.projet.repositories.EtudiantRepository;

@Service
public class EtudiantServiceImpl implements IEtudiantService {
	@Autowired
	private EtudiantRepository etdRep;
	
	@Autowired
	private ClasseRepository classeRepository;
	
	
	@Override
	public Etudiant addEtudiant(Etudiant e) {
		List<Etudiant> etudiants = etdRep.findAll();
		
		
		for (Etudiant etudiant : etudiants) {
			if (String.valueOf(etudiant.getEmail_Etd()).equals(e.getEmail_Etd())) {
				return null;

			}
		}
		//e.setId(0);
		return etdRep.save(e);

		// java.util.Optional<Etudiant> etudiant = etdRep.findByCin_Etd(e.getCin_Etd());
		// if (etudiant.isPresent()) {
		// return null;
		// }
		// return etdRep.save(e);
	}

	@Override
	public List<Etudiant> getAll() {
		return etdRep.findAll();
	}
	 public List<Etudiant> getEtudiantsByIdClasse(int classeId) {
	        return etdRep.findEtudiantsByClasseId(classeId);
	    }
	 
	  

	 @Override
	 public Etudiant editEtudiant(Etudiant e, int id) {
	  
	     Etudiant etudiantExistant = etdRep.findById(id)
	             .orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));

	    
	     etudiantExistant.setNom_Etd(e.getNom_Etd());
	     etudiantExistant.setPrenom_Etd(e.getPrenom_Etd());
	     etudiantExistant.setEmail_Etd(e.getEmail_Etd());
	     etudiantExistant.setMot_de_passe_Etd(e.getMot_de_passe_Etd());

	    
	        String nomClasse = e.getClasse();  
	        String anneeClasse = e.getClasse();
	        Classe classe = classeRepository.findByNomClasse(nomClasse)
	                .orElseThrow(() -> new RuntimeException("Classe non trouvée"));

	     etudiantExistant.setClasse(classe);

	 
	     return etdRep.save(etudiantExistant);
	 }


	    @Override
	    public boolean deleteEtudiant(int id) {
	    
	        if (!etdRep.existsById(id)) {
	            throw new RuntimeException("Étudiant non trouvé");
	        }
	        
	      
	        etdRep.deleteById(id);
	        return true; 
	    }

		@Override
		public Etudiant getEtudiantById(int id) {
			// TODO Auto-generated method stub
			return etdRep.findById(id).get();
		}




}
