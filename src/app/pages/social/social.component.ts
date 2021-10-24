import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  // items  ;
   constructor() {

  }

  // constructor(firestore: AngularFirestore) {
  //   this.items = firestore.collection('items').valueChanges();
  // }

  ngOnInit(): void {
  }

}
