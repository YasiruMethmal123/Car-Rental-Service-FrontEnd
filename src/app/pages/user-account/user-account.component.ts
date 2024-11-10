import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent {
  public name:any='';

  constructor(private http:HttpClient){}

  public user:any={
    name:"",
    email:"",
    password:"",
    password_confirmation:""
  }

  adduser(){
    console.log(this.user);

    this.http.post("http://localhost:8080/addUser",this.user).subscribe(data=>{
      alert("User Added Successfully !!!")
    })

  }
}
