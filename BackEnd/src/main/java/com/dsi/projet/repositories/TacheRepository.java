package com.dsi.projet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dsi.projet.entities.Tache;
@Repository
public interface TacheRepository extends JpaRepository<Tache, Integer>{
	 @Query("SELECT t FROM Tache t WHERE t.professeur.id_Professeur = :id_Professeur")
	 List<Tache> findByProfesseurId(@Param("id_Professeur") int id_Professeur);
}
