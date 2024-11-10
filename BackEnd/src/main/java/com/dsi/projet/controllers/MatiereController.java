package com.dsi.projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.projet.entities.Matiere;
import com.dsi.projet.services.IMatiereService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MatiereController {

	@Autowired
	private IMatiereService matiereService;

	@GetMapping("/matieres")
	public List<Matiere> allClasses() {
		return matiereService.allMatieres();
	}

	@PostMapping("/matieres")
	public Matiere createMatiere(@RequestBody Matiere m) {
		return matiereService.createMatiere(m);
	}
	 @PostMapping("/getMatieres")
	    public ResponseEntity<?> getMatieresByIds(@RequestBody List<Integer> ids) {
	        try {
	            List<Matiere> matieres = matiereService.getMatieresByIds(ids); // Appelle le service pour obtenir les Matieres
	            return ResponseEntity.ok(matieres); // Retourne la liste des Matieres avec le statut HTTP 200
	        } catch (RuntimeException e) {
	            // En cas d'erreur (matière introuvable), renvoie une réponse avec le statut 404 et le message d'erreur
	            return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                                 .body(e.getMessage());
	        }
	    }

}
