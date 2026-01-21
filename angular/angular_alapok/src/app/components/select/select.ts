import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  @Output()
  kivalasztott=new EventEmitter();

  outputKivalasztott(e:any){
     this.kivalasztott.emit(e.target.value);
  }
  
}
