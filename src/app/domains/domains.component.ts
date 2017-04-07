import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFire, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import { Domain } from './domain';
import { EditDomainComponent } from './edit-domain/edit-domain.component'

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domains: FirebaseListObservable<Domain[]>;

  @ViewChild(EditDomainComponent) editDomainComponent : EditDomainComponent;

  constructor(private angularFire: AngularFire) {
  }

  ngOnInit(){
    this.domains = this.database().list('/domains');
  }

  database() : AngularFireDatabase {
    return this.angularFire.database;
  }

  new() {
    this.editDomainComponent.edit(new Domain());
  }

  edit(domain : Domain) : void {
    this.editDomainComponent.edit(domain);
  }

  domainEdited($event) {
    this.database().object("domains/"+$event.$key).update({name: $event.name});
  }
}
