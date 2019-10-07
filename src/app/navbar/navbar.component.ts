import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  nav()
{
  this.router.navigateByUrl('/userprofile');
  
}
dash()
{
  this.router.navigateByUrl('/dashbord');
}
data()
{
  this.router.navigateByUrl('/data');
}
}
