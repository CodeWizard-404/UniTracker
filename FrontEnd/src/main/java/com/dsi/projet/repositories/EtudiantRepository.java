package com.dsi.projet.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dsi.projet.entities.Etudiant;
@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Integer> {
	
//	Optional<Etudiant> findByCin_Etd(String cin_Etd);

	


}
