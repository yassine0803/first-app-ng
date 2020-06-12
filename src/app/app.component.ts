import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-projet';
  isAuth = false;
  appareil1 = "televesion";
  appareil2 = "laptop";
  appareil3 = "phone"
  constructor() {
   setTimeout(
    () => {
      this.isAuth = true;
    }, 4000
   );
  }
  onAllumer(){
    console.log('on allume tout');
  }
}
