package com.dsi.projet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.CompletionId;
import com.dsi.projet.entities.Tache;

public interface CompletionRepository extends JpaRepository<Completion,CompletionId> {
	 @Query("SELECT c.tache FROM Completion c WHERE c.etudiant.id = :idEtudiant")
	    List<Tache> findTasksByEtudiantId(@Param("idEtudiant") int idEtudiant);
}
