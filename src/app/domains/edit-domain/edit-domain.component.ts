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
  @Output('domainEdited') domainEdited : EventEmitter<Domain> = new EventEmitter<Domain>();

  constructor() { }

  ngOnInit() {
  }

  hide() : void {
    this.hidden = "hidden";
  }

  show() : void {
    this.hidden = '';
  }

  public edit(domain) {
    this.show();
    this.domain = domain;
    this.name = domain.name;
  }

  submit(form: NgForm) {
    this.hide();
    this.domain.name = form.value.name;
    this.domainEdited.emit(this.domain);
  }

}
