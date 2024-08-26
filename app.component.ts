import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.components';
import {FormsModule,NgForm,ReactiveFormsModule,FormControl,FormGroup, Validators} from '@angular/forms'
import {  NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
  data = 10;

  // input pratice

  // updateChild(){
  //   this.data = Math.floor(1000 + Math.random() * 9000);
  // }

  // basic form 

  // userData : any = {}

  // getData(data: NgForm){
  //   console.log(data)
  //   this.userData = data
  // }

  // reactive and vadliation form

  loginForm= new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
 })

 loginUser(){
  console.log(this.loginForm.value)
 }

 get user() {
        return this.loginForm.get('user');
 }

 get password() {
        return this.loginForm.get('password');
 }

}
 