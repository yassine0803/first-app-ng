import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string = "appareils";
  status: string = "status";
  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
  }

}
