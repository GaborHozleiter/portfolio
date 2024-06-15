import { Component } from '@angular/core';
import { PortfolioProjectComponent } from '../portfolio-project/portfolio-project.component';
import { ArrowAslantComponent } from '../arrow-aslant/arrow-aslant.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ PortfolioProjectComponent, ArrowAslantComponent ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
