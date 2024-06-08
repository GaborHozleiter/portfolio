import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
    
    contPositionHide = true;
    
  
  animation1(){
      this.contPositionHide = false;
    }

    animation2(){
      this.contPositionHide = true;
    }
}
