import { Component } from '@angular/core';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { AppareilService } from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-projet';
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        }, 2000
      )
    }
  );
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
  constructor(private appareilService: AppareilService) {
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
