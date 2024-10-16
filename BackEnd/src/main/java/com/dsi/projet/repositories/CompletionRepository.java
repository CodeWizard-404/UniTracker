package com.dsi.projet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi.projet.entities.Completion;

public interface CompletionRepository extends JpaRepository<Completion,Integer> {

}
