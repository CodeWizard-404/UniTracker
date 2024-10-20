package com.dsi.projet.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dsi.projet.entities.Classe;
import com.dsi.projet.entities.Matiere;
import com.dsi.projet.repositories.ClasseRepository;
import com.dsi.projet.repositories.MatiereRepository;
import com.dsi.projet.repositories.ProfRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatiereServiceImpl implements IMatiereService {

    @Autowired
    private MatiereRepository matiereRepository;

    @Autowired
    private ProfRepository professeurRepository;

    @Autowired
    private ClasseRepository classeRepository;

    @Override
    public List<Matiere> allMatieres() {
        return matiereRepository.findAll();
    }

    @Override
    public Matiere createMatiere(Matiere m) {
        // Fetch existing classes and set them
        List<Classe> classes = new ArrayList<>();
        if (m.getClasseIds() != null) {
            for (Integer classeId : m.getClasseIds()) {
                classeRepository.findById(classeId).ifPresent(classes::add);
            }
        }
        m.setClasses(classes); // Assuming you have a setClasses method in Matiere

        // Save the Matiere
        Matiere savedMatiere = matiereRepository.save(m);

        // Associate Professors
        if (m.getProfesseurs() != null) {
            for (Integer profId : m.getProfesseurs()) {
                professeurRepository.findById(profId).ifPresent(professeur -> {
                    professeur.getMatieres().add(savedMatiere.getId_Matiere());
                    professeurRepository.save(professeur);
                });
            }
        }

        return savedMatiere;
    }
}
