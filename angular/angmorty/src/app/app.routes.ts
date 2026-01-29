import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Episodes } from './components/episodes/episodes';
import { Locations } from './components/locations/locations';
import { Characters } from './components/characters/characters';

export const routes: Routes = [
    {path:'',component:Main},
    {path:'episodes',component:Episodes},
    {path:'locations',component:Locations},
    {path:'characters',component:Characters}
];
