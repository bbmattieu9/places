import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _userIsAuthenticated = true;
  // tslint:disable-next-line: variable-name
  private _userId = 'abc';

  get userId() {
    return this._userId;
  }
  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() { }

  login() {
    this._userIsAuthenticated = true;
  }

  createNewUser(email: string, password: string) {
    // this.http.post(`String that goes in to the server as parameters`)
   }

  logout() {
    this._userIsAuthenticated = false;
  }
}
