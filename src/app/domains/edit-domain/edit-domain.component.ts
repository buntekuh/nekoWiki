import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Domain } from '../domain';

@Component({
  selector: 'app-edit-domain',
  templateUrl: './edit-domain.component.html',
  styleUrls: ['./edit-domain.component.scss'],
})
export class EditDomainComponent implements OnInit {
  domain : Domain;
  name   : string;
  key    : number;
  hidden : string = 'hidden';
  @Output('domainEdited') domainEdited : EventEmitter<Domain> = new EventEmitter<Domain>();

  constructor() { }

  ngOnInit() {
  }

  public edit(domain) {
    this.domain = domain;
    this.name = domain.name;
    this.key = domain.$key;
    this.hidden = '';
  }

  submit(form: NgForm) {
    this.domainEdited.emit(this.domain);
  }

}
