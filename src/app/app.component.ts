import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<button (mouseover) = "save($event)">guardar</button>
  `,
  styles: [`

  `]
})
export class AppComponent {
  
  save($event){
    console.log($event);
  }

}
