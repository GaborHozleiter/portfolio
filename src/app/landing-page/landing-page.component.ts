import { Component, OnInit } from '@angular/core';

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

    constructor(){
      //this.xy();
    }

    ngOnInit(): void {
      
      
    }

    xy(){
      setInterval(() => {
        if(this.arrowNumber < 5){
          this.arrowNumber ++;
        }else{
          this.arrowNumber = 0;
        }
      }, 1000);
    }
}
