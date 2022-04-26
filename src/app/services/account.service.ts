import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  currentUser: {
    email: string;
    pass: string;
    amount: number;
  } =null;

  users = [];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users'));
    if(this.users == null) {
      this.users = [];
    }
  }

  addUsr(usrEmail:string, usrPass:string){
    if(this.users.some((e,i) => e.email === usrEmail)){
      return false;
    }

    this.users.push({
      email:usrEmail,
      pass:usrPass
    });

    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  login(usrEmail:string, usrPass:string){
    if(this.currentUser == null){
      this.currentUser = this.users.find(
        i => i.email == usrEmail && usrPass == i.pass
      );

      return this.currentUser == null ? false : true;
    }
    else{
      return true;
    }
  }

  removeUsr(usrEmail:string, usrPass:string){
    if(this.login(usrEmail, usrPass)){
      this.users = this.users.filter(i => i.email !== usrEmail);
      localStorage.setItem('users', JSON.stringify(this.users));
      return true;
    }
    else{
      return false;
    }
  }

  getAllUsr(){
    return this.users;
  }
}
