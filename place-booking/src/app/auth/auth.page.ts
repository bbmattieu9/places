import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;

  constructor(private authSrv: AuthService, private router: Router) { }

  onLogin() {
    this.isLoading = true;
    this.authSrv.login();
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl('/places/tabs/discover');
     }, 1500);
  }

  ngOnInit() {
  }

}
