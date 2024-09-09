import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


const rtx5090 = {
  name: 'RTX5090',
  price: 2500,
  inStorage: 7
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basicPage.component.html',
  styleUrls: ['./basicPage.component.css'],
})

export class BasicPageComponent implements OnInit {

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
  ngOnInit(): void {
    // this.myForm.reset(rtx5090 )
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getErrorField( field: string): string | null{

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'este campo es requerido'
        case 'minlength':
          return `este campo necesita al menos 
          ${ errors['minlength'].requiredLength } caracteres`
      }
    }
    return null
  }

  onSave():void {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched
      return;
    };

    console.log(this.myForm.value);

    this.myForm.reset({price: 0, inStorage: 0});
  }

}
