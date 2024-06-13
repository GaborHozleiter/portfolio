import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

    contactData = {
      name : '',
      email : '',
      message : '',
    }
    nameInputfieldActive = false;
    emailInputfieldActive = false;

    onSubmit(){
      console.log(this.contactData);
    }

    nameInputActive(){
      this.nameInputfieldActive = true;
    }

    emailInputActive(){
      this.emailInputfieldActive = true;
    }

}
