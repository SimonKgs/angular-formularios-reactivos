import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/service/emailValidator.service';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: `./registerPage.component.html`,
  styleUrls: ['./registerPage.component.css'],
})

export class RegisterPageComponent { 

  public registerForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.vS.firstNameAndLastnamePattern ) ]],
    email: ['', [ Validators.required, Validators.pattern(this.vS.emailPattern) ], [ this.emailValidator ]],
    username: ['', [ Validators.required, this.vS.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  }, {
    validators: [
      this.vS.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  })

  constructor( 
    private fb: FormBuilder,
    private vS: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}


  isValidField( field: string) {
    return this.vS.isValidField( this.registerForm, field )
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
  }

}
