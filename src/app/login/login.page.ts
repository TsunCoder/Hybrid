import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inputUsername: string;
  inputPass: string;

  constructor(private router: Router,
    private accountService: AccountService,
    private alertController: AlertController) {}

  ngOnInit() {}
  async showAllUsrs(){
    const users = this.accountService.getAllUsr();
    const alert = await this.alertController.create({
      header: 'Danh sách tài khoản',
      message: (u => {
        let s = '';
        u.forEach((e, i) => {
          s += `${i + 1} - ${e.email} <br/>`;
        });
        return s;
      })(users),
      buttons: ['OK']
    });
    await alert.present();
  }

  async addUsrs(){
    const alert = await this.alertController.create({
      header: 'Thông báo',
      message: 'Tài khoản đã tồn tại',
      buttons: ['OK']
    });

    if(this.accountService.addUsr(this.inputUsername, this.inputPass)){
      alert.message = 'Tạo thành công!';
    }
    await alert.present();
  }
  
  async removeUsr(){
    const alert = await this.alertController.create({
      header: 'Thông báo',
      message: 'Xóa thành công ' + this.inputUsername,
      buttons: ['OK']
    });

    if(!this.accountService.removeUsr(this.inputUsername, this.inputPass)){
      alert.message = 'Xóa thất bại';
    }

    await alert.present();
  }

  login(){
    if(this.accountService.login(this.inputUsername, this.inputPass)){
      this.router.navigateByUrl('/home')
    }
  }
}
