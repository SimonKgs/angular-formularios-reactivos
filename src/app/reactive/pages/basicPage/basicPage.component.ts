import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basicPage.component.html',
  styleUrls: ['./basicPage.component.css'],
})

export class BasicPageComponent {

  // sin formBuilder
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], [] ), // para validaciones 
  //   price: new FormControl(''),
  //   inStorage: new FormControl(''),
  // })

  // con formBuilder
  public myForm: FormGroup = this.fb.group({
      name: [''],
      price: ['0'],
      inStorage: ['0'],
  })

  constructor( private fb: FormBuilder) {}

  onSave():void {
    console.log(this.myForm.value);
  }

}
