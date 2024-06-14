import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers/promises';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
    
    arrowNumber:number = 3;
    email:string = 'hozleitergabor@gmail.com';

    ngOnInit(): void {
      }
}
