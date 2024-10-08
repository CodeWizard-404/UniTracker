package com.dsi.projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.projet.entities.Classe;
import com.dsi.projet.services.IClasseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClasseController {
	@Autowired
	private IClasseService classeService;
	
	
    @GetMapping("/classes")
	public List<Classe> allClasses() {
		// TODO Auto-generated method stub
		return classeService.allClasses();
	}

	@PostMapping("/classes")
	public Classe createClass(@RequestBody Classe c) {
		// TODO Auto-generated method stub
		return classeService.createClass(c);
	}
	

}
