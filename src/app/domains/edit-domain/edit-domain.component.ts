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
  hidden : string = 'hidden';
  submitButtonCaption : string;
  deleteHidden : string;

  @Output('domainEdited') domainEdited : EventEmitter<Domain> = new EventEmitter<Domain>();

  constructor() { }

  ngOnInit() {
  }

  hide() : void {
    this.hidden = "hidden";
  }

  show(domain: Domain) : void {
    this.domain = domain;
    this.name = domain.name;
    this.hidden = '';
  }

  new(domain) {
    this.submitButtonCaption = "Create";
    this.deleteHidden = 'hidden';
    this.show(domain);
  }

  edit(domain) {
    this.submitButtonCaption = "Update";
    this.deleteHidden = '';
    this.show(domain);
  }

  submit(form: NgForm) : boolean {
    this.hide();
    this.domain.name = form.value.name;
    this.domainEdited.emit(this.domain);
    return false;
  }

}
