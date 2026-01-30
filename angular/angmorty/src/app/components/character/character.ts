import { Component, Input } from '@angular/core';
import {SingleCharacter} from '../../model/character';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {

  @Input()
  result:SingleCharacter={} as SingleCharacter;
  

}
