import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  text = "Sublime Daily";
  result = '';

  data = new FormGroup({
    content: new FormControl()
  })

/*  data: FormGroup;

  constructor() {
    this.data = new FormGroup ({
      content: new FormControl('')
    });
  }*/

  triggerSubmit() {
      this.result = this.data.controls.content.value;  
      console.log(this.data.controls.content.value);
      console.log('test');
  }
}
