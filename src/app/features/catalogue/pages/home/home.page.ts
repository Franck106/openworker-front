import { Component, OnInit } from '@angular/core';
import { IHome } from './home';

@Component({
 // selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  constructor() { }

  title : string = "BIENVENUE";

  categories : IHome [] = [
    {
      "categoryId" : 1, 
      "name" : "SOIN", 
      "image" : "./assets/images/bien_etre.png", 
      "description" : "Massage, coiffure, esthétique...",
    },
    {
      "categoryId" : 2, 
      "name" : "MAISON", 
      "image" : "./assets/images/jardinage.png", 
      "description" : "Jardinage, Repassage, Ménage...",
    },
    {
      "categoryId" : 3, 
      "name" : "INFORMATIQUE", 
      "image" : "./assets/images/informatique.png", 
      "description" : "Réseaux, sites...",
    },
    {
      "categoryId" : 4, 
      "name" : "AIDE A LA PERSONNE", 
      "image" : "./assets/images/garde_enfant.png", 
      "description" : "Personnes âgées, garde d'enfants...",
    },
    {
      "categoryId" : 5, 
      "name" : "ARTS", 
      "image" : "./assets/images/arts.png", 
      "description" : "Cours de musique, de théâtre...",
    }
  ]
  

  ngOnInit(): void {
 
  }

  
}
