import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otaf-front';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'gotaf',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/gotaf.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'gotaf_color',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/gotaf_color.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'google',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/google.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_social_facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_whatsapp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_social_whatsapp.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_social_insta.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_social_linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_social_twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_social_youtube.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_spotify',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_social_spotify.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'audio',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/picto_audio_medium.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'play',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_lecteur.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_publier',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_publier.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_login',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_login.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'gotaf_android_get',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_store_Google_Play.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'gotaf_apple_get',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_store_apple.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'category_nettoyage',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_cat_nettoyage.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'category_btp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_cat_BTP.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'category_restauration',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_cat_restauration.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'category_tourisme',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_cat_tourisme.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'category_logistique',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_cat_logistique.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_metier',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_metier.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_micro',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_micro.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_localisation',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_localisation.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_search',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_recherche.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_save',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_save.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_tri',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_trier.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_last_jobs',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_annonces_urgentes_1.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_map',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_voir_carte.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon_postuler',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/icon_postuler.svg')
    );
  }
}
