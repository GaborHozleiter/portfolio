import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-aslant',
  standalone: true,
  imports: [],
  templateUrl: './arrow-aslant.component.html',
  styleUrl: './arrow-aslant.component.scss'
})
export class ArrowAslantComponent {

  arrowNumber:number = 1;

  arrowHover(){
    if(this.arrowNumber < 2){
      this.arrowNumber++;
    }else{
      this.arrowNumber = 1;
    }
  }
}
