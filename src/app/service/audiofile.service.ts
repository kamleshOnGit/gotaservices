import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudiofileService {


  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url: 'assets/audio/nettoyage-femme.mp3',
      name: 'Nettoy(eur/euse) de locaux' ,
    },
    {
      url: 'assets/audio/chef-chantier.mp3',
      name: 'Chef de chantier travaux publics',
    },
    {
      url: 'assets/audio/nettoyage-homme.mp3',
      name: 'Agent d\'entretien de nettoyage',
    },
    {
      url: 'assets/audio/chef-chantier.mp3',
      name: 'Chef de Chantier GO',
    },
    {
      url: 'assets/audio/nettoyage-femme.mp3',
      name: 'Agent d\'entretien de nottoyage industriel',
    },
    {
      url: 'assets/audio/carreleur.mp3',
      name: 'CARRELEUR',
    },
    {
      url: 'assets/audio/category-logistique.mp3',
      name: 'Logistique',
    },
    {
      url: 'assets/audio/category-restauration.mp3',
      name: 'Restauration',
    },
  ];

  getFiles(): any {
    return of(this.files);
  }
}
