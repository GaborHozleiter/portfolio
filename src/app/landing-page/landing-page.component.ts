import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
    ngOnInit(): void {
      
    }

    email:string = 'hozleitergabor@gmail.com';

}
