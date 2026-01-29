import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '../select/select';

@Component({
  selector: 'app-randuser',
  imports: [CommonModule,Select],
  templateUrl: './randuser.html',
  styleUrl: './randuser.css',
})
export class Randuser implements OnInit {
  ngOnInit(): void {
    this.fetchData();
    this.userNumber="5";
  }

  userList:any=[];
  isLoading=false;
  userNumber="5";

  fetchData(){
    this.isLoading=false;
    fetch(`https://randomuser.me/api/?results=${this.userNumber}`)
    .then(res=>res.json())
    .then(adat=>this.userList=adat.results)
    .catch(err=>alert(err))
    .finally(()=>this.isLoading=false);
  }

  getUserNumber(e:string){
    this.userNumber=e;
    this.fetchData();
  }

}
