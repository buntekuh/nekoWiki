import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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
    this.domains = this.angularFire.database.list('/domains');
  }

  new() {
    this.editDomainComponent.edit(new Domain());
  }

  edit(domain : Domain) : void {
    this.editDomainComponent.edit(domain);
  }

  update(domain : Domain) : void {
    console.log("blumm");
  }

}
