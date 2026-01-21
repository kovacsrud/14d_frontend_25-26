import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Teszt } from './teszt/teszt';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Teszt],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angulartest');
}
