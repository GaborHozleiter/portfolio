import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  arrowNumber:number = 1;

  arrowHover(){
    if(this.arrowNumber < 2){
      this.arrowNumber++;
    }else{
      this.arrowNumber = 1;
    }
  }

}
