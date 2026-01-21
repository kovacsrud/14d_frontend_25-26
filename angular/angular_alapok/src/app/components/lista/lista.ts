import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  nevek=["Emma","Zénó","Ubul","Áron","Géza","Hanna"];
  //nevek=[];

  nevHozzaad(e:any){
    e.preventDefault();
    this.nevek.push(e.target.elements.nev.value);
  }

  nevTorles(i:number){
    this.nevek.splice(i,1);
  }

}
