package com.dsi.projet.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi.projet.entities.Etudiant;

public interface EtudiantRepository extends JpaRepository<Etudiant, Integer> {
	
//	Optional<Etudiant> findByCin_Etd(String cin_Etd);

	


}
