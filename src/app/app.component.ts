import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
  appareils: any[];

  constructor(private appareilService: AppareilService) {
   setTimeout(
    () => {
      this.isAuth = true;
    }, 4000
   );
  }
  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }
  onAllumeTout(){
    this.appareilService.switchOnAll();
  }
  onEteintTout(){
    this.appareilService.switchOnOff();
  }
}
