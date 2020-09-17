import { Component, OnInit } from '@angular/core';
import { User } from '../../services/models/user';
import { CatalogueService } from '../../services/catalogue.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.css']
})
export class UserProfilePage implements OnInit {

  provider : Observable<User | undefined>;
  //test avant récup id
  idPremium : number = 3;
  idNonPrem : number = 1;

  constructor(private catalogue: CatalogueService) { }

  ngOnInit(): void {
  this.provider = this.catalogue.getUserById(this.idPremium); //récupérer l'id du provider de la proposal (user)
  }

 
    
  

  


}
