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

    projects = [
        {
          name :   'Join',
          skills : 'Angular | TypeScript | HTML | CSS |Firebase',
          description : 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
          link : '',
          github : '',
          number : '01/05',
          testLink : '#',
          githubLink : '#',
          background : '../../assets/img/portfolio photos s3.png'
        },
        {
          name :   'Pollo Loco',
          skills : 'JavaScript | HTML | CSS',
          description : 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
          link : '',
          github : '',
          number : '02/05',
          testLink : '#',
          githubLink : '#',
          background : '../../assets/img/pollo loco.png'
        }
    ]
    
}
