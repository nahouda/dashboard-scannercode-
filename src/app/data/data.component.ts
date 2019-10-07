import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  dataDetails = [{
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
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() { this.dataservice.getData().subscribe(
    res => {
      this.dataDetails = res['result'];
    },
    err => {
      console.log(err);

    }
  );
  }

}
