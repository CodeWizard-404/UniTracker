package com.dsi.projet.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.Completion.ComplexteTache;
import com.dsi.projet.services.CompletionService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CompletionController {
	@Autowired
	private CompletionService comServ;
	
	@GetMapping("/completion")
	public Completion getCompletion(@RequestParam int idEtd,@RequestParam int idTache){
	return comServ.Consulter(idEtd, idTache);}
	
	@PostMapping("/realisation/mark")
	public ResponseEntity<Completion> markTaskAsCompleted(@RequestParam int tacheId,@RequestParam int etudiantId, @RequestParam boolean isCompleted) {
	    Completion c = comServ.markTaskAsCompleted(tacheId,etudiantId, isCompleted);
	    return ResponseEntity.ok(c );
	}
	
	@PostMapping("/realisation/difficulty")
	public ResponseEntity<Completion> pickDifficulty(@RequestParam int tacheId,@RequestParam int etudiantId, @RequestParam ComplexteTache complexite) {
	    Completion c = comServ.pickDifficulty(tacheId,etudiantId, complexite);
	    return ResponseEntity.ok(c );
	}
	
//	@PostMapping("/task/mark")
//	public ResponseEntity<Tache> markTaskAsCompleted(@RequestParam int idTache, @RequestParam boolean isCompleted) {
//	    Tache tache = tacheService.markTaskAsCompleted(idTache, isCompleted);
//	    return ResponseEntity.ok(tache);
//	}
}
