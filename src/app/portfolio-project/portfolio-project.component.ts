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
    
    containerOpacity = false;
    
  
  animation1(){
      this.containerOpacity = true;
    }

    animation2(){
      this.containerOpacity = false;
    }
}
