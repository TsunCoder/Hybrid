import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usr = {
    email : 'Thiensoncva01@gmail.com',
    pass : '123456',
    money: 100000
  }

  constructor(private router: Router) {}

  gotoInfo(){
    this.router.navigateByUrl('/info')
  }
}
