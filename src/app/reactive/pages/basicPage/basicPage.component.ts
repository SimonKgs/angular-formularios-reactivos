import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      name: ['', [ Validators.required, Validators.minLength(3)] ],
      price: ['0', [ Validators.required, Validators.min(0)]],
      inStorage: ['0', [ Validators.required, Validators.min(0)]],
  })

  constructor( private fb: FormBuilder) {}

  onSave():void {

    if (this.myForm.invalid) return;
    
    console.log(this.myForm.value);
  }

}
