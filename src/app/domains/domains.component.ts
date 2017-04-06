import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Domain } from './domain';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domains: FirebaseListObservable<Domain[]>;

  constructor(private angularFire: AngularFire) {
  }

  ngOnInit(){
    this.domains = this.angularFire.database.list('/domains');
  }

}
