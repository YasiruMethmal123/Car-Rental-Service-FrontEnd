import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-account',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {
 
  public name:any='';

  constructor(privatex http:HttpClient){}

  public customer:any={
    name:"",
    telnumber:"",
    email:"",
    NIC:"",
    drivinglicenceNumber:"",
    dateofbirth:"",
    addresscode:"",
    lane:"",
    city:"",
    province:""
  }

  addcustomer(){
    
    console.log(this.customer);
//error occured
    this.http.post("http://localhost:8080/addCustomer",this.customer).subscribe(data=>{
      alert("Your Details are Added Successfully !!!")
    })

  }
}
