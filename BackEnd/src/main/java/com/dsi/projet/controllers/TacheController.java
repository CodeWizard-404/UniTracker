package com.dsi.projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Tache;
import com.dsi.projet.services.ITacheService;

@RestController
@CrossOrigin("http://localhost:4200")
public class TacheController {
	@Autowired
	private ITacheService tacheService;
	
	@PostMapping("/createTaskByProf")
	public Tache CreateTache(@RequestParam int idProf,@RequestBody Tache tache) {
		return this.tacheService.addTacheByProf(tache, idProf);
	}
	
	@PostMapping("/createTaskByEtdudiant")
	public Tache CreateTacheByEtdudiant(@RequestParam int idEtudiant,@RequestBody Tache tache) {
		return this.tacheService.addTachebyEtudiant(tache, idEtudiant);
	}
	

	@PostMapping("/task/assign")
	public ResponseEntity<?> assignTask(@RequestParam int idTache, @RequestBody List<Integer> idsEtudiants) {
	    Tache tache = tacheService.assignTaskToStudents(idTache, idsEtudiants);
	    return ResponseEntity.ok(tache);
	}
	
	@GetMapping("/tasks")
	public List<Tache> getAll(){
	return tacheService.getAll();}
	
	@GetMapping("/tasksByEtudiant")
	public List<Tache> getTasksByEtudiant(@RequestParam int idEtd){
	return tacheService.getTasksByEtudiant(idEtd);}
	
	@PostMapping("/task/mark")
	public ResponseEntity<Tache> markTaskAsCompleted(@RequestParam int idTache, @RequestParam boolean isCompleted) {
	    Tache tache = tacheService.markTaskAsCompleted(idTache, isCompleted);
	    return ResponseEntity.ok(tache);
	}
	
	@GetMapping("/tasksByProf")
	public List<Tache> getTasksByProf(@RequestParam int idProf){
		return tacheService.getTasksByProf(idProf);
	}
	
	@DeleteMapping("/tasksByProf/{id}")
	public boolean deleteTaskByProf(@PathVariable("id") int id,@RequestParam int idProf){
		return tacheService.deleteTaskByProf(id, idProf);
	}
	
	
}
