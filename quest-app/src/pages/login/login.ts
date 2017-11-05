import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public auth: AuthService) {
    auth.showLock();
  }



}
