import { Component } from '@angular/core';
import { UsuarioService } from './usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
 
})
export class AppComponent {
  
 constructor (){

 } 
 miFormulario = new FormGroup({
   username : new FormControl('', Validators.required),
   userpassword : new FormControl ('', Validators.required)
 });

}
