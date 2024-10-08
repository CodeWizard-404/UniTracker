package com.dsi.projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Professeur;
import com.dsi.projet.services.IAdmin;

@RestController
public class AdminController {
	@Autowired
	private IAdmin adminService;
	
	
//	@GetMapping("/etd")
//	public List<Etudiant> getAll(){
//	return adminService.getAll();}
//	
//	
//	@PostMapping("/etd")
//	public Etudiant addEtudiant(@RequestBody Etudiant e){
//	return adminService.addEtudiant(e);	}
	
//	@GetMapping("/profs")
//	public List<Professeur> getProfs(){
//	return adminService.getProfs();}
//	
//	
//	@PostMapping("/profs")
//	public Professeur addProf(@RequestBody Professeur p){
//	return adminService.addProf(p);
//}

}
