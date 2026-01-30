import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SingleCharacter } from '../../model/character';
import { Info } from '../../model/info';
import { Character } from '../character/character';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-characters',
  imports: [CommonModule,Character],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters implements OnInit {

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //this.getCharacters();
    this.getCharacterData();
  }

  info:Info={} as Info;
  results:SingleCharacter[]=[];
   
  page=1;

  getCharacters(){
    fetch(`https://rickandmortyapi.com/api/character?page=${this.page}`)
    .then(res=>res.json())
    .then(adat=>{
      this.info=adat.info;
      this.results=adat.results;
    })
    .catch(err=>alert(err));
  }

  getCharacterData(){
    this.http.get<any>(`https://rickandmortyapi.com/api/character?page=${this.page}`)
    .subscribe(
      adat=>{
      this.info=adat.info;
      this.results=adat.results;
    })
  }


}
