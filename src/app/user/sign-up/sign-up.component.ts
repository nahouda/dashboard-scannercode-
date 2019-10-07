import { Component, OnInit } from '@angular/core';
import{UserService} from '../../shared/user.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  errorr:string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    this.userService.postUser(form.value).subscribe(
      res=>{
        this.showSucessMessage=true;
        setTimeout(()=>this.showSucessMessage=false,4000);
        this.resetForm(form);
      },
      err=>{
        if(err.status==422){
          this.errorr=' "Duplicate email adrress found. "';
        
       }
      else
      this.serverErrorMessages='Something went wrong.Please contact Admin.';
       } );
  }
  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: '', 
   
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
