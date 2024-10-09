package com.dsi.projet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dsi.projet.entities.Tache;
@Repository
public interface TacheRepository extends JpaRepository<Tache, Integer>{

}
