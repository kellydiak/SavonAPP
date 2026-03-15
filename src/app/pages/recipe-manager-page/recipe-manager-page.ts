import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recette } from '../../models/recette.model';
import { RecetteService } from '../../services/recette.service';


@Component({
  selector: 'app-recipe-manager-page',
  imports: [CommonModule],
  templateUrl: './recipe-manager-page.html',
  styleUrl: './recipe-manager-page.css',
})
export class RecipeManagerPage implements OnInit {

  public recettes: Recette[] = []; // Tableau de stockage des recettes

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.getRecettes();
  }

  /***
* Méthode d'appel du service pour récupérer les données par l'API
*/
  getRecettes(): void {
    this.recetteService.getRecettes().subscribe({
      next: (data) => {
        this.recettes = data;
        console.log("Recettes récupérées avec succès !")
      },
      error: (err) => {
        console.error("Erreur API : ", err);
      }
    });
  }

  supprimerRecette(id: number): void {
    if (confirm("Supprimer cette recette ?")) {
      this.recetteService.deleteRecette(id).subscribe(() =>
        this.getRecettes());
    }
  }
}




