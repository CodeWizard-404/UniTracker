package com.dsi.projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.repositories.EtudiantRepository;

@Service
public class EtudiantServiceImpl implements IEtudiantService {
	@Autowired
	private EtudiantRepository etdRep;

	@Override
	public Etudiant addEtudiant(Etudiant e) {
		List<Etudiant> etudiants = etdRep.findAll();
		
		for (Etudiant etudiant : etudiants) {
			if (String.valueOf(etudiant.getEmail_Etd()).equals(e.getEmail_Etd())) {
				return null;

			}
		}

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

}
