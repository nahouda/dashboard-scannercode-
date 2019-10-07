import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AuthGuard}from './auth/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './data/data.component';
import { NewOneComponent } from './new-one/new-one.component';


const routes: Routes = [
  {path:'signup',component:UserComponent,
   children:[{path: '',component:SignUpComponent}]
},
{path:'login',component:UserComponent,
children:[{path: '',component:SignInComponent}]
},
{
  path:'userprofile',component:UserProfileComponent,canActivate:[AuthGuard]
},
{
  path:'',redirectTo:'/login',pathMatch:'full'
},
{
  path:'navbar',component:NavbarComponent
},
{
  path:'dashboard',component:DashboardComponent
},
{
  path:'data',component:DataComponent
},
{
  path:'newone',component:NewOneComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
