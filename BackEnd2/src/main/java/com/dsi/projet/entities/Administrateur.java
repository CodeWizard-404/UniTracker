package com.dsi.projet.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Administrateur {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_Admin;

}
