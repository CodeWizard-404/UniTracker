package com.dsi.projet.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.dsi.projet.entities.Classe;

public interface ClasseRepository extends JpaRepository<Classe,Integer>{
	
	 @Query("SELECT c FROM Classe c WHERE c.nom_Classe = :nomClasse")
	    Optional<Classe> findByNomClasse(@Param("nomClasse") String nomClasse);
}
