package com.dsi.projet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi.projet.entities.Professeur;

public interface ProfRepository extends JpaRepository<Professeur, Integer> {

}
