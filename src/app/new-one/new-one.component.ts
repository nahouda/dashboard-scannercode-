import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  showSucessMessage: boolean;
  errorr: string;
  serverErrorMessages: string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    
  }
  onSubmit(form:NgForm)
  {
    console.log(form)
    this.dataService.postData(form.value).subscribe(
      res=>{
        this.showSucessMessage=true;
        setTimeout(()=>this.showSucessMessage=false,4000);
        this.resetForm(form);
      
      },
      err=>{});
  }
  resetForm(form: NgForm) {
    this.dataService.selectedUser = {
    POLE: '',
    NOMDUTILISATEUR: '',
    PRODUIT:'',
    NDESERIE: '',
    UTILITE: '',
    PROJET:'',
    MAGASIN:'',
    REBUT: '',
    DATEENTREE: '',
    ENCOURSDUTILISATION:'',
    PROVENANCE: '',
    LivraisonPar: '',
    DATESORTIE: '',
    DESTINATION: '',
    PersonnelResponsabledelequipementSortie: '',}
    form.resetForm();
    this.serverErrorMessages = '';
  }
  
  
}
