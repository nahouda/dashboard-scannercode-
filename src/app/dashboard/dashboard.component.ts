import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataDetails = {
    "POLE": "",
    "NOMDUTILISATEUR": "",
    "PRODUIT": "",
    "NDESERIE": "",
    "UTILITE": "",
    "PROJET": "",
    "ENCOURSDUTILISATION": "",
    "MAGASIN": "",
    "REBUT": "",
    "DATEENTREE": "",
    "PROVENANCE": "",
    "LivraisonPar": "",
    "DATESORTIE": "",
    "DESTINATION": "",
    "PersonnelResponsabledelequipementSortie": ""
  }
  searchdataDetails;
  searchResult = [{
    "POLE": "",
    "NOMDUTILISATEUR": "",
    "PRODUIT": "",
    "NDESERIE": "",
    "UTILITE": "",
    "PROJET": "",
    "ENCOURSDUTILISATION": "",
    "MAGASIN": "",
    "REBUT": "",
    "DATEENTREE": "",
    "PROVENANCE": "",
    "LivraisonPar": "",
    "DATESORTIE": "",
    "DESTINATION": "",
    "PersonnelResponsabledelequipementSortie": ""
  }];

  constructor(private dataservice: DataService, private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(
      res => {
        console.log(res['result']);
        this.dataDetails = res['result'][0];


      },
      err => {
        console.log(err);

      }
    );
  }
  search() {
    this.dataservice.get(this.searchdataDetails).subscribe(
      res => {
        console.log(res['result']);
       
        if (res['result']) {
          this.searchResult = res['result'];
        } else {
          this.searchResult = JSON.parse(res['message']);
        }
      },
      err => {
        console.log(err);

      }

    );

  }
  add(){
    this.router.navigateByUrl('/newone');
  }
}
