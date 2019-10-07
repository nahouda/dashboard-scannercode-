import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {  RouterModule } from '@angular/router';
import{HttpClientModule,HTTP_INTERCEPTORS}from'@angular/common/http';
import { from } from 'rxjs';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import {AuthGuard}from './auth/auth.guard';
import{AuthInterceptor}from './auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import{ NavbarComponent} from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import{FooterComponent}from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './data/data.component';
import { NewOneComponent } from './new-one/new-one.component';
import { Interface1Component } from './navbar/interface1/interface1.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DataComponent,
    NewOneComponent,
    Interface1Component,
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule,
     MatListModule, 
     MatButtonModule,
     AngularFontAwesomeModule 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
