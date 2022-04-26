import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  usr = {
    email : 'Thiensoncva01@gmail.com',
    pass : '123456',
    money: 100000
  }
  
  constructor() { }

  ngOnInit() {
  }

}
