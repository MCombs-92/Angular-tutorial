import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  name = "Mitchell Combs";
  address = " 315 N Miami, Cleves OH, 45002";
  phone = "(513) 501-2449";
  email = "Mitch.combs.92@gmail.com";




  constructor() { }

  ngOnInit() {
  }

}
