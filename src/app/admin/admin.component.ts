import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Domain } from './domain';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  domains: FirebaseListObservable<Domain[]>;

  constructor(private angularFire: AngularFire) {
  }

  ngOnInit(){
    this.domains = this.angularFire.database.list('/domains');
  }

}
