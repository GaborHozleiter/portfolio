import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    openedMenu: boolean = false;

    openMenu(){
      this.openedMenu = true;
    }

    closeMenu(){
      this.openedMenu = false;
    }

    borderAnimation() {
      alert('sdfhx');
    }
}
