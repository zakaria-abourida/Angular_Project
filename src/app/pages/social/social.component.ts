import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  items: any;
  num :any  ;
  constructor(firestore: AngularFireDatabase) {
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

  ngOnInit(): void {  

   
  }

}
 