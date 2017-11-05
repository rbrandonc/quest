import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { NavController, App } from 'ionic-angular';
import { HomePage } from '../home/home';

import Auth0Lock from 'auth0-lock';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public auth: AuthService, public nav: NavController) {
    // Initializing our Auth0Lock
    var lock = new Auth0Lock(
      'p96Rz_HaBJmxSg1HeMCFwFdpjOvKbLiZ',
      'quests.auth0.com'
    );

    auth.showLock(lock);

    // Listening for the authenticated event
    lock.on("authenticated", function(authResult) {
      // Use the token in authResult to getUserInfo() and save it to localStorage
      lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          return;
        }

        nav.push(HomePage);
        lock.hide();

        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });
  }



}
