import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedUser:Data={
   
    POLE:'',
NOMDUTILISATEUR:'',
PRODUIT:'',
NDESERIE:'',
UTILITE:'',
PROJET:'',
ENCOURSDUTILISATION:'',
MAGASIN:'',
REBUT:'',
DATEENTREE:'',
PROVENANCE:'',
LivraisonPar:'',
DATESORTIE:'',
DESTINATION:'',
PersonnelResponsabledelequipementSortie:'',
    
  };
  constructor(private http:HttpClient) { }
  postData(data:Data){
    return this.http.post(environment.apiBaseUrl+'/docu',data);
   }
   getData() {
    return this.http.get(environment.apiBaseUrl + '/getdata');
  }
  get(data) {
    return this.http.get(environment.apiBaseUrl + '/get/' + data);
  }

}
