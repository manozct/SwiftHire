import {EventEmitter, Injectable} from "@angular/core";

import {Router} from "@angular/router";
import {tokenNotExpired} from "angular2-jwt";
import * as auth0 from "auth0-js";


@Injectable()
export class AuthService {

  /*lock=new Auth0Lock('6XaSK7EIxsRYjOTTQp1GOLtxzmxCfduo','swifthireapp.auth0.com',{
   redirect:false,
   responseType: 'token id_token',
   redirectUri: 'http://localhost:4200/homepage',
   scope: 'openid profile'

   });*/


  auth0 = new auth0.WebAuth({
    clientID: '6XaSK7EIxsRYjOTTQp1GOLtxzmxCfduo',
    domain: 'swifthireapp.auth0.com',
    redirect: false,
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/homepage',
    scope: 'openid profile'
  });

  loggedIn: EventEmitter<string>;

  constructor(private router: Router) {
    this.loggedIn = new EventEmitter();

    /*this.lock.on('authenticated', (authResult) => {
     localStorage.setItem('token', authResult.idToken);
     localStorage.setItem('accessToken', authResult.accessToken);
     localStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
     this.loggedIn.emit(authResult.idTokenPayload);
     });*/


  }


  login(): void {
    this.auth0.authorize();

    //this.lock.show();
  }


  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        // console.log("before navigate"+ localStorage.getItem("profile"));
        console.dir(authResult);
        this.router.navigate(['homepage']);
      } else if (err) {
        this.router.navigate(['home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
    this.loggedIn.emit((authResult.idTokenPayload));

  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    // Go back to the home route
    this.router.navigate(['']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('profile'));

  }

  public logged() {
    return tokenNotExpired();
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
