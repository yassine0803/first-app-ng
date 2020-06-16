import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-projet';
  isAuth = false;
  appareils = [
    {
      name: "televesion",
      status: 'allumé'
    },
    {
      name: "laptop",
      status: 'allumé'
    },
    {
      name: "phone",
      status: 'éteint'
    }
  ];
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
