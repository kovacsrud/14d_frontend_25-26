import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Lista } from './components/lista/lista';
import { Select } from './components/select/select';
import { Randuser } from './components/randuser/randuser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Lista,Randuser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_alapok');
  selectErtek="0";

  getSelect(e:string){
    this.selectErtek=e;
  }


}
