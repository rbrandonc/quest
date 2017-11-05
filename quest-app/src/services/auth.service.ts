import { Injectable, NgZone } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavController, App } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

import Auth0Lock from 'auth0-lock';

// Initializing our Auth0Lock
var lock = new Auth0Lock(
  'p96Rz_HaBJmxSg1HeMCFwFdpjOvKbLiZ',
  'quests.auth0.com'
);

// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      return;
    }
    
    this.nav = this.AuthService.app.getActiveNav();
    this.nav.push(HomePage);

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
});

@Injectable()
export class AuthService {
  accessToken: string;
  idToken: string;
  user: any;
  nav: NavController;
  constructor(public zone: NgZone, private app: App) {
    this.user = this.getStorageVariable('profile');
    this.idToken = this.getStorageVariable('id_token');
  }

  public showLock() {
    lock.show();
  }

  private getStorageVariable(name) {
    return JSON.parse(window.localStorage.getItem(name));
  }

  private setStorageVariable(name, data) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  private setIdToken(token) {
    this.idToken = token;
    this.setStorageVariable('id_token', token);
  }

  private setAccessToken(token) {
    this.accessToken = token;
    this.setStorageVariable('access_token', token);
  }

  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }
}
