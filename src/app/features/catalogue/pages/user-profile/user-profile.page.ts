import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../../services/models/user';
import { CatalogueService } from '../../services/catalogue.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';


@Component({
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfilePage implements OnInit {

  provider : Observable<User | undefined>;

  constructor(private catalogue: CatalogueService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.provider = this.catalogue.getUserById(parseInt(this.route.snapshot.paramMap.get('id') || '1'));
 
  }

 
  
  

  


}
