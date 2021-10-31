import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  items: any;
  num :any  ;
  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean = false;  




  constructor(firestore: AngularFireDatabase,   private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService) {
    firestore.list("/user").valueChanges().subscribe((value)  => 
    
    {
      
      this.items = value;
      console.log(value);

    
    }
    
    )
  // this.items = firestore.collection('user').valueChanges();
  // this.items.subscribe((value)=>  console.log(value) );
 
  console.log("test");

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }


  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).catch((error)=> console.log(error) );
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
 