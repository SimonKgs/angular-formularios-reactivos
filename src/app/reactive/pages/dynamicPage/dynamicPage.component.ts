import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamicPage.component.html',
})
export class DynamicPageComponent {

    // classic way
    // public MyDynamicForm2 = new FormGroup({
    //   favoriteGames: new FormArray([])
    // })

    public MyDynamicForm: FormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Dark Souls', Validators.required ],
        ['Elder Scrolls', Validators.required ],
      ])
    })

    public newFavourite: FormControl = new FormControl('', [Validators.required]);

    constructor ( private fb: FormBuilder) {}


    get favoriteGamesControls() {
      return this.MyDynamicForm.get('favoriteGames') as FormArray;
    }

    isValidField( field: string ): boolean | null {
      return this.MyDynamicForm.controls[field].errors
        && this.MyDynamicForm.controls[field].touched;
    }

    isValidFieldInArray(formArray: FormArray, index: number) {
      return formArray.controls[index].errors
        && formArray.controls[index].touched;
    }
  
    getErrorField( field: string): string | null{
  
      if ( !this.MyDynamicForm.controls[field] ) return null;
  
      const errors = this.MyDynamicForm.controls[field].errors || {}
  
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


    onAddToFavorites():void {
      if (this.newFavourite.invalid) return;

      const newGame = this.newFavourite.value;
      // this.favoriteGamesControls.push( new FormControl( newGame, Validators.required ) )
      this.favoriteGamesControls.push(
        this.fb.control( newGame, Validators.required)
      )

      this.newFavourite.reset();
    
    }


    onDeleteFavorite(index: number):void {
      this.favoriteGamesControls.removeAt(index);
    }

    onSubmit(): void {

      if (this.MyDynamicForm.invalid) {
        this.MyDynamicForm.markAllAsTouched;
        return;
      }
      
      console.log(this.MyDynamicForm.value);
      (this.MyDynamicForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
      this.MyDynamicForm.reset()
      
    }




}
