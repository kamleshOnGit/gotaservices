import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Job } from '../../model/job';
import { JobCategory } from '../../model/jobCategory';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl: any;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.backendApiUrl;
  }

  /**
   * get last jobs list
   */
  public getLastJobs(): Observable<any[]> {
    const jobs: any = [
      {
        id: 1,
        name: 'Chef de chantier génie climatique',
        image: 'https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg',
        audio: 'assets/audio/chef-chantier.mp3',
        jobCategory: 2,
        jobType: 'CDI',
        company: 'Eiffage Energie',
        salary: 2600,
        mission: 'Vous serez responsable de l\'exécution du chantier. A ce titre, vos missions seront variées :\n' +
          ' \n' +
          '  *  Coordonner et superviser l\'intervention des équipes\n' +
          '  *  Définir les tâches de chantier\n' +
          '  *  Participer à la préparation du chantier\n' +
          '  *  Assurer l\'approvisionnement et les besoins en matériels\n' +
          '  *  Garantir la qualité de l\'exécution du chantier ainsi que le respect des règles de vie, de sécurité et d\'environnement sur le chantier\n' +
          '  *  Encadrer l\'équipe de production\n' +
          '  *  Superviser le suivi et le respect du planning travaux.',
        address: 'JOUE LES TOURS',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 2,
        name: 'Agent de nettoyage industriel',
        image: 'https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg',
        audio: 'assets/audio/nettoyage-homme.mp3',
        jobCategory: 1,
        jobType: 'CDI',
        company: 'Gsf Celtus',
        salary: 2400,
        mission: 'Désinfection des points de contacts chez l\'un de nos clients  basé sur Ancenis.\n' +
          'Vous intégrerez une équipe de 12 agents pilotée par un chef d\'équipe. \n' +
          'Horaires d\'interventions,  du lundi au vendredi de 8h00 a 12h00. ',
        address: 'BORDEAUX',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 3,
        name: 'Nettoy(eur/euse) de locaux',
        image: 'https://images.pexels.com/photos/4239104/pexels-photo-4239104.jpeg',
        audio: 'assets/audio/nettoyage-femme.mp3',
        jobCategory: 1,
        jobType: 'INTERIM',
        company: 'Espace Nettoyage',
        salary: 10,
        mission: 'Vous assurerez l\'entretien des locaux en fonction des exigences des sites (locaux professionnels).\n' +
          'Vous vous déplacez sur les sites de la zone d\'intervention (hors agglomération) avec votre véhicule en autonomie.',
        address: 'FRANCE',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 4,
        name: 'Chef de chantier travaux publics',
        image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
        audio: 'assets/audio/chef-chantier.mp3',
        jobCategory: 2,
        jobType: 'CDI',
        company: 'SPIE France',
        salary: 2000,
        mission: 'A ce titre, vos principales missions sont les suivantes :\n' +
          'Management des équipes\n' +
          'Prendre connaissance des ordres de travaux et analyser les plan\n' +
          'Vérifier l\'approvisionnement et la conformité du matériel et des matériaux\n' +
          'Préparer le lancement des travaux (DICT, marquage/piquetage des réseaux, base vie, signalisation du chantier, etc.)\n' +
          'Piloter les travaux de plusieurs chantiers et être garant de leur bonne réalisation\n' +
          'Rendre compte à sa hiérarchie de l\'avancement et de la tenue des objectifs\n' +
          'Garantir le respect des exigences hygiène et sécurité\n' +
          'Participer aux réunions de chantiers avec les donneurs d\'ordre',
        address: 'ORANGE',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 5,
        name: 'Agent d\'entretien de nettoyage',
        image: 'https://images.pexels.com/photos/756883/pexels-photo-756883.jpeg',
        audio: 'assets/audio/nettoyage-homme.mp3',
        jobCategory: 1,
        jobType: 'INTERIM',
        company: 'Net',
        salary: 10,
        mission: 'Vous effectuerez l\'entretien de bureaux durant les congés de notre agent titulaire',
        address: 'COLOMIERS',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 6,
        name: 'Chef de Chantier GO',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        audio: 'assets/audio/chef-chantier.mp3',
        jobCategory: 2,
        jobType: 'CDI',
        company: 'Page personnel immobilier',
        salary: 3000,
        mission: 'En collaboration directe avec le Dirigeant et le Conducteur de Travaux, vos missions en tant que Chef de Chantier GO au sein d\'une entreprise familiale, vos missions sont les suivantes :\n' +
          '    * Vous organisez, animez et gérez une équipe,\n' +
          '    * Vous gérez les besoins en matériel et matériaux des chantiers qui vous sont confiés (logements collectifs, bâtiments tertiaires),\n' +
          '    * Vous êtes responsable de la production, de la sécurité sur le chantier et du respect des délais,\n' +
          '    * Vous contrôlez la qualité des ouvrages réalisés.',
        address: 'ST NAZAIRE',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 7,
        name: 'Agent d\'entretien de nottoyage industriel',
        image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg',
        audio: 'assets/audio/nettoyage-femme.mp3',
        jobCategory: 1,
        jobType: 'CDI',
        company: 'Adopt Proprete',
        salary: 1800,
        mission: 'Nous recherchons un/une agent d\'entretien pour un CDD remplacement de l\'agent absent pour conges :\n' +
          'CDD du 31/08 au 19/09:\n' +
          'Horaires : 6h00 à 8h00 17h00 à 19h00 du lundi au vendredi\n' +
          '\n' +
          'Nettoyage bureaux, circulations, sanitaires\n' +
          'Passage de l\'autolaveuse',
        address: 'COLOMIERS',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 8,
        name: 'CARRELEUR',
        image: 'https://images.unsplash.com/photo-1547414857-c9f61632b250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        audio: 'assets/audio/carreleur.mp3',
        jobCategory: 2,
        jobType: 'INTERIM',
        company: 'Groupe Leader',
        salary: 10,
        mission: 'Au sein de cette structure bien implantée sur la région clermontoise depuis plus de 20 ans, vous devrez intervenir sur un chantier de grande envergure, situé au sein de l\'agglomération clermontoise.\n' +
          'Votre mission, si vous l\'acceptez sera de poser en toute autonomie du carrelage, au sol et aux murs.',
        address: 'CLERMONT FERRAND',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      }
    ];
    return of(jobs);
    // return this.http.get<Job[]>(this.apiUrl + '/jobs/last');
  }

  /**
   * get all jobs list
   */
  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl + '/jobs');
  }

  /**
   * get all jobs by category
   * @param jobCategory
   */
  public getCategoryJobs(jobCategory: JobCategory): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl + '/jobs/category/' + jobCategory.id);
  }

  /**
   * get job detail
   * @param jobId
   */
  // public getJob(jobId: number): Observable<Job> {
  //   return this.http.get<Job>(this.apiUrl + '/jobs/' + jobId);
  // }

  public getJob(jobId: number) {
    return {
      id: 1,
      name: 'Chef de chantier génie climatique',
      image: 'https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg',
      audio: 'assets/audio/chef-chantier.mp3',
      jobCategory: 2,
      jobType: 'CDI',
      company: 'Eiffage Energie',
      salary: 2600,
      mission: 'Vous serez responsable de l\'exécution du chantier. A ce titre, vos missions seront variées :\n' +
        ' \n' +
        '  *  Coordonner et superviser l\'intervention des équipes\n' +
        '  *  Définir les tâches de chantier\n' +
        '  *  Participer à la préparation du chantier\n' +
        '  *  Assurer l\'approvisionnement et les besoins en matériels\n' +
        '  *  Garantir la qualité de l\'exécution du chantier ainsi que le respect des règles de vie, de sécurité et d\'environnement sur le chantier\n' +
        '  *  Encadrer l\'équipe de production\n' +
        '  *  Superviser le suivi et le respect du planning travaux.',
      address: 'JOUE LES TOURS',
      createdAt: new Date(2020, 7, 20),
      updatedAt: new Date(2020, 7, 20)
    };
  }
  /**
   * add job
   * @param job
   */
  public addJob(job: Job): Observable<object> {
    return this.http.post(this.apiUrl + '/jobs/add', job);
  }

  /**
   * update job
   * @param job
   */
  public updateJob(job: Job): Observable<object> {
    return this.http.put(this.apiUrl + '/jobs/update/' + job.id, job);
  }

  /**
   * delete job
   * @param jobId
   */
  public deleteJob(jobId: number): Observable<object> {
    return this.http.delete(this.apiUrl + '/jobs/delete/' + jobId);
  }
}
