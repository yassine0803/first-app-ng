import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = "éteint";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(from: NgForm){
    console.log(from.value);
  }
}
