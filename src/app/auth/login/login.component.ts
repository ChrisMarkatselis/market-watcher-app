import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';
import { UserCredentials } from './userCredentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  get username() {
		return this.userName;
	}

	set username(userName: string) {
		console.log('Setting username', name);
		this.userName = userName;
  }
  
  ngOnInit() {
  }

  login() {
    const { userName, password } = this;
    const credentials: UserCredentials ={
      userName,
      password
    };

    this.authService.login(credentials)
      .subscribe(jwt => {
        this.storageService.set('token', jwt.username);
        this.authService.isLoggedIn = true;
      });
    
  }

}
